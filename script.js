// Copy the page address
const share = document.getElementById('share');
share.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href.split('#')[0]);
    share.textContent = 'Link copied';
  } catch {
    share.textContent = 'Copy it from the address bar';
  }
});

// Triple jump: 38 ft 10 in shown on a 40 ft bar
const measure = document.getElementById('measure');
measure.addEventListener('click', () => {
  const bar = document.querySelector('.distance');
  bar.classList.remove('go');
  void bar.offsetWidth; // restart the animation
  bar.classList.add('go');
  document.querySelector('.readout').textContent = '38 feet, 10 inches (11.84 meters)';
  measure.textContent = 'Measure again';
});
