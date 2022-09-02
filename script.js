const burgerOpen = document.querySelector('.main-burger-open');
const burgerClose = document.querySelector('.mobile-burger-close');
const mobileNavBar = document.querySelector('.mobile-navbar');
const body = document.querySelector('body');

burgerOpen.addEventListener('click', () => {
    body.style.overflow = "hidden"; 
    mobileNavBar.style.display = "flex";
});

burgerClose.addEventListener('click', () => {
    body.style.overflow = "visible";
    mobileNavBar.style.display = "none";
});


/* Star rating */

const ratings = document.querySelectorAll('.skills-rating_container');
if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }

    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.skills-rating_active');
        ratingValue = rating.querySelector('.rating_value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating_item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index]; 
            ratingItem.addEventListener("mouseenter", (e) => {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value)
            })          
        }
    }


}
