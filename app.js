const cubeContainer = document.querySelector('.cube-container');
// cube = document.querySelectorAll('.cube');
console.log(cubeContainer);
cubeContainer.addEventListener('mouseover', function (e) {
  const cube = e.target;
  cube.style.background = 'blue';
});
cubeContainer.addEventListener('mouseout', function (e) {
  const cube = e.target;
  cube.style.background = 'red';
});
