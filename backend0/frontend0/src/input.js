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