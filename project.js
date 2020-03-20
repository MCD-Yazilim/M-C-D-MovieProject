//Element Seçme
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    //Sayfa Yüklendiğinde bu iki fonksiyon sayesinde 
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    if(title === "" || director === "" || url === ""){
         //Hata
        UI.displayMessanges("Tüm alanları doldurunuz...","danger");
    }
    else{
        //Yeni Film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); //Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); //Storage film ekleme
        UI.displayMessanges("Film başarıyla eklendi...","success");
    }

    UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){
    // console.log(e.target);

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//film ismini  Storage fonksiyonuna gönder 
        //  console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessanges("Silme işlemi başarılı...","success");
    }

}
function clearAllFilms(){
    //Ekstra
    if(confirm("Emin misiniz ?")){
       UI.clearAllFilmsFromUI();
       Storage.clearAllFilmsFromStorage();
    }
}