function getElement(element) {
  return document.querySelector(element);
}

function getElements(element) {
  return document.querySelectorAll(element);
}

// function setAtt(elements, att, value) {
//   for (const element of getElements(elements)) {
//     if (value) {
//       element.setAttribute(att, value);
//     } else {
//       element.setAttribute(att, '');
//     }
//   }
// }

// for (const [i, input] of getElements('.test-8 input').entries()) {
//   input.addEventListener('input', () => {
//     if (i === 3) {
//       setAtt('.box', 'data-tilt');
//       setAtt('.box', 'data-tilt-speed', +input.value);
//     }
//   });
// }

const $lLabel = document.querySelector('.test-9 .header label');
const $leaves = document.querySelector('.test-9 .leaves');

$lLabel.addEventListener('click', () => {
  $leaves.classList.toggle('stop');
});
