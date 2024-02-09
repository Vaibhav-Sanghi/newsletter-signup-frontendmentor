document.onload = () => {
  document.querySelector('.sign-up-card').style.display = 'none';
  document.querySelector('.success-card').style.display = 'block';
};

document.querySelector('.sign-up-card button').addEventListener('click', () => {
  document.querySelector('.sign-up-card').style.display = 'none';
  document.querySelector('.success-card').style.display = 'block';
});

document.querySelector('.success-card button').addEventListener('click', () => {
  document.querySelector('.sign-up-card').style.display = '';
  document.querySelector('.success-card').style.display = 'none';
});
