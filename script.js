const video = document.getElementById('intro-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
  }
});

video.addEventListener('ended', function() {
  const overlay = document.getElementById('intro-overlay');
  overlay.style.display = 'none';
  playButton.style.display = 'block';
});
