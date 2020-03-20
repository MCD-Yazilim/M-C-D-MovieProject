function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
    
//     <!-- <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr> -->

const filmList = document.getElementById("films");

filmList.innerHTML += `
<tr>
     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
     <td>${newFilm.title}</td>
     <td>${newFilm.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>

`;
}
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "" ;
    element2.value = "" ;
    element3.value = "" ;
}
UI.prototype.displayMessanges = function(messange,type){
    const cardBody = document.querySelector(".card-body");
    //Alert divi oluştur

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent =messange;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1000);
}
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(function(films) {
        filmList.innerHTML += `
        <tr>
             <td><img src="${films.url}" class="img-fluid img-thumbnail"></td>
             <td>${films.title}</td>
             <td>${films.director}</td>
             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr>       
        `;       
    });
}
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove(); //Arayüzden kaldır ancak yenilemede geri gelir onun için storage kaldırma yapılacak

}
UI.prototype.clearAllFilmsFromUI =function (){

    const filmList = document.getElementById("films");

    //filmList.innerHtml = "";

    while(filmList.firstElementChild !== null){ //Child olduğu sürece temizler
      filmList.firstElementChild.remove();  
    }
}