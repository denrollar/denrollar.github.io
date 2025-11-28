const API_KEY = "ec5d88052f9f80ecfa6031c129e93d8f";
const USER = "denrollar";
const output = document.getElementById("now-playing");

function fetchNowPlaying() {
  const old = document.getElementById("lfm-jsonp");
  if (old) old.remove();

  window.__lfmCallback = function (data) {
    try {
      const track = data.recenttracks.track[0];
      if (!track) {
        output.innerHTML = "";
        return;
      }

      const artist = track.artist["#text"] || "Unknown artist";
      const name = track.name || "Unknown track";
      const isPlaying = track["@attr"] && track["@attr"].nowplaying === "true";

      if (!isPlaying) {
        output.innerHTML = "";
        return;
      }
      const images = track.image || [];

      let imageSrc = "";
      for (let img of images) {
        if (img.size === "medium") {
          imageSrc = img["#text"];
          break;
        }
      }

      if (!imageSrc && images.length > 0) {
        imageSrc = images[0]["#text"];
      }

      output.innerHTML = `
          <div class="now-playing__status">Сейчас слушает</div>
        <div class="player-mini">
          <img class="player-mini__cover" src="${imageSrc}" alt="Album art" />
          <div class="player-mini__info">
            <div class="player-mini__track">${name}</div>
            <div class="player-mini__artist">${artist}</div>
          </div>
        </div>
      `;

    } catch (e) {
      output.textContent = "ошибка загрузки";
      console.error(e);
    }
  };

  const url =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks" +
    "&user=" + encodeURIComponent(USER) +
    "&api_key=" + encodeURIComponent(API_KEY) +
    "&format=json&limit=1" +
    "&callback=__lfmCallback&_=" + Date.now();

  const s = document.createElement("script");
  s.id = "lfm-jsonp";
  s.src = url;
  s.onerror = () => (output.textContent = "загрузка сети");
  document.body.appendChild(s);
}

fetchNowPlaying();
setInterval(fetchNowPlaying, 30000);
