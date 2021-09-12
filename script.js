let player = document.querySelector('.player');
let block = document.querySelector('.block');
let restart = document.querySelector('.restart');
let levels = document.querySelectorAll('.level')
let directions = document.querySelector('.directions');
let lost = false; 

restart.style.display = 'none';


let jump = () => {
  if (player.classList != 'player animation') {
    player.classList = 'player animation';
    setTimeout(() => {
      player.classList ='player';
    }, 500)
  }
}

window.addEventListener('keydown', (e) => {
  return (e.key === ' ') ? jump() : end;
} );

window.addEventListener('mousedown', (e) => {
  if (e.target.classList != 'restart' && e.target.parentElement.id != 'levels')
  jump();
});

window.addEventListener('touchstart', (e) => {
  if (e.target.classList != 'restart' && e.target.parentElement.id != 'levels')
  jump();
})

restart.addEventListener('click', () => {
  window.location.reload();
})

let checkDead = (blockLeft, playerTop) => {
  if (blockLeft < 60 && blockLeft > 0 && playerTop > 80) {
    lost = true;  
  }
}

let interval = setInterval(() => {
  let playerTop = 
  parseInt(window.getComputedStyle(player).getPropertyValue('top'));
  
  let blockLeft =
  parseInt(window.getComputedStyle(block).getPropertyValue('left'));

  checkDead(blockLeft, playerTop);
  
  if (lost === true) {
    directions.innerHTML = 'You lost.'
    restart.style.display = 'block';
    block.classList = 'block';
    block.style.left = blockLeft + 'px';
    levels.forEach(level => {level.disabled = true;})
    clearInterval(interval);
  }
}, 10);

let setLevel = (e) => {
  if (e.target.innerHTML == 'level 1') {
    block.classList = 'block level-one';
  } else if (e.target.innerHTML == 'level 2') {
    block.classList = 'block level-two';
  } else {
    block.classList = 'block level-three';
  }
  directions.innerHTML = 'Jump with spacebar, click, or touch'
}

levels.forEach(button=> button.addEventListener('click', setLevel));

/* directions.innerHTML = 'Jump by click, touch, or spacebar'; */