let accordions = document.querySelectorAll('.accordion-container .accordion')

accordions.forEach(acco => {
    acco.onclick = () =>{
        acco.classList.add('active');    
    } 
})