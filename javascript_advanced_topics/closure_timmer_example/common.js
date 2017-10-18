let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let timeSpan = document.querySelector('#time');

let timer = () => {
  let time = 0;
  let id;
  return {
    startTime: (cb) => {
      id = setInterval(function() {
        cb(time += 1)
      }, 1000)
    },
    stopTime: () => {
      clearInterval(id);
    },
    getTime: () => {
      return time;
    },
  }
}

startBtn.addEventListener('click', function() {
  startBtn.style.display = 'none';
  stopBtn.style.display = 'inline-block';
  

  newTime = timer();
  newTime.startTime(function(time) {
    timeSpan.innerText = time;
  });

  stopBtn.addEventListener('click', function() {
    newTime.stopTime();
    timeSpan.innerText = 0;
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
  });
});

