const table = document.createElement('table')
document.body.append(table)
table.style.border = '1px solid black'
table.style.borderCollapse = 'collapse'
table.align = 'center'
table.style.textAlign = 'center'

async function getTenPeople() {
    const URL = `https://swapi.dev/api/people/`;
    let all = [];
    for (let i = 1; i <= 10; i++) {
        const character = await (await fetch(`${URL}${i}`)).json()
        const homeWorld = await (await fetch(character.homeworld)).json()
        let person = {
            name: character.name,
            hair: character.hair_color,
            height: character.height,
            planet: {
                name: homeWorld.name,
                population: homeWorld.population
            }
        }
        all.push(person)
    }
    return all
}

const createTable = async() => {
    let listOfTenPeople;
    try {
        listOfTenPeople = await getTenPeople()
    } catch (err) { console.log(err); }

    let output = '';
    for (let i = 0; i < 12; i++) {
        output += '<tr>'
        for (let j = 0; j < 5; j++) {
            if (i == 0 && j == 0) {
                output += `<th>Star Wars</th>`;
            } else if (i == 1 && j > 2) {
                output += `<td>planet ${Object.keys(Object.values(listOfTenPeople[0])[3])[j - 3]}</td>`;
            } else if (i == 1) {
                output += `<td>${Object.keys(listOfTenPeople[0])[j]}</td>`;
            } else if (i > 1 && j > 2) {
                output += `<td>${Object.values(Object.values(listOfTenPeople[i - 2])[3])[j - 3]}</td>`;
            } else if (i > 1) { output += `<td>${Object.values(listOfTenPeople[i - 2])[j]}</td>` }
            if (!i == 0 && j == 0) {}
        }
        output += '</tr>'
    }
    table.innerHTML = output;
    let th = document.querySelector('th');
    let td = document.querySelectorAll('td');
    let tr = document.querySelectorAll('tr');
    th.style.border = '1px solid black'
    th.colSpan = '5'
    th.style.backgroundColor = '#80b327'
    th.style.color = 'white'
    td.forEach(td => {
        td.style.border = '1px solid black'
    })
    tr.forEach((tr, i) => { i % 2 == 0 ? tr.style.backgroundColor = '#edf9d2' : tr.style.backgroundColor = '#e1f5b7' })
}
createTable()
