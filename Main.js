document.getElementById("MyButton").addEventListener("click", MyFunction); 

function MyFunction()
{
    let img = document.querySelector('img');
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=9gbql8qe2maI6TXYQW1zFIDrseyGxWZ3&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
      });
}