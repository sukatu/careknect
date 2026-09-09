const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(nav&&!nav.querySelector('a[href="products.html"]')){
  const about=nav.querySelector('a[href="about.html"]');
  const productLink=document.createElement('a');
  productLink.href='products.html';
  productLink.textContent='Products';
  if(location.pathname.endsWith('/products.html')) productLink.classList.add('active');
  about?.after(productLink);
}
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',open);
  });
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const button=document.querySelector('#find-care');const input=document.querySelector('#care-need');const result=document.querySelector('#navigator-result');if(button&&input&&result){button.addEventListener('click',()=>{if(!input.value.trim()){input.focus();input.style.borderColor='#ff806d';return}button.disabled=true;button.innerHTML='Mapping your need…';result.innerHTML='<div class="result-empty"><span class="spark">✦</span><strong>Reviewing verified services…</strong><p>Identifying the likely pathway, access requirements and suitable provider types.</p></div>';setTimeout(()=>{result.innerHTML='<div class="result-found"><span class="match">SUGGESTED CARE PATHWAY</span><h3>Rehabilitation & home-care support</h3><p>Based on your description, the next step may be an assessment by a physiotherapy or rehabilitation provider offering home visits.</p><div class="result-tags"><span>Verified providers</span><span>Near East Legon</span><span>Home visits</span></div><a href="contact.html">Speak to a Careknect coordinator →</a></div>';button.disabled=false;button.innerHTML='Find care options <span>→</span>'},1200)});input.addEventListener('input',()=>input.style.borderColor='')}
