window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //меню

    //popup

    const tooglePopUp = () => {
        const popup = document.querySelector('.modal'),
        popupBtn = document.querySelectorAll('.footer-talk__button-link'),
        sendBtn = document.querySelectorAll('.modal__button'),
        //popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.modal__dialog');

        let beginPoint = -500;
        let setAnimation;

        const popupBegin = () => {
            
            let width = document.documentElement.clientWidth;
            setAnimation = requestAnimationFrame(popupBegin);
            beginPoint += 25; //скорость анимации
            popupContent.style.top = beginPoint + 'px';
            if(beginPoint > (width / 10)) {
                cancelAnimationFrame(setAnimation);
            }
        };

        
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let width = document.documentElement.clientWidth;
                popup.style.display = 'block';
                /*
                if(width > 768)
                {
                    popup.style.display = 'block';
                    popupBegin();
                }
                else {
                    popup.style.display = 'block';
                }*/
            });
         });

         /*popupClose.addEventListener('click', () => {

            beginPoint = 500;
            popup.style.display = 'none';
         });*/

         popup.addEventListener('click', (event) => {
             let target = event.target;
            if(target.classList.contains('modal__close')){
                popup.style.display = 'none'; 
            }
            else{
                target = target.closest('.modal__dialog');

                if(!target){
                    popup.style.display = 'none';
                }
            }


         });

    };
    tooglePopUp();

    const form = document.querySelector("form");
    const regExpName = /^[a-z0-9_-]{3,16}$/;
    const regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/i;
    const regExpMessage = /^[a-z0-9_-]{3,50}$/;

    let isValidate = false;
    const submit = () => {
        alert('Данные отправлены!');

        let form = document.createElement('form');
        let input = document.createElement('input');
        form.action = 'send.php';
        form.method = 'POST';
        console.log(input);
        form.innerHTML = "<input name='name' value='test'/>";
        document.body.append(form);
        form.submit();
        form.reset();
    }
    const validateElem = (elem) =>{
        if(elem.name === "name"){
            if (!regExpName.test(elem.value) && elem.value !== "" ){
                elem.nextElementSibling.textContent = "Введите корректное имя пользователя!";
                isValidate = false
            }
            else {
                elem.nextElementSibling.textContent = "";
                isValidate = true
            }

        }
        if (elem.name === "email"){
            if (!regExpEmail.test(elem.value) && elem.value !== "" ){
                elem.nextElementSibling.textContent = "Введите корректный email!";
                isValidate = false
            }
            else {
                elem.nextElementSibling.textContent = "";
                isValidate = true
            }
        }
        if (elem.name === "message"){
            if (!regExpMessage.test(elem.value) && elem.value !== "" ){
                elem.nextElementSibling.textContent = "Введите корректное message";
                isValidate = false
            }
            else {
                elem.nextElementSibling.textContent = "";
                isValidate = true
            }
        }
    }

    for(let elem of form.elements){
        if(elem.tagName !== 'BUTTON' && elem.tagName !== 'PATH'){
            elem.addEventListener("blur", () => {
                validateElem(elem);
            });
        }
    }

    form.addEventListener("submit", (event)=> {
        even.preventDefault();
        
        for(let elem of form.elements){
            if(elem.tagName !== 'BUTTON' && elem.tagName !== 'A' ){
                if(elem.value === ""){
                    //elem.nextElementSibling.textContent = "Данное поле не заполнено!";
                    isValidate = false
                }
                else {
                    elem.nextElementSibling.textContent = "";
                    isValidate = true
                }

            }
        }
        console.log(isValidate)
        alert("ddddddd")

        if(isValidate){
            //submit();
        }

    });
});