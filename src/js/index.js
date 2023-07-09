import '../css/style.scss'

const textComponent = () => {
    const component = document.createElement('h1');
    component.innerText = 'Hello world';
    component.classList.add('title');
    return component
};

document.body.appendChild(textComponent())