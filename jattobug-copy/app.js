const input = document.querySelector('#wordInput');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#wordList');

let words = localStorage.getItem('words');

if (words === null) {
    words = [];
} else {
    words = JSON.parse(words);
}

// Atvaizduoja žodžių sąrašą
const renderWords = () => {
    list.innerHTML = '';

    // Rikiuojam pagal abėcėlę
    words.sort((a, b) => a.localeCompare(b, 'lt'));

    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        list.appendChild(li);
    });
};

// Prideda žodį
const addWord = () => {
    const word = input.value.trim();

    if (word === '') return;

    words.push(word);
    localStorage.setItem('words', JSON.stringify(words));

    input.value = '';
    renderWords();
};

addButton.addEventListener('click', addWord);

// Užkrovus puslapį
renderWords();


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addWord();
    }
});