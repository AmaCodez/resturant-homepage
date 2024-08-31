
const contactPage = () => {
    const content = document.querySelector('#content');
    content.className = '';
    content.classList.add('contact-tab');

    const contactBanner = document.createElement('div');
    contactBanner.classList.add('contact-banner');
    const contactBannerGradient = document.createElement('div');
    contactBannerGradient.classList.add('contactbanner-gradient');

    const contactHeading = document.createElement('h1');
    contactHeading.classList.add('contact-heading');
    contactHeading.textContent = 'Contact';

    contactBannerGradient.appendChild(contactHeading);
    contactBanner.appendChild(contactBannerGradient);
    content.appendChild(contactBanner);

    // Child 2
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactUs = document.createElement('div'); 
    contactUs.classList.add('contact-us');

    const contactUsText = document.createElement('p');
    contactUsText.classList.add('contactUs-text');
    contactUsText.textContent = 'Contact Us';
    const contactUsHeading = document.createElement('h2');
    contactUsHeading.textContent = 'Get in touch';
    const contactPara = document.createElement('p');
    contactPara.classList.add('contact-para');
    contactPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nunc a ligula ornare placerat. Fusce ornare est quis nibh varius dignissim.';

    const contactUsInfo = document.createElement('div');
    contactUsInfo.classList.add('contactUs-info');

    const contactUsInfo1 = document.createElement('div');
    contactUsInfo1.classList.add('contactUs-subInfo');

    const clockNs = "http://www.w3.org/2000/svg";
    const clockSvg = document.createElementNS(clockNs, 'svg');
    clockSvg.setAttributeNS(null, "viewBox", "0 0 24 24");
    const clockTitle = document.createElementNS (clockNs, 'title');
    clockTitle.textContent = 'clock-time-nine';
    clockSvg.appendChild(clockTitle);
    const clockPath = document.createElementNS(clockNs, 'path');
    clockPath.setAttributeNS(null, "d","M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H7V11.5H11V7H12.5Z");
    clockSvg.appendChild(clockPath);

    const date = document.createElement('p');
    date.classList.add('info-text');
    date.textContent = 'Mon-Sun: 09am - 09pm';

    const contactUsInfo2 = document.createElement('div');
    contactUsInfo2.classList.add('contactUs-subInfo');

    const locationNs = "http://www.w3.org/2000/svg";
    const locationSvg = document.createElementNS(locationNs, 'svg');
    locationSvg.setAttributeNS(null, "viewBox", "0 0 24 24");
    const locationTitle = document.createElementNS (locationNs, 'title');
    locationTitle.textContent = 'map-marker';
    locationSvg.appendChild(locationTitle);
    const locationPath = document.createElementNS(locationNs, 'path');
    locationPath.setAttributeNS(null, 'd',"M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"  );
    locationSvg.appendChild(locationPath);

    const location = document.createElement('p');
    location.classList.add('info-text');
    location.textContent = 'Avenue Maribe 34567 NY';

    const contactUsInfo3 = document.createElement('div');
    contactUsInfo3.classList.add('contactUs-subInfo');

    const celNs = "http://www.w3.org/2000/svg";
    const celSvg = document.createElementNS(celNs, 'svg');
    celSvg.setAttributeNS(null, "viewBox", "0 0 24 24");
    const celTitle = document.createElementNS (celNs, 'title');
    celTitle.textContent = 'phone-classic';
    celSvg.appendChild(celTitle);
    const celPath = document.createElementNS(celNs, 'path');
    celPath.setAttributeNS(null, 'd', "M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z");
    celSvg.appendChild(celPath);

    const cel = document.createElement('p');
    cel.classList.add('info-text');
    cel.textContent = '301-382-4311';


    contactUsInfo1.appendChild(clockSvg);
    contactUsInfo1.appendChild(date);

    contactUsInfo2.appendChild(locationSvg);
    contactUsInfo2.appendChild(location);

    contactUsInfo3.appendChild(celSvg);
    contactUsInfo3.appendChild(cel);

    contactUsInfo.appendChild(contactUsInfo1);
    contactUsInfo.appendChild(contactUsInfo2);
    contactUsInfo.appendChild(contactUsInfo3);

    contactUs.appendChild(contactUsText);
    contactUs.appendChild(contactUsHeading);
    contactUs.appendChild(contactPara);
    contactUs.appendChild(contactUsInfo);

    contactInfo.appendChild(contactUs);
     content.appendChild(contactInfo);


    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Your Message';
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'userName';
    inputName.placeholder = 'Your Name';
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = 'userEmail';
    inputEmail.placeholder = 'Your Email';
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.classList.add('submitBtn');
    submitBtn.textContent = 'Submit';

    contactForm.appendChild(textarea);
    contactForm.appendChild(inputName);
    contactForm.appendChild(inputEmail);
    contactForm.appendChild(submitBtn);

    contactInfo.appendChild(contactForm);

    content.appendChild(contactInfo);

};

export default contactPage;