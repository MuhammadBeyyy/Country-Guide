let searchButton = document.getElementById('search-btn')

let countryInput = document.getElementById('country-inp')



searchButton.addEventListener('click',() => {
    let countryName = countryInput.value
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalUrl)
    fetch(finalUrl)
    .then(response => response.json())
    .then((response) => {
       console.log(response[0])
       console.log(response[0].capital)
       console.log(response[0].flags.png)
       console.log(response[0].name.common)
       console.log(response[0].altSpellings)
       console.log(response[0].borders)
       console.log(response[0].fifa)
       console.log(response[0].continents[0])
       console.log(response[0].population)
       console.log(response[0].currencies[Object.keys(response[0].currencies)].name)
       console.log(Object.values(response[0].languages).toString().split(",").join(","))
       result.innerHTML = `<img src={"response[0].flags.png"} class="flag-img">
       <h2>${(response[0].name.common)}</h2>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Capital :</h4>
            <span>${response[0].capital}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Continent :</h4>
            <span>${response[0].continents[0]}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Populations :</h4>
            <span>${response[0].population}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Currency : </h4>
            <span>${response[0].currencies[Object.keys(response[0].currencies)].name} - ${Object.keys(response[0].currencies)[0]}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Common Language : </h4>
            <span>${Object.values(response[0].languages).toString().split(",").join(",")}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Alternative spellings : </h4>
            <span>${response[0].altSpellings}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> Borders : </h4>
            <span>${response[0].borders}</span>
       </div>
       </div>
       <div class ="wrapper">
          <div class ="result-wrapper">
            <h4> FIFA: </h4>
            <span>${response[0].fifa}</span>
       </div>
       </div>
       `
    })
    .catch (() => {
        if(countryName.length == 0) {
            result.innerHTML = `<h3> THE INPUT FIELD CANNOT BE EMPTY!</h3>`
        } else {
            result.innerHTML = `<h3> PLEASE ENTER A VALID COUNTRY!</h3>`
        }
    })
       
})

