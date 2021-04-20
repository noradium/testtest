const a = document.createElement('a');
a.href = "https://noradium.github.io/testtest/test.html";
document.body.appendChild(a);

const button = document.createElement('button');
document.body.appendChild(button);
button.addEventListener('click', event => {
  location.href = 'https://noradium.github.io/testtest/test.html';
});
