// Story picker
const buttons = document.querySelectorAll('.tabs button');
function show(id) {
  buttons.forEach(b => {
    const on = b.dataset.panel === id;
    b.setAttribute('aria-pressed', on);
    document.getElementById(b.dataset.panel).hidden = !on;
  });
}
buttons.forEach(b => b.addEventListener('click', () => show(b.dataset.panel)));
show(buttons[0].dataset.panel);

// Triple jump distance: 38 ft 10 in on a 40 ft line
const jump = document.querySelector('.jump');
const readout = jump.querySelector('.readout');
const measure = document.getElementById('measure');
const units = document.getElementById('units');
let metric = false;
let measured = false;
const result = () => metric ? '11.84 meters' : '38 feet, 10 inches';

measure.addEventListener('click', () => {
  const bar = jump.querySelector('.distance');
  bar.classList.remove('go');
  void bar.offsetWidth; // restart the animation
  bar.classList.add('go');
  measured = true;
  readout.textContent = result();
  measure.textContent = 'Measure again';
});
units.addEventListener('click', () => {
  metric = !metric;
  units.setAttribute('aria-pressed', metric);
  units.textContent = metric ? 'Show in feet' : 'Show in meters';
  if (measured) readout.textContent = result();
});

// Mark the menu link for the section on screen
const links = [...document.querySelectorAll('nav a[href*="#"]')];
const sections = links.map(a => document.querySelector(a.hash));
function mark() {
  let current = -1;
  sections.forEach((s, i) => {
    if (s.getBoundingClientRect().top < window.innerHeight * 0.35) current = i;
  });
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) current = sections.length - 1;
  links.forEach((a, i) => a.classList.toggle('here', i === current));
}
addEventListener('scroll', mark, { passive: true });
mark();
