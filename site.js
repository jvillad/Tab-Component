

const spansList = document.querySelectorAll('.tabs-toggle');
const contentList = document.querySelectorAll('.tabs-content');

spansList.forEach((span, i) => {      

    span.addEventListener('click', () => {

        contentList.forEach((content) => {
            content.classList.remove('is-active');                    
        });
        
        spansList.forEach((tab) => {
            tab.classList.remove('is-active');
        });  
        
        contentList[i].classList.add('is-active');
        spansList[i].classList.add('is-active');
    });

});
