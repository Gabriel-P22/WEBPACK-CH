import '../css/style.scss';
import '../css/login.scss';

import { Component } from '../components/BaseInputComponent/input.js';
import { index } from '../js/index';
import { LoginButton } from '../components/LoginButtonComponent/index.js';
import { DefaultDiv } from '../components/BaseDivComponent/index.js';
import { getEmail, setEmail } from '../validation/validation.js';

export const loginPage = () => {
    let hasError = false;

    const emailInput = Component("input-email-login", "div-email-login", "label-email-login", hasError, "Email:");
    const passwordInput = Component("input-password-login", "div-password-login", "label-password-login", hasError, "Password:");
    const defaultDiv = DefaultDiv();
    const loginButton = LoginButton("login", "Logar", "login-button");
    
    index.appendChild(defaultDiv);
    defaultDiv.appendChild(emailInput);
    defaultDiv.appendChild(passwordInput);
    defaultDiv.appendChild(loginButton);
    
    loginButton.addEventListener('click', () => {
        const emailInput = document.querySelector('.input-email-login');
        const passwordInput = document.querySelector('.input-password-login');
        setAccount(emailInput.value, passwordInput.value);
        
    });
    
    const setAccount = (email, password) => {
        console.log(`Your password: ${password}`);
        console.log(`Your email: ${email}`);
        setEmail(email);
        console.log(`ABC ${getEmail()}`);
    }
}
