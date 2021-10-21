function fetchData() {
  fetch('https://api.imgflip.com/get_memes')
  .then(res => {
    if(!res.ok){
      throw new Error("error")
    }
    return res.json()
  })
  .then(data => {
    console.log(data.data.memes)

    for(let i = 0; i<4; i++){
      j=Math.floor(Math.random() * (100 - 0) + 0)
      const name = data.data.memes[j].name
      const img = data.data.memes[j].url
      document.querySelector('#app').insertAdjacentHTML('beforebegin', `
      <div >
        <div class="card">
          <p class="para">Name: ${name}</p>
          <p class="para"><img src="${img}"width="600"height="500"></p>
        </div>
      </div>
      `)
    }
  })
  .catch(e => console.log(e))
}

fetchData()