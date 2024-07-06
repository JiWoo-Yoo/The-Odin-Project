export function loadMenu() {
    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    contentDiv.appendChild(h1);

    for(let i = 0; i < 5; i++){
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa, excepturi officia blanditiis earum vitae delectus obcaecati recusandae expedita vel mollitia. Impedit vitae quis provident aspernatur, officiis iste assumenda quasi.';
        contentDiv.appendChild(paragraph);
    }
    
}