const API_KEY = "ec5d88052f9f80ecfa6031c129e93d8f";
const USER = "denrollar";

const output = document.getElementById("now-playing");


function fetchNowPlaying() {

  const old = document.getElementById("lfm-jsonp");
  if (old) old.remove();


  window.__lfmCallback = function (data) {
    try {
      const track = data.recenttracks.track[0];
      const artist = track.artist["#text"] || "Unknown artist";
      const name = track.name || "Unknown track";
      const isPlaying = track["@attr"] && track["@attr"].nowplaying === "true";

      output.textContent = isPlaying
        ? ${artist} — ${name}
        : "Сейчас ничего не играет";
    } catch (e) {
      output.textContent = "Ошибка загрузки";
      console.error(e);
    }
  };

  const url =
    https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks +
    &user=${encodeURIComponent(USER)} +
    &api_key=${encodeURIComponent(API_KEY)} +
    &format=json&limit=1&callback=__lfmCallback&_=${Date.now()};

  const s = document.createElement("script");
  s.id = "lfm-jsonp";
  s.src = url;
  s.onerror = () => (output.textContent = "Ошибка сети/JSONP");
  document.body.appendChild(s);
}

fetchNowPlaying();
setInterval(fetchNowPlaying, 15000);