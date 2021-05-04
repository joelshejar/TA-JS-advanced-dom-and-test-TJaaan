let quotesDiv = document.querySelector(".quotes");
let index = 0


 function addMore(){
    for(let i=0 ; i< 6; i++) {
       let div =  document.createElement("div");
       div.classList.add("quote");
       let h3 = document.createElement("h3");
       let p = document.createElement("p");
       h3.innerText = quotes[index].quoteText;
       p.innerText = quotes[index].quoteAuthor;
       div.append(h3,p)
       quotesDiv.append(div);
       index++
    }
}

addMore()

quotesDiv.addEventListener('scroll', function() {
    if (quotesDiv.scrollTop + quotesDiv.clientHeight >= quotesDiv.scrollHeight) {
      addMore();
    }
  });