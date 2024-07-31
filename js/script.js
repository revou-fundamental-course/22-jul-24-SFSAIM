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

