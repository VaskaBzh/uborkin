document.addEventListener("DOMContentLoaded", function(event) {
    const smoothLinks = document.querySelectorAll('.header a[href^="#"]')
    const modal = document.querySelector('.back')
    const cross = document.querySelector('.cross')
    const links = document.querySelectorAll('.catalog a')
    const body = document.querySelector('body')

    links.forEach(function(link, index) {
        link.addEventListener('click', () => {
            modal.classList.add('show')
            body.classList.add('no-scroll')
        })
    })

    cross.addEventListener('click', () => {
        modal.classList.remove('show')
        body.classList.remove('no-scroll')
    })

    // modal.addEventListener('click', function(e) {
    //     if((!(e.target.parentNode.classList.contains('modal')))) {
    //         modal.classList.remove('show')
    //         body.classList.remove('no-scroll')
    //         console.log('efkeo')
    //     }
    // })

    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
});