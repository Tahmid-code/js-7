let body = document.querySelector('body');
let scrollPage = document.querySelector('.scroll');
let progress = document.querySelector('.progress')
let nav = document.querySelector('#nav')

window.addEventListener('scroll', function (){
    let totalHeight = body.clientHeight;
    let topToBottom = window.scrollY;
    let innerHeight = window.innerHeight; 
    let heightCount = totalHeight - innerHeight; 
    let result = Math.round((100 / heightCount) * topToBottom);

   
        scrollPage.style.background = `conic-gradient(red, red ${result}%,  green, green ${result}%)`;
        // sub.innerHTML = result;
        // scrollPage.style.display = 'block'

    
        // scrollPage.style.display = 'none'

        progress.style.width = `${result}%`;

    

   





    console.log(result);
    
   
    
    
});

window.addEventListener('scroll', function (){
    if (window.scrollY > 600) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
    
    
})