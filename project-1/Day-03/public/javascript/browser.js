const outer = document.querySelector('#box-outer');

const randomColor = e => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };
    e.target.style.transition = '0s';
    e.target.style.backgroundColor = color;
};

const reset = e => {
    e.target.style.transition = '1s';
    e.target.style.backgroundColor = '#3a3a3a';
};

const attachEventListeners = box => {
    box.addEventListener('mouseover', (e) => randomColor(e));
    box.addEventListener('mouseout', (e) => reset(e));
};

const fillBox = () => {
    for(let j = 0; j < 20; j++) {
        const div = document.createElement('div');
        div.className = 'd-flex';
        for(let i = 0; i < 20; i++) {
            const span = document.createElement('span');
            span.className = 'box';
            attachEventListeners(span);
            div.appendChild(span);
        };
        outer.appendChild(div);
    };    
};

addEventListener('DOMContentLoaded', fillBox);