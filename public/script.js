const searchfield = document.getElementById("searchfield");
const insertfield = document.getElementById("insertfield");
const searchbtn = document.getElementById("searchbtn");
const insertbtn = document.getElementById("insertbtn");
const resultsDiv = document.getElementById("results");

searchbtn.addEventListener('click', ()=>{
    fetch('/search?find='+searchfield.value)
    .then(r=> r.text())
    .then(txt=>{
        resultsDiv.innerHTML = txt;
    })
})
insertbtn.addEventListener('click', ()=>{
    fetch('/insert?find='+searchfield.value)
    .then(r=> r.text())
    .then(txt=>{
        resultsDiv.innerHTML = txt;
    })
})