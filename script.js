const quizData = {
    sport: [
      {
        question: "Welk jaar werd de eerste FIFA World Cup gehouden?",
        choices: ["1930", "1940", "1950", "1960"],
        correct: "1930"
      },
      {
        question: "Wie won het meest recent de UEFA Champions League?",
        choices: ["Manchester City", "Real Madrid", "Liverpool", "Bayern München"],
        correct: "Real Madrid"
      },
      {
        question: "Wie is de topscorer aller tijden in het WK voetbal?",
        choices: ["Pele", "Diego Maradona", "Ronaldo", "Miroslav Klose"],
        correct: "Miroslav Klose"
      },
      {
        question: "Welk land won de meeste Olympische medailles?",
        choices: ["Verenigde Staten", "Rusland", "China", "Duitsland"],
        correct: "Verenigde Staten"
      },
      {
        question: "Wie is de meest succesvolle coach in de UEFA Champions League?",
        choices: ["Sir Alex Ferguson", "Carlo Ancelotti", "Zinedine Zidane", "Pep Guardiola"],
        correct: "Carlo Ancelotti"
      },
      {
        question: "Wat is de lengte van een voetbalveld in meters?",
        choices: ["90-120", "80-100", "100-130", "70-110"],
        correct: "90-120"
      },
      {
        question: "Wat is de maximum score in een voetbalwedstrijd?",
        choices: ["11", "15", "20", "10"],
        correct: "11"
      },
      {
        question: "Welke sport heeft de meeste deelnemers wereldwijd?",
        choices: ["Voetbal", "Basketbal", "Cricket", "Tennis"],
        correct: "Voetbal"
      },
      {
        question: "Hoeveel spelers heeft elk team in rugby?",
        choices: ["13", "15", "11", "7"],
        correct: "15"
      },
      {
        question: "Wat is de meest populaire sport in de VS?",
        choices: ["Basketbal", "American football", "Baseball", "Voetbal"],
        correct: "American football"
      },
    ],
    natuur: [
      {
        question: "Wat is de grootste oceaan ter wereld?",
        choices: ["Atlantische Oceaan", "Indische Oceaan", "Zuidelijke Oceaan", "Stille Oceaan"],
        correct: "Stille Oceaan"
      },
      {
        question: "Hoeveel tanden heeft een volwassen mens?",
        choices: ["28", "30", "32", "34"],
        correct: "32"
      },
      {
        question: "Wat is de grootste landdier?",
        choices: ["Olifant", "Nijlpaard", "Witte haai", "Giraffe"],
        correct: "Olifant"
      },
      {
        question: "Wat is de nationale bloem van Nederland?",
        choices: ["Tulp", "Roos", "Zonnebloem", "Lelie"],
        correct: "Tulp"
      },
      {
        question: "Welke gas vormt het grootste deel van de lucht die we inademen?",
        choices: ["Zuurstof", "Koolstofdioxide", "Stikstof", "Waterstof"],
        correct: "Stikstof"
      },
      {
        question: "Wat is de grootste woestijn ter wereld?",
        choices: ["Sahara", "Arabische woestijn", "Antartica", "Kalahari"],
        correct: "Antartica"
      },
      {
        question: "Welke soort dier is een koraal?",
        choices: ["Zoogdier", "Vissen", "Ongewerveld dier", "Reptiel"],
        correct: "Ongewerveld dier"
      },
      {
        question: "Hoeveel planeten zijn er in ons zonnestelsel?",
        choices: ["8", "9", "7", "6"],
        correct: "8"
      },
      {
        question: "Wat is de grootste soort schildpad?",
        choices: ["Zee schildpad", "Galapagos schildpad", "Landschildpad", "Lederschildpad"],
        correct: "Lederschildpad"
      },
      {
        question: "Wat is de levensduur van een gemiddelde huismus?",
        choices: ["1 jaar", "3 jaar", "5 jaar", "7 jaar"],
        correct: "3 jaar"
      },
    ],
    films: [
      {
        question: "Wie regisseerde de film 'Inception'?",
        choices: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
        correct: "Christopher Nolan"
      },
      {
        question: "Welk jaar kwam de film 'Titanic' uit?",
        choices: ["1995", "1997", "2000", "2002"],
        correct: "1997"
      },
      {
        question: "Wat is de hoogste omzet film ooit?",
        choices: ["Avatar", "Titanic", "Star Wars: The Force Awakens", "Avengers: Endgame"],
        correct: "Avengers: Endgame"
      },
      {
        question: "Wie speelt de rol van Jack Dawson in 'Titanic'?",
        choices: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Cruise"],
        correct: "Leonardo DiCaprio"
      },
      {
        question: "Welk Disney-personage heeft een vriend genaamd 'Nemo'?",
        choices: ["Woody", "Dory", "Simba", "Elsa"],
        correct: "Dory"
      },
      {
        question: "Welk genre is de film 'The Godfather'?",
        choices: ["Actie", "Drama", "Komisch", "Horror"],
        correct: "Drama"
      },
      {
        question: "Wie speelde de rol van Hermione Granger in de 'Harry Potter'-films?",
        choices: ["Emma Watson", "Anne Hathaway", "Natalie Portman", "Kristen Stewart"],
        correct: "Emma Watson"
      },
      {
        question: "Wat is de naam van de jonge tovenaar in 'Harry Potter'?",
        choices: ["Harry Potter", "Ron Weasley", "Draco Malfoy", "Neville Longbottom"],
        correct: "Harry Potter"
      },
      {
        question: "Wie speelt de rol van de Joker in 'The Dark Knight'?",
        choices: ["Heath Ledger", "Jared Leto", "Jack Nicholson", "Joaquin Phoenix"],
        correct: "Heath Ledger"
      },
      {
        question: "Welke film gaat over een jongen die opgroeit in de stad en de liefde van zijn leven zoekt?",
        choices: ["La La Land", "The Notebook", "A Star is Born", "Love Actually"],
        correct: "La La Land"
      }
    ],
    eten: [
      {
        question: "Wat is de belangrijkste ingrediënt in guacamole?",
        choices: ["Tomaat", "Avocado", "Uien", "Paprika"],
        correct: "Avocado"
      },
      {
        question: "Wat is het hoofdingrediënt in sushi?",
        choices: ["Rijst", "Vis", "Zeewier", "Groenten"],
        correct: "Rijst"
      },
      {
        question: "Wat is de nationale schotel van Spanje?",
        choices: ["Tortilla", "Paella", "Gazpacho", "Churros"],
        correct: "Paella"
      },
      {
        question: "Welk fruit is bekend als de 'koning van de vruchten'?",
        choices: ["Mango", "Druiven", "Durian", "Banaan"],
        correct: "Durian"
      },
      {
        question: "Wat is de belangrijkste smaakmaker in de Indische keuken?",
        choices: ["Kurkuma", "Gember", "Koriander", "Komijn"],
        correct: "Kurkuma"
      },
      {
        question: "Wat is het hoofdingrediënt van hummus?",
        choices: ["Kikkererwten", "Linzen", "Bonen", "Erwten"],
        correct: "Kikkererwten"
      },
      {
        question: "Wat voor soort voedsel is tofu?",
        choices: ["Melkproduct", "Vleesvervanger", "Graanproduct", "Groente"],
        correct: "Vleesvervanger"
      },
      {
        question: "Welk gerecht wordt meestal geserveerd met biefstuk?",
        choices: ["Aardappelpuree", "Pasta", "Groentemix", "Rijst"],
        correct: "Aardappelpuree"
      },
      {
        question: "Wat is de basis van een Caesar-salade?",
        choices: ["Lettuce", "Spinazie", "Kool", "Rucola"],
        correct: "Lettuce"
      },
      {
        question: "Wat is het belangrijkste ingrediënt in een moussaka?",
        choices: ["Aubergine", "Courgette", "Tomaat", "Paprika"],
        correct: "Aubergine"
      }
    ],
    muziek: [
      {
        question: "Wie is de zanger van de band Queen?",
        choices: ["Freddie Mercury", "Elton John", "David Bowie", "Paul McCartney"],
        correct: "Freddie Mercury"
      },
      {
        question: "Welk instrument speelt een pianospeler?",
        choices: ["Gitaar", "Piano", "Viool", "Drums"],
        correct: "Piano"
      },
      {
        question: "Wie is de artiest van het nummer 'Shape of You'?",
        choices: ["Ed Sheeran", "Justin Bieber", "Drake", "Ariana Grande"],
        correct: "Ed Sheeran"
      },
      {
        question: "Welk festival wordt jaarlijks gehouden in Nederland en is beroemd om zijn elektronische muziek?",
        choices: ["Tomorrowland", "Coachella", "Defqon.1", "Lollapalooza"],
        correct: "Defqon.1"
      },
      {
        question: "Wat is het bekendste nummer van Michael Jackson?",
        choices: ["Billie Jean", "Thriller", "Beat It", "Bad"],
        correct: "Billie Jean"
      },
      {
        question: "Welke band heeft het nummer 'Stairway to Heaven' uitgebracht?",
        choices: ["Led Zeppelin", "The Beatles", "Pink Floyd", "The Rolling Stones"],
        correct: "Led Zeppelin"
      },
      {
        question: "Wie won de Grammy voor Album van het Jaar in 2020?",
        choices: ["Billie Eilish", "Taylor Swift", "Ariana Grande", "Lizzo"],
        correct: "Taylor Swift"
      },
      {
        question: "Wat is het hoofddoel van muziek?",
        choices: ["Vermaken", "Communiceren", "Onderwijs", "Inspireren"],
        correct: "Vermaken"
      },
      {
        question: "Wie is de meest gestreamde artiest op Spotify?",
        choices: ["Drake", "Ed Sheeran", "Beyoncé", "The Weeknd"],
        correct: "Drake"
      },
      {
        question: "Welke muziekstijl is bekend om zijn ritmes en beats, en komt voort uit de Afro-Amerikaanse cultuur?",
        choices: ["Jazz", "Rock", "Hip-Hop", "Klassiek"],
        correct: "Hip-Hop"
      }
    ]
  };
  
  let currentQuestion = 0;
let score = 0;
let userName = "";
let selectedCategory = "";

const nameInput = document.getElementById('name-input');
const startBtn = document.getElementById('start-btn');
const categorySelect = document.getElementById('category');
const questionEl = document.querySelector('.question');
const choicesEl = document.querySelector('.choices');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.querySelector('.result-container');
const resultEl = document.querySelector('.result');
const feedbackEl = document.getElementById('feedback');
const progressBar = document.querySelector('.progress-bar');
const questionContainer = document.querySelector('.question-container');
const leaderboardList = document.getElementById('leaderboard-list');
const restartBtn = document.getElementById('restart-btn');

// Start de quiz
startBtn.addEventListener('click', () => {
    const enteredName = nameInput.value.trim();
    if (enteredName === "") {
        alert("Voer je naam in om de quiz te starten.");
        return;
    }

    userName = enteredName;
    selectedCategory = categorySelect.value; // Haal de gekozen categorie op
    if (!selectedCategory) {
        alert("Selecteer een categorie om de quiz te starten.");
        return;
    }

    document.querySelector('.name-input-container').style.display = "none";
    questionContainer.style.display = "block";
    submitBtn.style.display = "block";
    restartBtn.style.display = "none";

    loadQuestion();
});

// Laad de huidige vraag op basis van de geselecteerde categorie
function loadQuestion() {
    const currentQuiz = quizData[selectedCategory][currentQuestion]; // Laad vragen per categorie
    questionEl.innerText = currentQuiz.question;
    choicesEl.innerHTML = '';

    currentQuiz.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="radio" name="choice" id="choice${index}" value="${choice}">
            <label for="choice${index}">${choice}</label>
        `;
        choicesEl.appendChild(li);
    });

    updateProgressBar();
}

// Controleer antwoord
submitBtn.addEventListener('click', checkAnswer);

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="choice"]:checked');

    if (selectedOption) {
        const answer = selectedOption.value;

        if (answer === quizData[selectedCategory][currentQuestion].correct) { // Controleer per categorie
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData[selectedCategory].length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Selecteer een antwoord om door te gaan.");
    }
}

// Toon het resultaat na afloop
function showResult() {
    questionContainer.style.display = "none";
    submitBtn.style.display = "none";
    resultContainer.style.display = "block";

    resultEl.innerText = `Je hebt ${score} van de ${quizData[selectedCategory].length} vragen goed!`;
    feedbackEl.innerText = score === quizData[selectedCategory].length ? "Geweldig gedaan!" : "Goed geprobeerd!";
    restartBtn.style.display = "block";

    saveScoreToLeaderboard(userName, score); // Sla de score op in localStorage
    displayLeaderboard(); // Toon de bijgewerkte ranglijst
}

// Voortgangsbalk updaten
function updateProgressBar() {
    const progressPercentage = ((currentQuestion + 1) / quizData[selectedCategory].length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Herstart de quiz
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    resultContainer.style.display = "none";
    nameInput.value = "";
    document.querySelector('.name-input-container').style.display = "block";
});

// Sla de naam en score op in localStorage
function saveScoreToLeaderboard(name, score) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name, score });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Functie om de ranglijst weer te geven op de pagina
function displayLeaderboard() {
    const leaderboardContainer = document.getElementById('leaderboard-list');
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    leaderboardContainer.innerHTML = ''; // Maak de huidige lijst leeg

    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboardContainer.appendChild(li);
    });
}
