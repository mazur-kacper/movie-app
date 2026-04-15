let tytul = document.getElementById("tytul");
let sprawdz = document.getElementById("sprawdz");
let dane = document.getElementById("dane");
let spinner = document.getElementById("spinner");

sprawdz.addEventListener("click", function () {
  let nazwaFilmu = tytul.value;

  if (nazwaFilmu === "") {
    alert("Wpisz tytuł filmu!");
    return;
  }
  spinner.style.display = "block";

  fetch(`http://www.omdbapi.com/?t=${nazwaFilmu}&apikey=891b8ba5`)
    .then((response) => response.json())
    .then((data) => {
      spinner.style.display = "none";
      if (data.Response === "False") {
        dane.innerHTML = `<p>Nie znaleziono filmu!</p>`;
        return;
      } else {
        console.log(data);
        dane.innerHTML = `
        <img src="${data.Poster}"/>
        <h2>${data.Title}</h2>
        <p>Rok: ${data.Year}</p>
        <p>Ocena: ${data.imdbRating}</p>
    `;
      }
    });
});
