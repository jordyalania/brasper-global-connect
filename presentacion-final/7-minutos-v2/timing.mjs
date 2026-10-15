export function formatTime(seconds) {
  const value = Math.max(0, Math.ceil(seconds));
  return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
}
export function schedule(items) {
  let offset = 0;
  return items.map(item => {
    const start = offset;
    offset += item.seconds;
    return {...item, start, end: offset};
  });
}
export function createRehearsalClock(now = () => performance.now()) {
  let total = 0, active = null, tick = null;
  const spent = new Map();
  function commit() {
    if (tick === null) return;
    const current = now();
    const delta = Math.max(0, (current - tick) / 1000);
    total += delta;
    if (active !== null) spent.set(active, (spent.get(active) || 0) + delta);
    tick = current;
  }
  return {
    start() { if (tick === null) tick = now(); },
    pause() { commit(); tick = null; },
    focus(id) { commit(); active = id; },
    reset() { total = 0; spent.clear(); tick = null; },
    snapshot() {
      const delta = tick === null ? 0 : Math.max(0, (now() - tick) / 1000);
      return {running: tick !== null, total: total + delta, activeSpent: (spent.get(active) || 0) + (active === null ? 0 : delta)};
    },
  };
}
