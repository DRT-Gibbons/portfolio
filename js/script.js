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