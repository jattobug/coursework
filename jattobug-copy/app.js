const input = document.querySelector('#wordInput');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#wordList');

let words = [];

const renderWords = () => {
    list.innerHTML = '';
    words.sort((a, b) => a.localeCompare(b, 'lt'));

    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        list.appendChild(li);
    });
};

const addWord = () => {
    const word = input.value.trim();
    if (word === '') return;

    words.push(word);
    input.value = '';
    renderWords();
};
addButton.addEventListener('click', addWord);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addWord();
    }
});