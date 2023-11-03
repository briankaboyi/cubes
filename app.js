const cubeContainer = document.querySelector('.cube-container');
console.log(cubeContainer);

// mouse over/mouse out
cubeContainer.addEventListener('mouseover', function (e) {
  const cube = e.target;
  cube.style.background = 'blue';
});
cubeContainer.addEventListener('mouseout', function (e) {
  const cube = e.target;
  cube.style.background = 'red';
});

// click
cubeContainer.addEventListener('click', function (e) {
  const cube = e.target;
  cube.classList.toggle('blue');
  console.log('turned blue');
  // if (cube.style.background === 'blue') {
  //   cube.style.background = 'red';
  // } else if (cube.style.background === 'red') {
  //   cube.style.background = 'blue';
  // }
});
