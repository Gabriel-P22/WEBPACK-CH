export const Component = (classNameInput, classNameDiv, classNameLabel, hasError, componentTitle) => {
    const div = document.createElement('div');
    
    const label = labelComponent(classNameLabel, hasError, componentTitle)
    const input = inputComponent(classNameInput, hasError);

    div.appendChild(label);
    div.appendChild(input);

    if (!classNameDiv) {
        div.classList.add('');
    } else {
        div.classList.add(`${classNameDiv}`); 
    }

    return div;
};

const inputComponent = (className, hasError) => {
    const component = document.createElement('input');
    
    if (!className) {
        component.classList.add('default-class-name');
    } else {
        component.classList.add(`${className}`); 
    }

    if (hasError) {
        component.classList.add('componentError');
    } else {
        component.classList.remove('componentError');
    }

    return component;
}

const labelComponent = (className, hasError, componentTitle) => {
    const component = document.createElement('label');
    
    if (!className) {
        component.classList.add('default-class-name');
    } else {
        component.classList.add(`${className}`); 
    }

    if (hasError) {
        component.classList.add('componentError');
    } else {
        component.classList.remove('componentError');
    }

    component.innerText += componentTitle

    return component;
};
