document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;

    if (answer.classList.contains('open')) {
      answer.classList.remove('open');
      item.querySelector('.toggle-sign').textContent = '+';
    } else {
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
      document.querySelectorAll('.toggle-sign').forEach(sign => sign.textContent = '+');

      answer.classList.add('open');
      item.querySelector('.toggle-sign').textContent = '−';
    }
  });
});

  function toggleMenu() {
  const menu = document.getElementById('menu');
  const burgerIcon = document.querySelector('.burger-icon');
  menu.classList.toggle('active');
  burgerIcon.classList.toggle('active');
}
