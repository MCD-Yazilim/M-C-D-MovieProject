class Storage {

    static addFilmToStorage(newFilm){
        // console.log(newFilm);
        let films = this.getFilmsFromStorage();//Array al
    
        films.push(newFilm); //ekle
    
        /*
         {title:"abcdf",director:"Asdfg",url:"https//....."},
         {title:"bacdf",director:"Bsdfg",url:"https//....."},
         gibi objeleri almak için 
    
        */
    
        localStorage.setItem("films",JSON.stringify(films));/*Local Storage yazma
        Array'i string'e çevirmek için JSON.stringify kullanılır
        */
    }
    static getFilmsFromStorage(){ //her yerde kullanmak için 
        let films;
    
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            /*key varsa olan değeri almak için ancak localStorge
             string değerleri kabul ediyor dolayısıyla
             O zamana aladığımız değeri parse etmemiz sonra array çevirmemiz
            lazım
            */
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films; //fonksiyondan array dön
    }
    static deleteFilmFromStorage(filmTitle){
    
        //local storage film alma
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){ 
            if(film.title === filmTitle){ /* film başlığı gönderdiğim filmTitle eşitse
                 splice methodu index'den 1 tane hem arayüzden hemde localStorage'dan sil  */
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));//sildik ve yeniden yazmak için 
    }
    
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }

}
