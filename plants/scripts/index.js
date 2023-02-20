// PLANTS#2
document.querySelector('.header-nav').addEventListener('click', function () {
    document.querySelector('.header').classList.remove('open')
})

document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open')
})



// PLANTS#3 SERVICES
document.querySelector('#garden-btn').addEventListener('click', function () {
    document.querySelector('#garden-btn').classList.toggle('activeBtn');
    // console.log(document.querySelector('#garden-btn').classList.contains('activeBtn'));
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting, .lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.planting, .lawn')) {
            elem.classList.add('blur');
        }
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.remove('blur');
        }
        document.querySelector('#lawn-btn').classList.remove('activeBtn');
        document.querySelector('#planting-btn').classList.remove('activeBtn');
    }
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting, .lawn')) {
            elem.classList.remove('blur');
        }
    }
})

document.querySelector('#lawn-btn').addEventListener('click', function () {
    document.querySelector('#lawn-btn').classList.toggle('activeBtn');
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden, .planting')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden, .planting')) {
            elem.classList.add('blur');
        }
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.remove('blur');
        }
        document.querySelector('#garden-btn').classList.remove('activeBtn');
        document.querySelector('#planting-btn').classList.remove('activeBtn');
    }
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#lawn-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#planting-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting, .garden')) {
            elem.classList.remove('blur');
        }
    }
})

document.querySelector('#planting-btn').addEventListener('click', function () {
    document.querySelector('#planting-btn').classList.toggle('activeBtn');
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden, .lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden, .lawn')) {
            elem.classList.add('blur');
        }
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.remove('blur');
        }
        document.querySelector('#garden-btn').classList.remove('activeBtn');
        document.querySelector('#lawn-btn').classList.remove('activeBtn');
    }
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === true &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#planting-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#garden-btn').classList.contains('activeBtn') === false &&
        document.querySelector('#lawn-btn').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden, .lawn')) {
            elem.classList.remove('blur');
        }
    }
})



// PLANTS#3 PRICES
document.querySelectorAll('.accordion').forEach((elem) => {
    elem.addEventListener('click', () => {
        let content = elem.nextElementSibling;
        let parent = elem.parentElement;
        let accordionImg = elem.getElementsByTagName('img')[0];

        document.querySelectorAll('.prices-menus-point').forEach((element) => {
            element.classList.remove('active');
            accordionImg.src = './images/accordion_dropdown.png';
        })

        document.querySelectorAll('.accordion-img').forEach((element) => {
            element.src = './images/accordion_dropdown.png';
        })

        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => { el.style.maxHeight = null })
        } else {
            document.querySelectorAll('.content').forEach((el) => { el.style.maxHeight = null })
            content.style.maxHeight = content.scrollHeight + 'px';
            parent.classList.add('active');
            accordionImg.src = './images/accordion_dropup.png';
        }

    })
})



// PLANTS#3 CONTACTS
let accordion = document.querySelector('.contacts-city');
let content = accordion.nextElementSibling;
let contactCityImg = document.querySelector('.contact-city-img');
let city = document.querySelectorAll('.city-name');
let cityBlock = document.querySelectorAll('.city-block');
let cityBlockArr = [];

cityBlock.forEach((el) => {
    cityBlockArr.push(el.parentElement.className);
})

accordion.addEventListener('click', () => {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        accordion.classList.remove('activeAccordion');
        contactCityImg.src = './images/accordion_dropdown_grey.png';

    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        accordion.classList.add('activeAccordion');
        contactCityImg.src = './images/accordion_dropup.png';

        for (let i = 0; i < cityBlockArr.length; i++) {
            if (cityBlock[i].parentElement.className === '') {
                cityBlock[i].parentElement.classList.add(cityBlockArr[i]);
            }
        }
    }
})

city.forEach((elem) => {
    elem.addEventListener('click', () => {
        document.querySelector('.contact-city-text').innerHTML = elem.firstChild.textContent;
        content.style.maxHeight = null;
        contactCityImg.src = './images/accordion_dropdown_grey.png';

        cityBlock.forEach((el) => {
            if (el.parentElement.className === elem.firstChild.textContent[0]) {
                el.parentElement.classList.remove(elem.firstChild.textContent[0]);
            }
        })
    })
})








console.log(`
PLANTS#3

Ваша оценка - 125 баллов`)