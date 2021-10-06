const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
document.body.append(table);

document.title = "Star Wars";


async function getPeople() {
    const URL = `https://swapi.dev/api/people/`;
    let all = [];
    for (let i = 1; i <= 10; i++) {
        const character = await (await fetch(`${URL}${i}`)).json();
        const homeWorld = await (await fetch(character.homeworld)).json();
        let person = {
            name: character.name,
            hair: character.hair_color,
            height: character.height,
            planet: homeWorld.name,
            population: homeWorld.population
        }
        console.log(person);
        all.push(person);
    }
    return all;
}

async function createTable() {
    let list;
    try {
        list = await getPeople();
    } catch (err) {
        console.log(err);
    }

    let tr1 = document.createElement(`tr`); // first row > title
    let tr2 = document.createElement(`tr`); // decond row > keys
    let th = document.createElement(`th`);
    th.innerHTML = `Star Wars`;
    th.style.border = '1px solid black'
    th.colSpan = '5'
    th.style.backgroundColor = '#80b327'
    th.style.color = 'white'
    tr1.appendChild(th);
    table.appendChild(tr1);

    for (let i = 0; i < 5; i++) { //second row
        let td = document.createElement(`td`);
        td.innerHTML = Object.keys(list[0])[i];
        tr2.appendChild(td);
        td.style.border = '1px solid black';
    }
    tr2.style.backgroundColor = `#e1f5b7`;
    table.appendChild(tr2);
    for (let i = 2; i < 12; i++) {
        let tr = document.createElement(`tr`);
        if (i%2==0) {
            tr.style.backgroundColor = `#edf9d2`;
        } else {
            tr.style.backgroundColor = `#e1f5b7`;
        }
        for (let j = 0; j < 5; j++) {
            let td = document.createElement(`td`);
            td.innerHTML = Object.values(list[i - 2])[j];
            td.style.border = '1px solid black';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.appendChild();
}

createTable();