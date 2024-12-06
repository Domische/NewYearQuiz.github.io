const gameWindow = document.querySelector('.game__window');
const gameWindowFinish = document.querySelector('.game__window.finish');
const gameBlocks = document.querySelectorAll('.game__blocks_item');
const gameImg = document.querySelector('.game__img');
const gameInput = document.querySelector('.game__name_input');
const gameBtn = document.querySelector('.game__name_btn');
const gameResult = document.querySelector('.game__result');
const gameResultCoinsCount = document.querySelector('.game__result_coins_count');
const gameResultLevelCount = document.querySelector('.game__result_level_count');
let count = gameBlocks.length;

gameResultCoinsCount.innerHTML = count;

const arrImg = [
    {
        name: 'Один дома',
        imgSrc: 'images/kinopoisk.ru-Home-Alone-1445504.jpg',
        level: 1
    },
    {
        name: 'Гринч',
        imgSrc: 'images/How-the-Grinch-Stole-Christmas-61c1d86d0e013.webp',
        level: 2
    },
    {
        name: 'Чарли и шоколадная фабрика',
        imgSrc: 'images/Charlie-and-the-Chocolate-Factory-61c1ddbd87340.webp',
        level: 3
    },
    {
        name: 'Эльф',
        imgSrc: 'images/Elf-61c1da4941ea8.webp',
        level: 4
    },
    {
        name: 'Подарок на Рождество',
        imgSrc: 'images/929bab4854e14400ba4509b0b43b.jpg',
        level: 5
    },
]

gameImg.src = arrImg[0].imgSrc;
gameResultLevelCount.innerHTML = arrImg[0].level;

let clickCount = 0;

gameBlocks.forEach(el => {
    el.addEventListener('click', (event) => {
        clickCount++;
        if (clickCount <= 1) {
            // const index = Array.from(gameBlocks).indexOf(event.target);
            count--;
            el.classList.add('active')
            setTimeout(() => {
                el.classList.add('delete')
                clickCount = 0;
            }, 950)
            gameResultCoinsCount.innerHTML = count;
        }
    })
})

let levelCount = 0;

gameBtn.addEventListener('click', () => {
    if (levelCount < 4) {
        if (gameInput.value.replaceAll(' ', '').toLowerCase() === arrImg[levelCount].name.replaceAll(' ', '').toLowerCase()) {
            levelCount++;
            count += 4;
            gameResultCoinsCount.innerHTML = count;
            gameImg.src = arrImg[levelCount].imgSrc;
            gameResultLevelCount.innerHTML = arrImg[levelCount].level;
            gameBlocks.forEach(el => {
                el.classList.remove('active')
                el.classList.remove('delete')
            })
            gameInput.value = '';
        } else{
            alert('Неверно!')
            gameInput.value = '';
        }
    } else {
        gameWindow.style.display='none';
        gameWindowFinish.style.display='flex';
        gameInput.value = '';
    }
})
