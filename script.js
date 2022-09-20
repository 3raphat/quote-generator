let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author");
let quoteTag = document.getElementById("quote-tag");
let btn = document.getElementById("button");

function getQuote() {
  btn.innerHTML = "Loading..."
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quoteText.innerText = data.content;
      quoteAuthor.innerText = data.author;
      quoteTag.innerText = data.tags;
      btn.innerHTML = `Get New Quote <i class="fa-solid fa-refresh"></i>`
    });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
