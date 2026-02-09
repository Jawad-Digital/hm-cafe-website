const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.menu-section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    sections.forEach(section => section.classList.remove('active'));

    const targetId = tab.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection){
        targetSection.classList.add('active');
    }

  });
});
