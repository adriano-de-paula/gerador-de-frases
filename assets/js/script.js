const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";


async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    loadTranslation();
    author.innerHTML = data.author;
}

function loadTranslation() {
    fetch(`https://api.mymemory.translated.net/get?q=${quote.innerHTML}&langpair=en|pt`)
      .then((res) => res.json())
      .then((data) => {quote.innerHTML = data.responseData.translatedText;
    });
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - " + author.innerHTML, "Tweet Window", "width=600, height=400");
}



getQuote(api_url);

