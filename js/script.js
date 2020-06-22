document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon')
    const menuIconItems = document.querySelectorAll('.menu-icon-item')

    menuIcon.addEventListener('click', () => {
        for (let a = 0; a < menuIconItems.length; a++) {
            menuIconItems[a].style.top = '27%';
        }
    })
    
})