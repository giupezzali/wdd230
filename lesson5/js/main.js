const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function() {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.textContent = input.value;
    btn.textContent = '❌';
    li.append(btn);
    list.append(li);
    btn.addEventListener('click', function() {
        list.removeChild(li);
    });
    input.focus();
    input.value = '';
});


