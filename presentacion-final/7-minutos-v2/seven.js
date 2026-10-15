import {schedule, createRehearsalClock, formatTime} from './timing.mjs';
const items = schedule(JSON.parse(document.getElementById('pitch-data').textContent));
const byId = new Map(items.map((item, index) => [item.id, {...item, index}]));
const TOTAL = items.at(-1).end;
const print = location.search.includes('print-pdf');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const video = document.getElementById('product-video');
const timer = document.getElementById('timer');
const guide = document.getElementById('pitch-guide');
const clock = createRehearsalClock();
let current = byId.get(items[0].id), hasStarted = false, finished = false, resumeVideo = false;
const el = id => document.getElementById(id);
const buttons = items.map((item, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><span class="map-title"></span><span class="map-time"></span>`;
  button.querySelector('.map-title').textContent = item.label;
  button.querySelector('.map-time').textContent = `${formatTime(item.start)}–${formatTime(item.end)} · ${item.seconds}s`;
  button.onclick = () => Reveal.slide(index);
  el('timing-map').append(button);
  return button;
});
function tryPlayVideo() {
  video.play().catch(() => { resumeVideo = false; el('pace').textContent = 'Pulsa Reproducir para iniciar la demo'; });
}
function paint() {
  const state = clock.snapshot();
  el('clock').textContent = formatTime(Math.floor(state.total));
  timer.classList.toggle('total-over', state.total > TOTAL);
  timer.classList.toggle('appendix', !current);
  timer.classList.toggle('over', Boolean(current && state.activeSpent > current.seconds));
  timer.classList.toggle('warning', Boolean(current && state.running && current.seconds - state.activeSpent <= 5 && current.seconds - state.activeSpent >= 0));
  el('start').disabled = !current;
  el('start').textContent = state.running ? (current?.id === 'gracias' ? 'Finalizar' : 'Pausar') : finished ? 'Continuar ensayo' : hasStarted ? 'Continuar' : 'Iniciar ensayo';
  if (!current) {
    el('stage-label').textContent = 'Anexos · preguntas';
    el('stage-window').textContent = 'Fuera de los 7 minutos';
    el('phase-window').textContent = 'El cronómetro está pausado';
    el('slide-time-label').textContent = 'Sin tiempo asignado';
    el('slide-clock').textContent = '—';
    el('slide-progress').style.width = '0%';
    el('pace').textContent = 'Vuelve al pitch y pulsa Continuar';
    return;
  }
  const remaining = current.seconds - state.activeSpent;
  const phaseItems = items.filter(item => item.phase === current.phase);
  el('stage-label').textContent = `${String(current.index + 1).padStart(2, '0')} · ${current.label}`;
  el('stage-window').textContent = `${current.seconds}s asignados · ${formatTime(current.start)}–${formatTime(current.end)}`;
  el('phase-window').textContent = `${current.phase} · ${formatTime(phaseItems[0].start)}–${formatTime(phaseItems.at(-1).end)}`;
  el('slide-time-label').textContent = remaining < 0 ? 'Tiempo excedido en esta lámina' : 'Queda en esta lámina';
  el('slide-clock').textContent = `${remaining < 0 ? '+' : ''}${formatTime(Math.abs(remaining))}`;
  el('slide-progress').style.width = `${Math.min(100, state.activeSpent / current.seconds * 100)}%`;
  const difference = state.total - current.end;
  el('pace').textContent = finished ? 'Ensayo finalizado' : !hasStarted ? 'Listo · comienza desde la portada' : state.total > TOTAL ? `+${formatTime(state.total - TOTAL)} sobre los 7 minutos` : !state.running ? 'En pausa' : difference > 0 ? `+${formatTime(difference)} sobre la salida prevista` : `Salida de esta lámina: ${formatTime(current.end)}`;
}
function changed() {
  const section = Reveal.getCurrentSlide();
  current = byId.get(section.id) || null;
  if (!current) { clock.pause(); resumeVideo = false; }
  clock.focus(current?.id ?? null);
  if (section.id !== 'video') { video.pause(); resumeVideo = false; }
  else if (clock.snapshot().running) tryPlayVideo();
  buttons.forEach((button, index) => {
    if (current?.index === index) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });
  el('speech-title').textContent = current ? `${current.label} · ${current.seconds}s` : 'Preguntas y anexos';
  el('speech-text').textContent = current?.speech || 'Material de apoyo. El cronómetro del pitch está pausado durante los anexos.';
  if (!reduce && !print && window.gsap) gsap.fromTo(section.querySelectorAll('.kinetic'), {y:22,opacity:0}, {y:0,opacity:1,duration:.4,ease:'power2.out'});
  paint();
}
function toggleClock() {
  if (!current) return;
  if (clock.snapshot().running) {
    resumeVideo = current.id === 'video' && !video.paused;
    clock.pause();
    if (resumeVideo) video.pause();
    if (current.id === 'gracias') finished = true;
  } else {
    clock.start(); hasStarted = true; finished = false;
    if (current.id === 'video' && (resumeVideo || video.paused)) tryPlayVideo();
  }
  paint();
}
function toggleGuide(force) {
  guide.hidden = force === undefined ? !guide.hidden : !force;
  el('guide-toggle').setAttribute('aria-expanded', String(!guide.hidden));
}
function toggleTimes() {
  timer.hidden = !timer.hidden;
  document.body.classList.toggle('timing-hidden', timer.hidden);
  Reveal.layout();
}
el('home').onclick = () => Reveal.slide(0);
el('appendix').onclick = () => Reveal.slide(items.length);
el('fullscreen').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
el('timer-toggle').onclick = toggleTimes;
el('guide-toggle').onclick = () => toggleGuide();
el('guide-bottom').onclick = () => toggleGuide();
el('guide-close').onclick = () => { toggleGuide(false); el('guide-toggle').focus(); };
el('start').onclick = toggleClock;
el('reset').onclick = () => { clock.reset(); hasStarted = false; finished = false; resumeVideo = false; video.pause(); video.currentTime = 0; paint(); };
el('play-video').onclick = () => video.paused ? tryPlayVideo() : video.pause();
video.addEventListener('play', () => el('play-video').textContent = 'Pausar');
video.addEventListener('pause', () => el('play-video').textContent = 'Reproducir');
document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.target.closest('input,textarea,video,[contenteditable="true"]')) return;
  const key = event.key.toLowerCase();
  if (['t', 'g', 'p'].includes(key)) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (key === 't') toggleTimes();
    if (key === 'g') toggleGuide();
    if (key === 'p') toggleClock();
  } else if (event.code === 'Space' && !event.target.closest('button,a') && Reveal.getCurrentSlide()?.id === 'video') {
    event.preventDefault(); event.stopImmediatePropagation();
    video.paused ? tryPlayVideo() : video.pause();
  }
}, true);
Reveal.on('ready', changed);
Reveal.on('slidechanged', changed);
Reveal.initialize({width:1280,height:720,margin:.02,center:false,hash:true,transition:reduce?'none':'fade',controls:true,progress:true,overview:true,pdfSeparateFragments:false,pdfMaxPagesPerSlide:1,plugins:[RevealNotes]});
if (!print) setInterval(paint, 200);
