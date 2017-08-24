// main.js

function generateIpsum() {
  var xhr = new XMLHttpRequest();
  var paragraphs = parseInt(document.getElementById("paragraphs").value);
  var paragraphSize = parseInt(document.getElementById("paragraph-size").value);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      setResult(xhr.responseText);
    }
  }
  xhr.open("GET", "/text?paragraphs="+paragraphs+"&paragraphSize="+paragraphSize);
  xhr.send();
}

function setResult(text) {
  document.getElementById("result-text").innerHTML = text;
}

var el = document.getElementById("generate-button");
el.addEventListener("click", generateIpsum, false);
