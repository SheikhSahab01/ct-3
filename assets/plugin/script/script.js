
document.addEventListener('DOMContentLoaded',function(){
    
    //navbar fixed-top

    window.addEventListener('scroll',function(){
         const nav = document.querySelector('.nav-container');
        if(window.scrollY > 50){
           nav.classList.add('fixed-top');
        }
        else{
            nav.classList.remove('fixed-top');
        }
    })
     
    //testimonials

    const clients = document.querySelectorAll('.client');
    const reviewcol = document.querySelector('.review-column');

    const changeClientBackground = ()=>{
        clients.forEach((client)=>{
            if(client.getAttribute('aria-expanded') == 'true'){
                client.style.backgroundColor = '#eee'; 
            }
            else{
                client.style.backgroundColor = '#fff'; 
            }
        })
    };

    changeClientBackground();
    
    const mh3 = document.createElement('h3');
    mh3.appendChild(this.createTextNode('Click On Any Client To Check Their Review.'));
    mh3.style.color = '#0b1460';
    mh3.style.fontWeight = 700;
    mh3.style.textAlign = 'center';

    clients.forEach(function(client){
        client.addEventListener('click',()=>{
            changeClientBackground();
            if(client.getAttribute('aria-expanded') != 'true'){
                reviewcol.appendChild(mh3);
            }
            if(client.getAttribute('aria-expanded') == 'true'){
                if(reviewcol.contains(mh3)){
                    reviewcol.removeChild(mh3)
                }
            }
        })
    })
})