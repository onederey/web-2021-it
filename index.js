let a = null;
let b = null;

let tv = null;
let movie = null;

let tvButton = null;
let movieButton = null;

function changeButtonFocus(btn) {
  btn.style.color = "red";
  btn.style.borderBottom = "2px solid red";
}

function changeButtonUnFocused(btn) {
  btn.style.color = "black";
  btn.style.borderBottom = "0px solid red";
}

function setMovie() {
  tvButton = document.getElementById("tvButton");
  movieButton = document.getElementById("movieButton");

  changeButtonFocus(movieButton);
  changeButtonUnFocused(tvButton);

  movie = document.getElementById("movie");
  tv = document.getElementById("tv");

  movie.style.display = "block";
  tv.style.display="none";
}

function setTv() {
  tvButton = document.getElementById("tvButton");
  movieButton = document.getElementById("movieButton");

  changeButtonFocus(tvButton);
  changeButtonUnFocused(movieButton);

  movie = document.getElementById("movie");
  tv = document.getElementById("tv");

  movie.style.display = "none";
  tv.style.display="block";
}

function setFade(x) {

  if (x.id == "id1") {
    a = document.getElementById("blurid1");
    a.style.filter = "blur(2px)";

    b = document.getElementById("textid1");
    b.style.display = "block"
  }

  if (x.id == "id2") {
    a = document.getElementById("blurid2");
    a.style.filter = "blur(2px)";

    b = document.getElementById("textid2");
    b.style.display = "block"
  }

  if (x.id == "id3") {
    a = document.getElementById("blurid3");
    a.style.filter = "blur(2px)";

    b = document.getElementById("textid3");
    b.style.display = "block"
  }

  if (x.id == "id4") {
    a = document.getElementById("blurid4");
    a.style.filter = "blur(2px)";

    b = document.getElementById("textid4");
    b.style.display = "block"
  }
}
  
function delFade(x) {
    a.style.filter = "blur(0px)";
    b.style.display = "none";
}