
const searchField = document.getElementById('searchField');
const InsertField = document.getElementById('InsertField');
const SearchBtn = document.getElementById('SearchBtn');
const InsertBtn = document.getElementById('InsertBtn');
const resultsDiv = document.getElementById('results');

InsertBtn.addEventListener('click',()=>{
    fetch('/insert?doc=' + insertField.value)
    .then(r=>r.text())
    .then(txt=>resultsDiv.innerHTML=txt); 
});

SearchBtn.addEventListener('click', () => {
  fetch('/search?find='+ searchField.value)
    .then(r=>r.text())
    .then(txt=>resultsDiv.innerHTML=txt);
});
