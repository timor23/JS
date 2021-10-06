let Q = document.querySelector(`.qst`),
    width_ = Q.clientWidth;
const container = document.querySelector(`.container`),
    answersGrid = document.createElement(`div`);
answersGrid.style.display = `grid`;
answersGrid.style.gridRowGap = `10px`;
answersGrid.style.width = `${width_}`;
answersGrid.style.height = `200px`;
answersGrid.style.backgroundColor = `#ccc`;
answersGrid.style.textAlign = `center`;
answersGrid.style.border = `1px solid black`;

container.appendChild(answersGrid);

async function getQuestions() {
    const URL = `https://opentdb.com/api.php?amount=10&type=multiple`;
    const questions = await (await fetch(URL)).json();
    // console.log(questions);
    return questions;
}

async function run() {
    // try {
    //     let questions = await getQuestions();
    //     console.log(questions);
    // } catch (err) {
    //     console.log(err);
    // }
    let questions = await getQuestions();
    console.log(questions);

    for (let i = 0; i < questions.results.length; i++) {
        await showQuestion(questions.results[i]);
    }
}

async function showQuestion(question) {
    console.log(`qst: `, question);
    answersGrid.innerHTML = ``;
    let q = question.question,
        answers = [],
        incorrect = question.incorrect_answers,
        correct = question.correct_answer;
    Q.innerHTML = q;
    answers = incorrect.concat(correct);
    shuffle(answers);
     let goOn = false;

    answers.forEach((answer) => {
        const newDiv = document.createElement(`div`);
        newDiv.innerHTML = answer;
        answersGrid.appendChild(newDiv);

        newDiv.addEventListener(`click`, async (element) => {
            if (answer === correct) {
                newDiv.style.backgroundColor = 'green';
                await showJoke();
            } else {
                // newDiv.style.backgroundColor = 'red';
                alert(`Wrong!`);
            }
            setTimeout(``,3000);
            goOn = true;

        });
    })
    // while(!goOn) {
    //     //wait
    // }
    setTimeout(``, 5000)
    console.log(q);
}





async function showJoke() {
    const URL = `https://api.chucknorris.io/jokes/random`,
         joke = await (await fetch(URL)).json();

    alert(`good job! here's a joke for you:\n${joke.value}`);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    console.log(`shuffled: `, a);
    return a;
}


run();
// [{"category":"Entertainment: Books","type":"multiple","difficulty":"hard","question":"In the book &quot;The Martian&quot;, how long was Mark Watney trapped on Mars (in Sols)?","correct_answer":"549 Days","incorrect_answers":["765 Days","401 Days","324 Days"]}