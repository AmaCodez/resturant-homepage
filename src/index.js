import "./styles.css";

import { homePage, menuPage, contactPage } from "./pageContent";

homePage();

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    removeAllContent();
    homePage();
});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    removeAllContent();
    menuPage();
});

const contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    removeAllContent();
    contactPage();
});

export function removeAllContent() {
    const content = document.querySelector("#content")
    content.innerHTML = '';
};
