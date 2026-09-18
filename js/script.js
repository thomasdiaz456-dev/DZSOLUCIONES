
const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
if(menu&&nav){menu.onclick=()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',opened?'Cerrar menú':'Abrir menú')};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú')})}
document.documentElement.classList.add('js-enabled');
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>{if(e.classList.contains('hero-content'))e.classList.add('show');else io.observe(e)});
