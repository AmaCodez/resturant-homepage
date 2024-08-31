import fishImage from "../assets/image/fish.png";
import waiterImage from "../assets/image/waiter.png";
import plateImage from "../assets/image/plate.png";
import veganImage from "../assets/image/healthy-food.png";

import { menuPage } from './pageContent'; 
import { removeAllContent } from './index';

const homePage = () => {
    const content = document.querySelector('#content');
    content.className = '';
    content.classList.add('home-tab');

    const intro = document.createElement('div');
    intro.classList.add('home-intro');

    const introHeadingFirst = document.createElement('h1');
    introHeadingFirst.classList.add('intro-heading');
    introHeadingFirst.textContent = 'Food For';

    const introHeadingSecond = document.createElement('h1');
    introHeadingSecond.classList.add('secondIntro-heading');
    introHeadingSecond.textContent = 'Your Soul';

    const introPara = document.createElement('p');
    introPara.classList.add('intro-para');
    introPara.textContent = `It's about good food and fresh ingredients.`;

    const introBtn = document.createElement('button');
    introBtn.classList.add('introBtn');
    introBtn.textContent = 'View Our Menu';

    introBtn.addEventListener("click", () => {
        removeAllContent(); 
        menuPage(); 
    });

    intro.appendChild(introHeadingFirst);
    intro.appendChild(introHeadingSecond);
    intro.appendChild(introPara);
    intro.appendChild(introBtn);

    content.appendChild(intro);

    //child 2
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const firstCard = document.createElement('div');
    firstCard.classList.add('card');

    const firstCardImg = document.createElement('img');
    firstCardImg.src = fishImage;
    firstCardImg.alt = 'fish icon';

    const firstCardHeading = document.createElement('h4');
    firstCardHeading.classList.add('card-heading');
    firstCardHeading.textContent = 'Fresh Ingredients';

    const firstCardPara = document.createElement('p');
    firstCardPara.classList.add('card-para');
    firstCardPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    
    const secondCard = document.createElement('div');
    secondCard.classList.add('card');

    const secondCardImg = document.createElement('img');
    secondCardImg.src = waiterImage;
    secondCardImg.alt = 'waiter icon';

    const secondCardHeading = document.createElement('h4');
    secondCardHeading.classList.add('card-heading');
    secondCardHeading.textContent = 'Best Recipes';

    const secondCardPara = document.createElement('p');
    secondCardPara.classList.add('card-para');
    secondCardPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const thirdCard = document.createElement('div');
    thirdCard.classList.add('card');

    const thirdCardImg = document.createElement('img');
    thirdCardImg.src = plateImage;
    thirdCardImg.alt = 'plate icon';

    const thirdCardHeading = document.createElement('h4');
    thirdCardHeading.classList.add('card-heading');
    thirdCardHeading.textContent = 'Happy Clients';

    const thirdCardPara = document.createElement('p');
    thirdCardPara.classList.add('card-para');
    thirdCardPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const fourthCard = document.createElement('div');
    fourthCard.classList.add('card');

    const fourthCardImg = document.createElement('img');
    fourthCardImg.src = veganImage;
    fourthCard.alt = 'vegetable icon';

    const fourthCardHeading = document.createElement('h4');
    fourthCardHeading.classList.add('card-heading');
    fourthCardHeading.textContent = 'Vegan Menu';

    const fourthCardPara = document.createElement('p');
    fourthCardPara.classList.add('card-para');
    fourthCardPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    firstCard.appendChild(firstCardImg);
    firstCard.appendChild(firstCardHeading);
    firstCard.appendChild(firstCardPara);

    secondCard.appendChild(secondCardImg);
    secondCard.appendChild(secondCardHeading);
    secondCard.appendChild(secondCardPara);

    thirdCard.appendChild(thirdCardImg);
    thirdCard.appendChild(thirdCardHeading);
    thirdCard.appendChild(thirdCardPara);

    fourthCard.appendChild(fourthCardImg);
    fourthCard.appendChild(fourthCardHeading);
    fourthCard.appendChild(fourthCardPara);

    cardContainer.appendChild(firstCard);
    cardContainer.appendChild(secondCard);
    cardContainer.appendChild(thirdCard);
    cardContainer.appendChild(fourthCard);

    content.appendChild(cardContainer);

    // child 3
    const reservationContainer = document.createElement("div");
    reservationContainer.classList.add("reserve-container");

    const gradientContainer = document.createElement('div');
    gradientContainer.classList.add('reserve-gradient');

    const reservationHeading = document.createElement('h2');
    reservationHeading.classList.add('reserve-heading');
    reservationHeading.textContent = 'Book a Table';
    const reservationPara = document.createElement('p');
    reservationPara.classList.add('reserve-para');
    reservationPara.textContent ='Aenean sit amet diam lectus. Aliquam eget malesuada libero, in malesuada sapien. Praesent sed elit mauris.';
    const reservationBtn = document.createElement('button');
    reservationBtn.classList.add('reserveBtn');
    reservationBtn.textContent = 'Reservation';

    gradientContainer.appendChild(reservationHeading);
    gradientContainer.appendChild(reservationPara);
    gradientContainer.appendChild(reservationBtn);

    reservationContainer.appendChild(gradientContainer);

    content.appendChild(reservationContainer);

    // child 4
    const collageContainer = document.createElement('div');
    collageContainer.classList.add('dish-img');

    const collageGradient = document.createElement('div');
    collageGradient.classList.add('collage-gradient');

    collageContainer.appendChild(collageGradient);
    content.appendChild(collageContainer);
};

export default homePage;