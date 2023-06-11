let movieNameRef = document.getElementById('movie-name');
let searchButtonRef = document.getElementById('search-btn');
let resultRef = document.getElementById('result');
let actorRef = document.querySelectorAll('actor');

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?apikey=8cb9c1be&t=${movieName}`;

    if(movieName.length <= 0){
        resultRef.innerHTML = `
            <h3 class="msg">
                Please enter a movie name.
            </h3>
        `;
    }
    else{
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            if(data.Response == "True"){
                resultRef.innerHTML = `
                <div class="info">
                    <img src="${data.Poster}" class="poster">
                    <div>
                        <h2>${data.Title}</h2><p class="type">${data.Type}</p>
                        <div class="rating">
                            <img src="star-icon.png">
                            <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>
                                ${data.Genre.split(',').join('</div><div>')}
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Actors:</h3>
                <p>${data.Actors}</p>
                `
            }else{
                resultRef.innerHTML = `
                <h3 class="msg">
                    ${data.Error}
                </h3>
                `
            }

        })
        .catch(err=>{
            resultRef.innerHTML = `
            <h3 class="msg">
                Error Occured.
            </h3>
            `
        })
    }
}

let getActor = () => {
    console.log("name")
}

actorRef.forEach(actor=>{actor.addEventListener('click',
    (event)=>{console.log(event)}
)})

searchButtonRef.addEventListener('click',getMovie);