let player = document.querySelector('.player');
let block = document.querySelector('.block');
let restart = document.querySelector('.restart');
let lost = false;

window.addEventListener('click', () => {
  if (player.classList != 'player animation') {
    player.classList = 'player animation';
    setTimeout(() => {
      player.classList ='player';
    }, 400)
  }
} );

restart.addEventListener('click', () => {
  window.location.reload();
})

let checkDead = (blockLeft, playerTop) => {
  if (blockLeft < 60 && blockLeft > 20 && playerTop > 80) {
    console.log({blockLeft, playerTop});
    lost = true;
    block.style.animation = 'none';
    block.style.left = blockLeft + 'px';
    alert('you lose');
  }
}


let interval = setInterval(() => {
  let playerTop = 
  parseInt(window.getComputedStyle(player).getPropertyValue('top'));
  
  let blockLeft =
  parseInt(window.getComputedStyle(block).getPropertyValue('left'));

  checkDead(blockLeft, playerTop);
  if (lost === true) {
    clearInterval(interval);
  }

}, 10);