
function toggleTheme(){
  const link = document.getElementById('themeStylesheet');
  if(!link) return;
  const current = link.getAttribute('href');
  link.setAttribute('href', current === 'highfantasy.css' ? 'starwars.css' : 'highfantasy.css');
  // update aria-pressed for accessibility if button exists
  const btn = document.getElementById('toggleTheme');
  if(btn) btn.setAttribute('aria-pressed', btn.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('toggleTheme');
  if(btn) btn.addEventListener('click', toggleTheme);
});
