 const api_url = "https://api.quotable.io/random";
 const quote = document.getElementById("quote");
 const author = document.getElementById("author");
 const quotess = document.getElementsByClassName("quotes");
const quotes = async () => {
    try{
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        quote.innerText=data.content;
        author.innerText= data.author;
    } catch(err) {
        console.log(`Error: ${err}`);
        quotess.innerHtml ="Failed to fetch quote.Please try again or after some time";
    }
}
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", ()=> {
    const quoteText = quote.textContent;
    navigator.clipboard.writeText(quoteText).then(()=>{
        alert("Quote is copied..")
    })
})