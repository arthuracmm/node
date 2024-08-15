const btn = document.querySelector('#send');

btn.addEventListener("click", function(e){
    e.preventDefault();

    const name = document.querySelector('#name');
    const desc = document.querySelector('#desc');
    const valor = document.querySelector('#valor');
    
    const value = {
        name : name.value,
        desc : desc.value,
        valor : valor.value
    }
    console.log(value);
})

const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('#picture__image');
const pictureImageText = "Escolha a imagem";

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__image');    

            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });
        reader.readAsDataURL(file);    
    } else {
        pictureImage.innerHTML = pictureImageText
    }
})