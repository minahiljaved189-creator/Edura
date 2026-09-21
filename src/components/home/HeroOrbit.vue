<template>
  <div class="orbit">
    <!-- Glow behind core -->
    <span class="orbit__glow" aria-hidden="true"></span>

    <!-- Dashed rings -->
    <span class="orbit__ring orbit__ring--r1" aria-hidden="true"></span>
    <span class="orbit__ring orbit__ring--r2" aria-hidden="true"></span>
    <span class="orbit__ring orbit__ring--r3" aria-hidden="true"></span>

    <!-- Outer orbit — 3 icons, 26s -->
    <div class="orbit__arm orbit__arm--outer">
      <div
          v-for="node in outerNodes"
          :key="node.label"
          class="orbit__node orbit__node--outer"
          :style="{ top: node.top, left: node.left }"
      >
        <div class="orbit__counter orbit__counter--outer">
          <span class="orbit__icon" :class="`orbit__icon--${node.color}`">
            <i :class="node.icon" aria-hidden="true"></i>
          </span>
          <em class="orbit__label">{{ node.label }}</em>
        </div>
      </div>
    </div>

    <!-- Inner orbit — 3 icons, 18s reverse -->
    <div class="orbit__arm orbit__arm--inner">
      <div
          v-for="node in innerNodes"
          :key="node.label"
          class="orbit__node orbit__node--inner"
          :style="{ top: node.top, left: node.left }"
      >
        <div class="orbit__counter orbit__counter--inner">
          <span class="orbit__icon" :class="`orbit__icon--${node.color}`">
            <i :class="node.icon" aria-hidden="true"></i>
          </span>
          <em class="orbit__label">{{ node.label }}</em>
        </div>
      </div>
    </div>

    <!-- Center core -->
    <div class="orbit__core">
      <i class="fa-solid fa-graduation-cap orbit__core-mark" aria-hidden="true"></i>
      <strong>Campus</strong>
      <span>LIVE · SYNCED</span>
    </div>
  </div>
</template>

<script setup>
// Positions are percentages of the orbit ring container.
// Outer ring — 3 icons, 120° apart
// angle 0° = top, going clockwise
const outerNodes = [
  { label: 'Library',   icon: 'fa-solid fa-book',          color: 'navy',   top: '0%',   left: '50%' },  // top
  { label: 'Graduates', icon: 'fa-solid fa-user-graduate', color: 'orange', top: '75%',  left: '93%' },  // bottom-right
  { label: 'Bell',      icon: 'fa-solid fa-bell',          color: 'teal',   top: '75%',  left: '7%'  },  // bottom-left
]

// Inner ring — 3 icons, offset 60°
const innerNodes = [
  { label: 'Classes', icon: 'fa-solid fa-chalkboard', color: 'teal',   top: '0%',   left: '50%' },  // top
  { label: 'Pickup',  icon: 'fa-solid fa-bus',        color: 'orange', top: '75%',  left: '93%' },  // bottom-right
  { label: 'Lessons', icon: 'fa-solid fa-pen',        color: 'navy',   top: '75%',  left: '7%'  },  // bottom-left
]
</script>

<style scoped>
/* ============ Stage ============ */
.orbit {
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  display: grid;
  place-items: center;
}

/* Glow */
.orbit__glow {
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 152, 128, 0.14) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ============ Dashed rings ============ */
.orbit__ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.orbit__ring--r1 {
  width: 86%;
  aspect-ratio: 1;
  border: 1.5px dashed rgba(16, 152, 128, 0.22);
  animation: spin-cw 28s linear infinite;
}
.orbit__ring--r2 {
  width: 62%;
  aspect-ratio: 1;
  border: 1.5px dashed rgba(248, 152, 24, 0.25);
  animation: spin-ccw 22s linear infinite;
}
.orbit__ring--r3 {
  width: 42%;
  aspect-ratio: 1;
  border: 1.5px solid rgba(8, 48, 88, 0.08);
}
@keyframes spin-cw  { to { transform: translate(-50%, -50%) rotate( 360deg); } }
@keyframes spin-ccw { to { transform: translate(-50%, -50%) rotate(-360deg); } }

/* ============ Rotating arms (containers) ============ */
.orbit__arm {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 86%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 3;
}
.orbit__arm--outer { animation: orbit-cw  26s linear infinite; }
.orbit__arm--inner {
  width: 62%;
  animation: orbit-ccw 18s linear infinite;
}
@keyframes orbit-cw  { to { transform: translate(-50%, -50%) rotate( 360deg); } }
@keyframes orbit-ccw { to { transform: translate(-50%, -50%) rotate(-360deg); } }

/* ============ Node (positioned on ring via top/left %) ============ */
.orbit__node {
  position: absolute;
  /* Node's top-left corner is at (left, top), then we shift by -50%, -50%
     to center the icon exactly on that point */
  transform: translate(-50%, -50%);
}

/* ============ Counter wrapper: keeps icon upright while arm spins ============ */
.orbit__counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}
.orbit__counter--outer { animation: counter-cw  26s linear infinite; }
.orbit__counter--inner { animation: counter-ccw 18s linear infinite; }

@keyframes counter-cw  { to { transform: rotate(-360deg); } }
@keyframes counter-ccw { to { transform: rotate( 360deg); } }

/* ============ Icon box ============ */
.orbit__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(184, 217, 212, 0.8);
  box-shadow: 0 12px 28px -12px rgba(8, 48, 88, 0.22);
  font-size: 18px;
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.orbit__icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 32px -12px rgba(8, 48, 88, 0.28);
}

/* ============ Label ============ */
.orbit__label {
  font-style: normal;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.92);
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  white-space: nowrap;
}

/* ============ Color tones ============ */
.orbit__icon--navy   { color: #083058; }
.orbit__icon--teal   { color: #109880; }
.orbit__icon--orange { color: #F89818; }

/* ============ Core ============ */
.orbit__core {
  position: relative;
  z-index: 2;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  background: #fff;
  border: 1px solid rgba(184, 217, 212, 0.8);
  box-shadow:
      0 18px 40px -16px rgba(8, 48, 88, 0.22),
      0 0 0 10px rgba(255, 255, 255, 0.55);
  animation: core-breathe 4s ease-in-out infinite;
}
@keyframes core-breathe {
  0%, 100% {
    box-shadow:
        0 18px 40px -16px rgba(8, 48, 88, 0.22),
        0 0 0 10px rgba(255, 255, 255, 0.55);
  }
  50% {
    box-shadow:
        0 22px 44px -14px rgba(16, 152, 128, 0.28),
        0 0 0 14px rgba(16, 152, 128, 0.08);
  }
}

.orbit__core-mark {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #109880;
  margin-bottom: 0.15rem;
}
.orbit__core strong {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.02em;
  line-height: 1;
}
.orbit__core span {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #109880;
  margin-top: 0.15rem;
}

/* ============ Responsive ============ */
@media (max-width: 900px) {
  .orbit { width: min(100%, 340px); }
}
@media (max-width: 640px) {
  .orbit { width: min(100%, 280px); }
  .orbit__core { width: 108px; height: 108px; }
  .orbit__core-mark { font-size: 22px; width: 30px; height: 30px; }
  .orbit__core strong { font-size: 0.92rem; }
  .orbit__icon { width: 40px; height: 40px; font-size: 15px; border-radius: 14px; }
  .orbit__label { font-size: 0.6rem; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .orbit__ring,
  .orbit__arm,
  .orbit__counter,
  .orbit__core { animation: none !important; }
}
</style>