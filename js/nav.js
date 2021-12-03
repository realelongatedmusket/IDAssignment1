const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-elements');
    const navElements = document.querySelectorAll('.nav-elements li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navElements.forEach((element, index) => {
            if (element.style.animation) {
                element.style.animation = '';
            } else {
                element.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();