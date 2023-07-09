import '../css/style.scss';
import '../css/login.scss';

import { InputBoxComponent } from '../components/BaseInputComponent/input.js';
import { index } from '../js/index';
import { LoginButton } from '../components/LoginButtonComponent/index.js';
import { DefaultDiv } from '../components/BaseDivComponent/index.js';

export const loginPage = () => {
    let hasError = false;
    
    const defaultDiv = DefaultDiv();
    const loginButton = LoginButton("login", "Logar", "login-button");

    index.appendChild(defaultDiv);
    defaultDiv.appendChild(InputBoxComponent("input-email-login", "div-email-login", "label-email-login", hasError, "Email:"));
    defaultDiv.appendChild(InputBoxComponent("input-password-login", "div-password-login", "label-password-login", hasError, "Password:"));
    defaultDiv.appendChild(loginButton);
    
    loginButton.addEventListener('click', () => {
        const email = document.querySelector('.input-email-login').value;
        const password = document.querySelector('.input-password-login').value;
    });
}
