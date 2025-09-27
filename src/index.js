    let timer;

    function startTimer() {
      clearInterval(timer);
      const minutes = parseInt(document.getElementById('minutes').value);
      let seconds = minutes * 60;
      const countdown = document.getElementById('countdown');
      const alertSound = document.getElementById('alertSound');

      timer = setInterval(() => {
        const min = Math.floor(seconds / 60 );
        const sec = seconds % 60;
        countdown.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        seconds--;

        if (seconds === 0) {
          clearInterval(timer);
          countdown.textContent = 'Pausa pro café ☕';
          alertSound.play();
        }else{
            alert('Digite o tempo de concentração - 力');
            document.getElementById('minutes').focus();
            resetTimer();
            
        }
      }, 1000);
    }

    function resetTimer() {
      clearInterval(timer);
      document.getElementById('countdown').textContent = '00:00';
    }
