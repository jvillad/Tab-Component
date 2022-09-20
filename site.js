

const spans = document.querySelectorAll('.tabs-toggle');
const contents = document.querySelectorAll('.tabs-content');

spans.forEach((span, i) => {      

    span.addEventListener('click', () => {

        contents.forEach((content) => {
            content.classList.remove('is-active');                    
        });
        
        spans.forEach((tab) => {
            tab.classList.remove('is-active');
        });  
        
        contents[i].classList.add('is-active');
        spans[i].classList.add('is-active');
    });

});