// .env and .gitignore for sensitive information
// require('dotenv').config();
// const myEmail = process.env.secEmail;


// Adding myEmail to appropriate spot via query selectors
// const emailArticle = document.querySelectorAll('.contact-detail')[1];
// const emailLabel = emailArticle.querySelector('.detail p');
// const emailValue = emailLabel.nextElementSibling;
// emailValue.textContent = myEmail;



// Basic page navigation variables
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
// Variable used for hamburger menu toggling
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

// Click eventListener for mobile hamburger menu functionality
menuIcon.addEventListener('click', () => {
    // X icon for cancelling menu dropdown
    menuIcon.classList.toggle('bx-x');
    
    navBar.classList.toggle('active');
});

const activePage = () => {
    // Variables for page change animation
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 800);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 800);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Removing mobile nav menu after click
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        // if link is not active, call activePage() to remove active class
        // and then add 'active' to whatever link was clicked
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            // Adding class to switch pages after animation plays
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 800);
        }

    });
});

// Same logic as above but checking whether we're on the home page
logoLink.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 800);
    }
});


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


const arrowRight = document.querySelector('.portfolio-box .port-navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .port-navigation .arrow-left');

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

// Obfucscating email and phone for bots and adding as text content
// Selecting all .detail divs
const detailDivs = document.querySelectorAll('.detail');

// Looping through each .detail div
detailDivs.forEach((detailDiv, index) => {
  // Finding all p tags inside the particular .detail div
  const pTags = detailDiv.querySelectorAll('p');
  
  // Check if there is a second <p> and if it's empty
  if (pTags.length > 1 && pTags[1].textContent.trim() === '') {
    // Update the text of the empty <p>
    if (index === 0) {
      pTags[1].textContent = "705" + "-" + "623" + "-" + "5793";
    } else if (index === 1) {
      pTags[1].textContent = "drt" + "gibb" + "@" + "gmail" + ".com";
    }
    // The third .detail div's second <p> isn't empty, so nothing happens
  }
});