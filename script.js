

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});

const menuBtn = document.querySelector('.custom-menu-btn');
        const nav = document.querySelector('.custom-nav');

        menuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });


        document.getElementById('unique-back-to-top').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });



        const menuBtn = document.querySelector('.unique-menu-btn');
        const nav = document.querySelector('.unique-nav');

        menuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });

