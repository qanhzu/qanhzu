const textElement = document.getElementById('text');
const texts = ['Em bé ngoan xinh iu của anh ơiii', 'Em bé biết gì hog', 'hôm nay là sinh nhật của em đóa'];
let currentIndex = 0;

function changeText() {
  textElement.classList.remove('fade-in');
  textElement.classList.add('fade-out');
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
    textElement.classList.remove('fade-out');
    textElement.classList.add('fade-in');
  }, 2000); // Thời gian fade-out là 2 giây
}

setInterval(changeText, 5000);

function changeMessage() {
  document.querySelector('.message-container').style.display = 'none';
  document.querySelector('.btn').style.display = 'none';
  
  const wishBox = document.getElementById('wishBox');
  wishBox.style.display = 'block';
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';  // Emoji trái tim

  heart.style.left = `${Math.random() * 100}vw`;

  document.body.appendChild(heart);

  heart.addEventListener('animationiteration', () => {
    heart.remove();
  });
}
setInterval(createHeart, 1200);
