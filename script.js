// Floating hearts logic
const heartContainer = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${2 + Math.random() * 3}s`;
  heartContainer.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 300);

// Apology pop
function lovePop() {
  const section = document.querySelector(".forgive");
  section.classList.add('fade-out');
  setTimeout(() => {
    section.innerHTML = `
      <div class="thankyou-message show">
        <h2>Thank You So Much 💗</h2>
        <p>I promise ki aisa firse kabhi nhi hogaa.. <br>Thank you soo much. Thum joo bologe vo karne ke liye tayar huu aur firsee Sorryy..</p>
      </div>
    `;
    section.classList.remove('fade-out');
    section.classList.add('fade-in');
  }, 600);
}
