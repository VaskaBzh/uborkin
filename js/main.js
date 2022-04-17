'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
    const smoothLinks = document.querySelectorAll('.header a[href^="#"]')
    const modalGet = document.getElementById('get')
    const modalTake = document.getElementById('take')
    const crossTake = document.querySelector('.one')
    const crossGet = document.querySelector('.two')
    const modalOpen = document.querySelector('.hero__button')
    const modalOpenMobile = document.querySelector('.mobile__button')
    const modalOpenOrder = document.querySelector('.order__button')
    const links = document.querySelectorAll('.catalog a')
    const body = document.querySelector('body')
    const formGet = document.getElementById('form-get')
    const formTake = document.getElementById('form-take')
    const linkThanks = document.getElementById('thanks')
    const linkMain = document.getElementById('main')
    const propertyInput = document.querySelector('.input__hidden')
    const logoLink = document.querySelector('.logo')
    const logoLinkFooter = document.querySelector('#footer-link')

    logoLink.addEventListener('click', () => {linkMain.click()})
    logoLinkFooter.addEventListener('click', () => {linkMain.click()})

// валидация форм

    $('[type=tel]').mask('+7(000) 000-00-00');

// Форма заказа
    formGet.addEventListener('submit', formSendGet)

    async function formSendGet(e) {
        e.preventDefault()
        
        let error = formValidate(formGet)

        let formData = new FormData(formGet)

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST', 
                body: formData
            });
            if (response.ok) {
                let result = await response.json()
                alert(result.message)
                formGet.reset()
                modalGet.classList.remove('show')
                body.classList.remove('no-scroll')
                linkThanks.click()
            }  else {
                alert('ошибка')
            } 
        } else {
            alert('Заполните форму')
        }
    }

    const formValidate = function (form) {
        let error = 0
        let formReq = form.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)

            if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input)
                error++
            } else if (input.value === '') {
                formAddError(input)
                error++
            }
        }
        return error
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }
    
// Форма подбора
    formTake.addEventListener('submit', formSendTake)

    async function formSendTake(e) {
        e.preventDefault()
        
        let error = formValidate(formTake)

        let formData = new FormData(formTake)

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST', 
                body: formData
            });
            if (response.ok) {
                let result = await response.json()
                alert(result.message)
                modalTake.classList.remove('show')
                body.classList.remove('no-scroll')
                formTake.reset()
                linkThanks.click()
            } else {
                alert('ошибка')
            } 
        } else {
            alert('Заполните форму')
        }
    }

// модальное окно Подобрать Контейнер

    modalOpen.addEventListener('click', () => {
        modalTake.classList.add('show')
        body.classList.add('no-scroll')
    })
    modalOpenOrder.addEventListener('click', () => {
        modalTake.classList.add('show')
        body.classList.add('no-scroll')
    })
    modalOpenMobile.addEventListener('click', () => {
        modalTake.classList.add('show')
        body.classList.add('no-scroll')
    })

    crossTake.addEventListener('click', () => {
        modalTake.classList.remove('show')
        body.classList.remove('no-scroll')
    })

// Закрытие по пустому месту

//     modalTake.addEventListener('click', function(e) {
//         if((!(e.target.parentNode.classList.contains('modal')))) {
//             modalTake.classList.remove('show')
//             body.classList.remove('no-scroll')
//         }
//     })

// модальное окно Заказать

    links.forEach(function(link) {
        link.addEventListener('click', () => {
            modalGet.classList.add('show')
            body.classList.add('no-scroll')
            propertyInput.value = link.textContent
        })
    })

    crossGet.addEventListener('click', () => {
        modalGet.classList.remove('show')
        body.classList.remove('no-scroll')
    })

// Закрытие по пустому месту

    // modalGet.addEventListener('click', function(e) {
    //     if((!(e.target.parentNode.classList.contains('modal')))) {
    //         modalGet.classList.remove('show')
    //         body.classList.remove('no-scroll')
    //     }
    // })

// Прокрутка страницы

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