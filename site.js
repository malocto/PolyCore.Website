const menuBtn=document.querySelector('.menu-toggle');
if(menuBtn){menuBtn.addEventListener('click',()=>document.body.classList.toggle('mobile-nav-open'));}
const formatSearch=document.querySelector('#formatSearch');
const typeFilter=document.querySelector('#typeFilter');
const tierFilter=document.querySelector('#tierFilter');
const formatRows=[...document.querySelectorAll('[data-format-row]')];
function filterFormats(){const q=(formatSearch?.value||'').toLowerCase();const t=typeFilter?.value||'all';const tier=tierFilter?.value||'all';formatRows.forEach(row=>{const matchQ=row.textContent.toLowerCase().includes(q);const matchT=t==='all'||row.dataset.type===t;const matchTier=tier==='all'||row.dataset.tier===tier;row.classList.toggle('hidden',!(matchQ&&matchT&&matchTier));});}
[formatSearch,typeFilter,tierFilter].forEach(el=>el?.addEventListener('input',filterFormats));
const tabs=document.querySelectorAll('[data-code-tab]');
const codeBlocks=document.querySelectorAll('[data-code-block]');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');codeBlocks.forEach(block=>block.classList.toggle('hidden',block.dataset.codeBlock!==tab.dataset.codeTab));}));
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const target=document.querySelector(btn.dataset.copy);if(!target)return;try{await navigator.clipboard.writeText(target.innerText);btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy',1400);}catch{btn.textContent='Select code';}}));
