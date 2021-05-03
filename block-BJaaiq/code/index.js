let quotesDiv = document.querySelector(".quotes");



 function loadMore(){
    for(let i=0 ; i< 6; i++) {
       let div =  document.createElement("div");
       div.classList.add("quote");
       let h3 = document.createElement("h3");
       let p = document.createElement("p");
       h3.innerText = quotes[i].quoteText;
       p.innerText = quotes[i].quoteAuthor;
       div.append(h3,p)
       quotesDiv.append(div);
    }
}

loadMore()

quotesDiv.addEventListener('scroll', function() {
    if (quotesDiv.scrollTop + quotesDiv.clientHeight >= quotesDiv.scrollHeight) {
      loadMore();
    }
  });