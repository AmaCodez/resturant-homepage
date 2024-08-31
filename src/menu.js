const menuPage = () => {
    const content = document.querySelector('#content');
    content.className = '';
    content.classList.add('menu-tab');

    const menuBanner = document.createElement('div');
    menuBanner.classList.add('menu-banner');
    const menuBannerGradient = document.createElement('div');
    menuBannerGradient.classList.add('banner-gradient');

    const menuHeading = document.createElement('h1');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Menu';

    menuBannerGradient.appendChild(menuHeading);
    menuBanner.appendChild(menuBannerGradient);
    content.appendChild(menuBanner);

    //child 2 
    const menuContainer = document.createElement('div'); 
    menuContainer.classList.add('menu-container');

    const appetizerContainer = document.createElement('div'); 
    appetizerContainer.classList.add('menu-dish');

    const appetizerSubTitle = document.createElement('p'); 
    appetizerSubTitle.classList.add('sub-title-app');
    appetizerSubTitle.textContent = 'Starter menu';
    
    const appetizerTitle = document.createElement('h2');
    appetizerTitle.classList.add('title');
    appetizerTitle.textContent = 'Appetizers';

    const appetizerMenuListContainer = document.createElement('div');
    appetizerMenuListContainer.classList.add('menu-list-container');

    const menuList1 = document.createElement('div');
    menuList1.classList.add('menu-list');

    const dishName1 = document.createElement('p');
    dishName1.classList.add('dish-name');
    dishName1.textContent = 'Greek Salad' + '.......................................' + '$16.50';

    const dishDetails1 = document.createElement('p');
    dishDetails1.classList.add('dish-details');
    dishDetails1.textContent = "Tomato, olives, and feta cheese";

    
    const menuList2 = document.createElement('div');
    menuList2.classList.add('menu-list');

    const dishName2 = document.createElement('p');
    dishName2.classList.add('dish-name');
    dishName2.textContent = 'Calamari' + '.......................................' + '$18.00';

    const dishDetails2 = document.createElement('p');
    dishDetails2.classList.add('dish-details');
    dishDetails2.textContent = "Fried calamari, lemon, and ranch";

   
    const menuList3 = document.createElement('div');
    menuList3.classList.add('menu-list');

    const dishName3 = document.createElement('p');
    dishName3.classList.add('dish-name');
    dishName3.textContent = 'Butternut Pumpkin' + '.......................................' + '$12.00';

    const dishDetails3 = document.createElement('p');
    dishDetails3.classList.add('dish-details');
    dishDetails3.textContent = "Pumpkin, tomato, basil, and nutmeg";


    const menuList4 = document.createElement('div');
    menuList4.classList.add('menu-list');

    const dishName4 = document.createElement('p');
    dishName4.classList.add('dish-name');
    dishName4.textContent = 'Shrimp scampi' + '.......................................' + '$14.60';

    const dishDetails4 = document.createElement('p');
    dishDetails4.classList.add('dish-details');
    dishDetails4.textContent = "Shrimp, butter, garlic, and parsley";
    

    // child2 - Main dish

    const mainDishContainer = document.createElement('div'); 
    mainDishContainer.classList.add('menu-dish');

    const mainDishSubTitle = document.createElement('p'); 
    mainDishSubTitle.classList.add('sub-title');
    mainDishSubTitle.textContent = 'Reservation';
    
    const mainDishTitle = document.createElement('h2');
    mainDishTitle.classList.add('title');
    mainDishTitle.textContent = 'Main Dishes';

    const mainDishMenuListContainer = document.createElement('div');
    mainDishMenuListContainer.classList.add('menu-list-container');

    const mainDishMenuList1 = document.createElement('div');
    mainDishMenuList1.classList.add('menu-list');

    const mainDishName1 = document.createElement('p');
    mainDishName1.classList.add('dish-name');
    mainDishName1.textContent = 'Beef sandwitch' + '.......................................' + '$25.50';

    const mainDishDetails1 = document.createElement('p');
    mainDishDetails1.classList.add('dish-details');
    mainDishDetails1.textContent = "Grilled beef patty, lettuce, and tomato ";

    
    const mainDishMenuList2 = document.createElement('div');
    mainDishMenuList2.classList.add('menu-list');

    const mainDishName2 = document.createElement('p');
    mainDishName2.classList.add('dish-name');
    mainDishName2.textContent = 'Seafood pasta alfredo' + '.......................................' + '$30.30';

    const mainDishDetails2 = document.createElement('p');
    mainDishDetails2.classList.add('dish-details');
    mainDishDetails2.textContent = "Creamy pasta, crab meat, shrimp, and scallops";

   
    const mainDishMenuList3 = document.createElement('div');
    mainDishMenuList3.classList.add('menu-list');

    const mainDishName3 = document.createElement('p');
    mainDishName3.classList.add('dish-name');
    mainDishName3.textContent = 'Garlic steak' + '.......................................' + '$29.70';

    const mainDishDetails3 = document.createElement('p');
    mainDishDetails3.classList.add('dish-details');
    mainDishDetails3.textContent = "Garlic butter, thyme, and white wine";


    const mainDishMenuList4 = document.createElement('div');
    mainDishMenuList4.classList.add('menu-list');
  
    const mainDishName4 = document.createElement('p');
    mainDishName4.classList.add('dish-name');
    mainDishName4.textContent = 'Stuffed chicken breast' + '.......................................' + '$35.60';

    const mainDishDetails4 = document.createElement('p');
    mainDishDetails4.classList.add('dish-details');
    mainDishDetails4.textContent = "Cream cheese, spinach, and morzarella cheese";


    // child2 - Drink Menu

    const drinkContainer = document.createElement('div'); 
    drinkContainer.classList.add('menu-dish');

    const drinkSubTitle = document.createElement('p'); 
    drinkSubTitle.classList.add('sub-title');
    drinkSubTitle.textContent = 'Reservation';
    
    const drinkTitle = document.createElement('h2');
    drinkTitle.classList.add('title');
    drinkTitle.textContent = 'Drink Menu';

    const drinkMenuListContainer = document.createElement('div');
    drinkMenuListContainer.classList.add('menu-list-container');

    const drinkMenuList1 = document.createElement('div');
    drinkMenuList1.classList.add('menu-list');

    const drinkName1 = document.createElement('p');
    drinkName1.classList.add('dish-name');
    drinkName1.textContent = 'Royal Arrival' + '.......................................' + '$19';

    const drinkDetails1 = document.createElement('p');
    drinkDetails1.classList.add('dish-details');
    drinkDetails1.textContent = "Captin Morgan spiced rum, pineapple";

    
    const drinkMenuList2 = document.createElement('div');
    drinkMenuList2.classList.add('menu-list');

    const drinkName2 = document.createElement('p');
    drinkName2.classList.add('dish-name');
    drinkName2.textContent = 'Moscato Cavit' + '.......................................' + '$14';

    const drinkDetails2 = document.createElement('p');
    drinkDetails2.classList.add('dish-details');
    drinkDetails2.textContent = "Chile";

   
    const drinkMenuList3 = document.createElement('div');
    drinkMenuList3.classList.add('menu-list');

    const drinkName3 = document.createElement('p');
    drinkName3.classList.add('dish-name');
    drinkName3.textContent = 'Coco Spice' + '.......................................' + '$17';

    const drinkDetails3 = document.createElement('p');
    drinkDetails3.classList.add('dish-details');
    drinkDetails3.textContent = "Dark rum, fresh lime, Coke";


    const drinkMenuList4 = document.createElement('div');
    drinkMenuList4.classList.add('menu-list');

    const drinkName4 = document.createElement('p');
    drinkName4.classList.add('dish-name');
    drinkName4.textContent = 'Southern Star' + '.......................................' + '$14';

    const drinkDetails4 = document.createElement('p');
    drinkDetails4.classList.add('dish-details');
    drinkDetails4.textContent = "Tequilla, orange juice, grenadine";


    menuList1.appendChild(dishName1);
    menuList1.appendChild(dishDetails1);

    menuList2.appendChild(dishName2);
    menuList2.appendChild(dishDetails2);

    menuList3.appendChild(dishName3);
    menuList3.appendChild(dishDetails3);

    menuList4.appendChild(dishName4);
    menuList4.appendChild(dishDetails4);

    appetizerMenuListContainer.appendChild(menuList1);
    appetizerMenuListContainer.appendChild(menuList2);
    appetizerMenuListContainer.appendChild(menuList3);
    appetizerMenuListContainer.appendChild(menuList4);

    appetizerContainer.appendChild(appetizerSubTitle);
    appetizerContainer.appendChild(appetizerTitle);
    appetizerContainer.appendChild(appetizerMenuListContainer);

    menuContainer.appendChild(appetizerContainer);

    
    mainDishMenuList1.appendChild(mainDishName1);
    mainDishMenuList1.appendChild(mainDishDetails1);

    mainDishMenuList2.appendChild(mainDishName2);
    mainDishMenuList2.appendChild(mainDishDetails2);

    mainDishMenuList3.appendChild(mainDishName3);
    mainDishMenuList3.appendChild(mainDishDetails3);

    mainDishMenuList4.appendChild(mainDishName4);
    mainDishMenuList4.appendChild(mainDishDetails4);

    mainDishMenuListContainer.appendChild(mainDishMenuList1);
    mainDishMenuListContainer.appendChild(mainDishMenuList2);
    mainDishMenuListContainer.appendChild(mainDishMenuList3);
    mainDishMenuListContainer.appendChild(mainDishMenuList4);

    mainDishContainer.appendChild(mainDishSubTitle);
    mainDishContainer.appendChild(mainDishTitle);
    mainDishContainer.appendChild(mainDishMenuListContainer);

    menuContainer.appendChild(mainDishContainer);


    drinkMenuList1.appendChild(drinkName1);
    drinkMenuList1.appendChild(drinkDetails1);

    drinkMenuList2.appendChild(drinkName2);
    drinkMenuList2.appendChild(drinkDetails2);

    drinkMenuList3.appendChild(drinkName3);
    drinkMenuList3.appendChild(drinkDetails3);

    drinkMenuList4.appendChild(drinkName4);
    drinkMenuList4.appendChild(drinkDetails4);

    drinkMenuListContainer.appendChild(drinkMenuList1);
    drinkMenuListContainer.appendChild(drinkMenuList2);
    drinkMenuListContainer.appendChild(drinkMenuList3);
    drinkMenuListContainer.appendChild(drinkMenuList4);

    drinkContainer.appendChild(drinkSubTitle);
    drinkContainer.appendChild(drinkTitle);
    drinkContainer.appendChild(drinkMenuListContainer);

    menuContainer.appendChild(drinkContainer);

    content.appendChild(menuContainer);

    //Child 3

    const menuEndPage = document.createElement('div');
    menuEndPage.classList.add('end-page');

    content.appendChild(menuEndPage);

};

export default menuPage;