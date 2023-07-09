export const LoginButton = (href, text, className) =>  {
    const button = document.createElement('button');
    button.innerText += text
    if (!className) {
        button.classList.add('default-button');
    } else {
        button.classList.add(`${className}`); 
    }
    return button
};
