const popMenu = () => {
    const burger = document.querySelector('.humberger');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
    document.querySelectorAll('.links').forEach((n) => {
      n.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      });
    });
  };
  popMenu();