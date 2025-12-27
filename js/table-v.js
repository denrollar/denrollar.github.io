function switchTable(index) {
  const buttons = document.querySelectorAll('.tab-button');
  const tables = document.querySelectorAll('.table-wrapper');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
    tables[i].classList.toggle('active', i === index);
  });
}
