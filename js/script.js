// ini Javascript

function formValidation(){
    let name = document.getElementById('input-name').value; 
    console.log(name);
    
    // Pengecekang dimana name tidak boleh ''
    if (name == ''){
        // Code ini akan dieksekusi ketika name ''
        alert('Maaf inputan anda kosong');
    } else {
        // Code ini akan dieksekusi ketika name tidak ''
        alert('Sukses menginput data');
    }
}

let indexSlide = 5; // [0, 1, 2, 3, 4, 5]
showSlide();

nextSlide(1)

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n){
    let listImage = document.getElementsByClassName ('main-content-banner');
    console.log(listImage);

    //Algoritma untuk mereset index dari slidenya
    if (n> listImage.length) indexSlide = 1;
    
    //algoritma untuk menghilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    // Algoritma untuk memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block';

}
