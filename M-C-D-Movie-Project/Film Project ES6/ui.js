// function UI(){

// }
class UI {

    static addFilmToUI(newFilm){ //static
    
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
        static clearInputs(element1,element2,element3){
            element1.value = "" ;
            element2.value = "" ;
            element3.value = "" ;
        }
        static displayMessanges(messange,type){
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
        static loadAllFilms(films){
            const filmList = document.getElementById("films");
        
            films.forEach(function(film) {
                filmList.innerHTML += `
                <tr>
                     <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                     <td>${film.title}</td>
                     <td>${film.director}</td>
                     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                  </tr>       
                `;       
            });
        }
        static deleteFilmFromUI(element){
            element.parentElement.parentElement.remove(); //Arayüzden kaldır ancak yenilemede geri gelir onun için storage kaldırma yapılacak
        
        }
        static clearAllFilmsFromUI(){
        
            const filmList = document.getElementById("films");
        
            //filmList.innerHtml = "";
        
            while(filmList.firstElementChild !== null){ //Child olduğu sürece temizler
              filmList.firstElementChild.remove();  
            }
        }
}
