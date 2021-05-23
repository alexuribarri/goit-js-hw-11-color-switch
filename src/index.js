//import './styles.css';

const bodyEl = document.querySelector('body');
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId;

const intervalStart = () => {
  intervalId = setInterval(bodyColorChange, 1000);
  startButton.disabled = true;
};

const stopEvent = () => {
  clearInterval(intervalId);
  startButton.disabled = false;
};

stopButton.addEventListener('click', stopEvent);

startButton.addEventListener('click', intervalStart);

const bodyColorChange = () => {
  return (bodyEl.style.background = `${colorPicker()}`);
};
const colorQtty = colors.length;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorPicker = () => {
  return colors[randomIntegerFromInterval(0, colorQtty - 1)];
};
