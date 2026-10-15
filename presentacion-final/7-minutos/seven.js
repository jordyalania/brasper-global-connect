const mainSlides=[...document.querySelectorAll('.slides>section:not([data-appendix])')];
const durations=mainSlides.map(s=>Number(s.dataset.duration));
const print=location.search.includes('print-pdf');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const video=document.getElementById('product-video');
Reveal.initialize({width:1280,height:720,margin:.02,center:false,hash:true,transition:reduce?'none':'fade',controls:true,progress:true,overview:true,pdfSeparateFragments:false,pdfMaxPagesPerSlide:1,plugins:[RevealNotes]});
function animate(){if(Reveal.getCurrentSlide().id!=='video')video.pause();if(!reduce&&!print&&window.gsap)gsap.fromTo(Reveal.getCurrentSlide().querySelectorAll('.kinetic'),{y:22,opacity:0},{y:0,opacity:1,duration:.4,ease:'power2.out'});updateTimer()}
Reveal.on('ready',animate);Reveal.on('slidechanged',animate);
document.getElementById('home').onclick=()=>Reveal.slide(0);
document.getElementById('appendix').onclick=()=>Reveal.slide(mainSlides.length);
document.getElementById('fullscreen').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
function play(){video.paused?video.play().catch(()=>{}):video.pause()}
document.getElementById('play-video').onclick=play;
video.addEventListener('play',()=>document.getElementById('play-video').textContent='Pausar');video.addEventListener('pause',()=>document.getElementById('play-video').textContent='Reproducir');
const timer=document.getElementById('timer'),clock=document.getElementById('clock'),pace=document.getElementById('pace');let elapsed=0,startedAt=null;
function seconds(){return elapsed+(startedAt===null?0:(performance.now()-startedAt)/1000)}
function updateTimer(){const s=Math.floor(seconds());clock.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');const i=Reveal.isReady()?Reveal.getIndices().h:0;const end=durations.slice(0,i+1).reduce((a,b)=>a+b,0);pace.textContent=i<mainSlides.length?`Hasta ${String(Math.floor(end/60)).padStart(2,'0')}:${String(end%60).padStart(2,'0')} · 07:00 total`:'Anexo · fuera de tiempo';timer.classList.toggle('over',s>420)}
document.getElementById('timer-toggle').onclick=()=>timer.hidden=!timer.hidden;
document.getElementById('start').onclick=()=>{if(startedAt===null){startedAt=performance.now();document.getElementById('start').textContent='Pausar'}else{elapsed=seconds();startedAt=null;document.getElementById('start').textContent='Continuar'}updateTimer()};
document.getElementById('reset').onclick=()=>{elapsed=0;startedAt=null;document.getElementById('start').textContent='Iniciar';updateTimer()};
if(!print)setInterval(updateTimer,250);
document.addEventListener('keydown',e=>{if(e.target.closest('button,input,textarea,video'))return;if(e.key.toLowerCase()==='t')timer.hidden=!timer.hidden;if(e.code==='Space'&&Reveal.getCurrentSlide().id==='video'){e.preventDefault();e.stopImmediatePropagation();play()}},true);
