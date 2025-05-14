
const bar = document.getElementById('bar');
const close = document.getElementById('close'); // Corrected: get the 'close' element
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    });
}
