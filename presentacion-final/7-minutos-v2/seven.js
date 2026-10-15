import {schedule, createRehearsalClock, formatTime} from './timing.mjs';
const items = schedule(JSON.parse(document.getElementById('pitch-data').textContent));
const byId = new Map(items.map((item, index) => [item.id, {...item, index}]));
const TOTAL = items.at(-1).end;
let teleBlocks = [];
const print = location.search.includes('print-pdf');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const video = document.getElementById('product-video');
const timer = document.getElementById('timer');
const guide = document.getElementById('pitch-guide');
const clock = createRehearsalClock();
let current = byId.get(items[0].id), hasStarted = false, finished = false, resumeVideo = false;
let teleEnabled = false, automaticRun = false, autoDispatch = false, teleFont = 30;
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
  if (syncTeleprompter(state)) return;
  el('clock').textContent = formatTime(Math.floor(state.total));
  timer.classList.toggle('total-over', state.total > TOTAL);
  timer.classList.toggle('appendix', !current);
  timer.dataset.slideId = current?.id || 'appendix';
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
  if (!autoDispatch) automaticRun = false;
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
    if (!hasStarted && current.index === 0 && teleEnabled) automaticRun = true;
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
el('reset').onclick = () => { clock.reset(); hasStarted = false; finished = false; resumeVideo = false; automaticRun = false; video.pause(); video.currentTime = 0; paint(); };
el('play-video').onclick = () => video.paused ? tryPlayVideo() : video.pause();
video.addEventListener('play', () => el('play-video').textContent = 'Pausar');
video.addEventListener('pause', () => el('play-video').textContent = 'Reproducir');
document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.target.closest('input,textarea,video,[contenteditable="true"]')) return;
  const key = event.key.toLowerCase();
  if (['t', 'g', 'p', 'l'].includes(key)) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (key === 't') toggleTimes();
    if (key === 'g') toggleGuide();
    if (key === 'p') toggleClock();
    if (key === 'l') toggleTeleprompter();
  } else if (event.code === 'Space' && !event.target.closest('button,a') && Reveal.getCurrentSlide()?.id === 'video') {
    event.preventDefault(); event.stopImmediatePropagation();
    video.paused ? tryPlayVideo() : video.pause();
  }
}, true);
Reveal.on('ready', changed);
Reveal.on('slidechanged', changed);
Reveal.initialize({width:1280,height:720,margin:.02,center:false,hash:true,transition:reduce?'none':'fade',controls:true,progress:true,overview:true,pdfSeparateFragments:false,pdfMaxPagesPerSlide:1,plugins:[RevealNotes]});
if (!print) setInterval(paint, 200);

teleBlocks = items.map((item, index) => {
  const section = document.createElement('section');
  section.className = 'tele-block';
  const heading = document.createElement('h3');
  heading.textContent = `${String(index + 1).padStart(2, '0')} · ${item.label} · ${formatTime(item.start)}–${formatTime(item.end)}`;
  const paragraph = document.createElement('p');
  for (const word of item.speech.split(/\s+/)) {
    const span = document.createElement('span'); span.textContent = word + ' '; paragraph.append(span);
  }
  section.append(heading, paragraph); el('tele-scroll').append(section);
  return {section, words: [...paragraph.children]};
});
function toggleTeleprompter(force) {
  teleEnabled = force === undefined ? !teleEnabled : force;
  el('teleprompter').hidden = !teleEnabled;
  el('tele-toggle').setAttribute('aria-expanded', String(teleEnabled));
  document.body.classList.toggle('teleprompter-on', teleEnabled);
  if (teleEnabled) toggleGuide(false);
  Reveal.layout();
  if (teleEnabled) syncTeleprompter(clock.snapshot());
}
function syncTeleprompter(state) {
  if (!teleEnabled || !current) {
    if (teleEnabled) el('tele-cue').textContent = 'Anexo. Teleprompter en pausa.';
    return;
  }
  const block = teleBlocks[current.index];
  if (!block) return;
  const fraction = Math.min(1, state.activeSpent / current.seconds);
  const cursor = Math.min(block.words.length - 1, Math.floor(fraction * block.words.length));
  teleBlocks.forEach((entry, index) => entry.section.classList.toggle('current', index === current.index));
  block.words.forEach((word, index) => {
    word.classList.toggle('spoken', index < cursor);
    word.classList.toggle('cue-word', index === cursor);
  });
  el('tele-cue').textContent = `${current.label} · cerrar en ${formatTime(current.end)} (segundo ${current.end})`;
  const viewport = el('tele-scroll');
  const word = block.words[cursor];
  const top = word.offsetTop - viewport.clientHeight * .32;
  viewport.scrollTo({top:Math.max(0, top), behavior:'instant'});
  if (!state.running || !el('tele-auto').checked) return;
  const due = automaticRun ? state.total >= current.end : state.activeSpent >= current.seconds;
  if (!due) return;
  if (current.index === items.length - 1) {
    clock.pause(); finished = true; resumeVideo = false; return true;
  }
  autoDispatch = true;
  Reveal.slide(current.index + 1);
  autoDispatch = false;
  return true;
}
el('tele-toggle').onclick = () => toggleTeleprompter();
el('tele-close').onclick = () => toggleTeleprompter(false);
el('tele-begin').onclick = () => {
  clock.reset(); video.pause(); video.currentTime = 0;
  hasStarted = false; finished = false; resumeVideo = false;
  Reveal.slide(0); current = byId.get(items[0].id); clock.focus(current.id);
  automaticRun = true; hasStarted = true; clock.start(); paint();
};
el('tele-auto').onchange = () => { automaticRun = false; };
el('tele-smaller').onclick = () => { teleFont = Math.max(22, teleFont - 2); el('teleprompter').style.setProperty('--tele-font', `${teleFont}px`); };
el('tele-larger').onclick = () => { teleFont = Math.min(48, teleFont + 2); el('teleprompter').style.setProperty('--tele-font', `${teleFont}px`); };
if (!print && new URLSearchParams(location.search).get('teleprompter') === '1') toggleTeleprompter(true);
