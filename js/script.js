const resumeBtns = document.querySelectorAll('.resume-btn');

// Simple anonymous function to remove active from the current active class and add it
// to the one being clicked, then toggle resume details based on which is active
resumeBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[i].classList.add('active');
    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
// Getting the number of projects to use as the upper limit of index
const numberOfProjects = document.querySelectorAll(".portfolio-detail").length;

// Simple function to control the image carousel in the portfolio section
// translateX is used to move through each img based on the current index
const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Simple foreach loop to remove active class (currently displayed) 
    // and then add it to whatever index we're on
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    portfolioDetails[index].classList.add('active');

}

// Simple click eventlistener for changing index based on right/left arrow presses
// index is then used when activePortfolio() is called following click and iteration
arrowRight.addEventListener('click', () => {
    if(index < numberOfProjects - 2) {
        index++;
            // After moving right at least 1, you can move left again
            arrowLeft.classList.remove('disabled');
    } else {
        index = numberOfProjects - 1;
        // When reaching the end of the carousel, arrowRight is assigned a
        // disabled class, at which point, it can't continue moving right
        // Same logic in reverse is used for left
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if(index > 1) {
        index--;
        // After moving left at least 1, you can move right again
        arrowRight.classList.remove('disabled');
    } else {
        index=0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});