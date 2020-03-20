//Element Seçme
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI Objesini Başlatma
const ui = new UI();

//Stroge Objesi Üret
const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    //Sayfa Yüklendiğinde bu iki fonksiyon sayesinde 
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessanges("Tüm alanları doldurunuz...","danger");
    }
    else{
        //Yeni Film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        storage.addFilmToStorage(newFilm); //Storage film ekleme
        ui.displayMessanges("Film başarıyla eklendi...","success");
    }

    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){
    // console.log(e.target);

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//film ismini  Storage fonksiyonuna gönder 
        //  console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessanges("Silme işlemi başarılı...","success");
    }

}
function clearAllFilms(){
    //Ekstra
    if(confirm("Emin misiniz ?")){
       ui.clearAllFilmsFromUI();
       storage.clearAllFilmsFromStorage();
    }
}