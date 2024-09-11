const resetButton = document.querySelector('.reset');
const gridContainer = document.querySelector('.grid-container');
const gridSizeInput = document.querySelector('#grid-size-input');
const gridSizeInputLabel = document.querySelector(
  'label[for="grid-size-input"]'
);
const footer = document.querySelector('footer');
footer.innerHTML = `&#169; Himagiri ${new Date().getFullYear()}. All rights reserverd.`;

const CONTAINER_SIZE = '600px';
const square = document.createElement('div');

function init() {
  square.classList.add('square');
  gridContainer.style.height = gridContainer.style.width = CONTAINER_SIZE;
  createGrid(20);
}
init();

function createGrid(n) {
  gridSizeInput.value = n;
  gridSizeInputLabel.textContent = `${n} x ${n}`;
  square.style.height = square.style.width = `${
    Number.parseInt(CONTAINER_SIZE) / n
  }px`;

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < n * n; i++) {
    fragment.append(square.cloneNode());
  }

  gridContainer.innerHTML = '';
  gridContainer.append(fragment);
}

resetButton.addEventListener('click', function (e) {
  const squares = gridContainer.querySelectorAll('.square');
  console.log(squares);
  squares.forEach(
    (square) => (square.style.backgroundColor = `var(--color-primary-light)`)
  );
});

gridSizeInput.addEventListener('input', function (e) {
  createGrid(+e.target.value);
});

gridContainer.addEventListener('mouseover', function (e) {
  const square = e.target.closest('.square');
  if (!square) return;
  e.target.style.backgroundColor = `rgb(${generateRandomRGB()})`;
});

function generateRandomNumber(start, end) {
  return Math.trunc(start + Math.random() * (end - start));
}
function generateRandomRGB() {
  return Array.from({ length: 3 }, () => generateRandomNumber(0, 255)).join();
}
