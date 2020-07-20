document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon')
    const menuIconItems = document.querySelectorAll('.menu-icon-item')

    menuIcon.addEventListener('click', () => {
        for (let a = 0; a < menuIconItems.length; a++) {
            menuIconItems[a].classList.toggle('menu-on-st1')
            setTimeout(() => {
                menuIconItems[a].classList.toggle('menu-on-st2')
            }, 300)
        }
    })

    //main slider

    const container = document.querySelector('.slider-container');
    const translation = document.querySelector('.slider-translation');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.slider-prev-button');
    const nextBtn = document.querySelector('.slider-next-button');
    let slidesToShow = 3;
    let slidesToScroll = 1;
    const itemWidth = container.clientWidth / slidesToShow;
    //all left and right margins of a slide
    const sliderItemMargin = Number(window.getComputedStyle(sliderItems[0]).getPropertyValue("margin-left").replace(/\D+/g, "")) + Number(window.getComputedStyle(sliderItems[0]).getPropertyValue("margin-right").replace(/\D+/g, ""));
    console.log(container.clientWidth)
    for (let b = 0; b < sliderItems.length; b++) {
        sliderItems[b].style.minWidth = `${itemWidth - sliderItemMargin}px`
    }
    let move = 0;

    prevBtn.addEventListener('click', () => {
        move >= 0 ? move = -container.clientWidth : move = move + itemWidth * slidesToScroll
        translation.style.left = `${move}px`;


    })
    nextBtn.addEventListener('click', () => {
        move <= -container.clientWidth ? move = 0 : move = move - itemWidth * slidesToScroll
        translation.style.left = `${move}px`;
    })
})