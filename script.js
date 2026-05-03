const button = document.getElementById('mainBtn');
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        button.textContent = '👍 Класс!';
    } else if (clickCount === 2) {
        button.textContent = '🚀 Погнали!';
    } else {
        button.textContent = '💪 Ты нажал ' + clickCount + ' раз';
    }
});
