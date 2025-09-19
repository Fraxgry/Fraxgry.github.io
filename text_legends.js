const images = document.querySelectorAll('.grid img');
const displayText = document.getElementById('display-text');

images.forEach(img=>{
    img.addEventListener('click', ()=>{
        const text= img.getAttribute('data-text');
        displayText.textContent = text;

        displayText.scrollIntoView({behavior: 'smooth', block: 'start'});
    })
})


