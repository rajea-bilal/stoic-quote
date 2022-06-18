
const btn = document.querySelector('button')
const url = 'https://stoicquotesapi.com/v1/api/quotes/random'
const author = document.querySelector('p')
const quote = document.querySelector('h2')


btn.addEventListener('click', getFetch)



function getFetch(){

  fetch(url)
  .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        
        
        author.innerText = data.author;
        quote.innerText = data.body
        
       
        

       
    })
    
    .catch(err => {
        console.log(`error ${err}`)

    })
    
}

