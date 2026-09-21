<template>
  <div class="contact-page">
    <Navbar variant="contact" />

    <main class="container">
      <!-- ============ HERO ============ -->
      <section ref="heroRef" class="ct-hero" :class="{ 'is-visible': heroVisible }">
        <div class="ct-hero__copy">
          <p class="ct-badge reveal-child" style="--i:0">
            <span class="ct-badge__dot"></span>
            We're online · Reply in 2h
          </p>

          <h1 class="ct-title reveal-child" style="--i:1">
            Let's build the future of
            <em>campus operations</em>
            together.
          </h1>

          <p class="ct-lead reveal-child" style="--i:2">
            Whether you run one school or a multi-wing network — our team can help you stand up EDURA for your campus.
          </p>

          <div class="ct-actions reveal-child" style="--i:3">
            <a href="#reach-us" class="ct-btn ct-btn--primary">Send a message</a>
            <a href="#" class="ct-btn ct-btn--secondary">Start free trial</a>
          </div>
        </div>

        <div class="ct-hero__visual">
          <span class="ct-orbit ct-orbit--1" aria-hidden="true"></span>
          <span class="ct-orbit ct-orbit--2" aria-hidden="true"></span>

          <div class="ct-visual-card reveal-child" style="--i:4">
            <div class="ct-visual-card__icon">
              <i class="fa-solid fa-envelope" aria-hidden="true"></i>
            </div>
            <strong>Let's talk</strong>
            <span>We reply within hours</span>
          </div>

          <div class="ct-chip ct-chip--tl reveal-child" style="--i:5">
            <span class="ct-chip__badge">2k</span>
            Schools onboarded
          </div>

          <div class="ct-chip ct-chip--mr reveal-child" style="--i:6">
            <span class="ct-chip__dot"></span>
            Live support
          </div>

          <div class="ct-chip ct-chip--bl reveal-child" style="--i:7">
            <span class="ct-chip__check">
              <i class="fa-solid fa-check" aria-hidden="true"></i>
            </span>
            Secure by design
          </div>
        </div>
      </section>

      <!-- ============ REACH US + FORM ============ -->
      <section id="reach-us" class="ct-reach">
        <div class="ct-reach__left">
          <p
              ref="eyebrowEl"
              class="ct-reach__eyebrow reveal-item"
              :class="{ 'is-visible': eyebrowVis }"
              style="--i:0"
          >
            Get in touch
          </p>

          <h2
              ref="titleEl"
              class="ct-reach__title reveal-item"
              :class="{ 'is-visible': titleVis }"
              style="--i:1"
          >
            Reach us your way
          </h2>

          <p
              ref="leadEl"
              class="ct-reach__lead reveal-item"
              :class="{ 'is-visible': leadVis }"
              style="--i:2"
          >
            Choose the channel that works best — we're here to help you succeed with EDURA.
          </p>

          <ul class="ct-reach__cards">
            <li
                ref="card1El"
                class="ct-reach-card reveal-item"
                :class="{ 'is-visible': card1Vis }"
                style="--i:0"
            >
              <span class="ct-reach-card__icon ct-reach-card__icon--teal">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </span>
              <div>
                <p class="ct-reach-card__label">Email</p>
                <p class="ct-reach-card__value">hello@edura.school</p>
              </div>
            </li>

            <li
                ref="card2El"
                class="ct-reach-card reveal-item"
                :class="{ 'is-visible': card2Vis }"
                style="--i:1"
            >
              <span class="ct-reach-card__icon ct-reach-card__icon--mint">
                <i class="fa-solid fa-phone" aria-hidden="true"></i>
              </span>
              <div>
                <p class="ct-reach-card__label">Call</p>
                <p class="ct-reach-card__value">+1 (555) 014-2200</p>
              </div>
            </li>

            <li
                ref="card3El"
                class="ct-reach-card reveal-item"
                :class="{ 'is-visible': card3Vis }"
                style="--i:2"
            >
              <span class="ct-reach-card__icon ct-reach-card__icon--orange">
                <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
              </span>
              <div>
                <p class="ct-reach-card__label">Chat</p>
                <p class="ct-reach-card__value">Weekday campus support</p>
              </div>
            </li>
          </ul>
        </div>

        <form
            ref="formEl"
            class="ct-form reveal-item"
            :class="{ 'is-visible': formVis }"
            style="--i:3"
            @submit.prevent
        >
          <h3 class="ct-form__title">Send us a message</h3>
          <p class="ct-form__lead">We usually reply within one business day.</p>

          <div class="ct-form__grid">
            <div class="ct-field">
              <label for="cf-name">Name</label>
              <input id="cf-name" type="text" placeholder="Your name" />
            </div>

            <div class="ct-field">
              <label for="cf-email">Email</label>
              <input id="cf-email" type="email" placeholder="you@school.edu" />
            </div>

            <div class="ct-field ct-field--full">
              <label for="cf-org">School / Organization</label>
              <input id="cf-org" type="text" placeholder="Greenfield Academy" />
            </div>

            <div class="ct-field ct-field--full">
              <label for="cf-interest">Interest</label>
              <select id="cf-interest">
                <option>Campus plan</option>
                <option>Role packs</option>
                <option>Network / district</option>
                <option>General demo</option>
              </select>
            </div>

            <div class="ct-field ct-field--full">
              <label for="cf-msg">Message</label>
              <textarea id="cf-msg" rows="5" placeholder="Tell us about your campus…"></textarea>
            </div>
          </div>

          <button type="submit" class="ct-form__submit">Send message</button>
        </form>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

/* ---------- Refs ---------- */
const heroRef = ref(null)

/* ---------- Visibility flags ---------- */
const heroVisible   = ref(false)
const eyebrowVis    = ref(false)
const titleVis      = ref(false)
const leadVis       = ref(false)
const card1Vis      = ref(false)
const card2Vis      = ref(false)
const card3Vis      = ref(false)
const formVis       = ref(false)

/* ---------- Element refs ---------- */
const eyebrowEl = ref(null)
const titleEl   = ref(null)
const leadEl    = ref(null)
const card1El   = ref(null)
const card2El   = ref(null)
const card3El   = ref(null)
const formEl    = ref(null)

/* ---------- Observer helper ---------- */
const observers = []

function observeEl(el, flag) {
  if (!el) return

  /* Agar already visible hai toh turant reveal */
  const rect = el.getBoundingClientRect()
  if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
    flag.value = true
    return
  }

  const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            flag.value = true
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  )
  obs.observe(el)
  observers.push(obs)
}

onMounted(async () => {
  await nextTick()

  /* Hero — turant reveal */
  heroVisible.value = true

  /* Reach section — individual observers */
  observeEl(eyebrowEl.value, eyebrowVis)
  observeEl(titleEl.value,   titleVis)
  observeEl(leadEl.value,    leadVis)
  observeEl(card1El.value,   card1Vis)
  observeEl(card2El.value,   card2Vis)
  observeEl(card3El.value,   card3Vis)
  observeEl(formEl.value,    formVis)
})

onUnmounted(() => {
  observers.forEach((o) => o.disconnect())
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  position: relative;
}
main {
  padding-top: 7rem;
  padding-bottom: 3rem;
}

/* ============ HERO ============ */
.ct-hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 2rem 0 3.5rem;
  min-height: min(60vh, 560px);
}
.ct-hero__copy { max-width: 36rem; }

.ct-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.95rem;
  background: #fff;
  border: 1px solid rgba(16, 152, 128, 0.14);
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 650;
  color: #109880;
  margin-bottom: 1.15rem;
  box-shadow: 0 6px 16px -10px rgba(8, 48, 88, 0.12);
}
.ct-badge__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #1f9d6c;
  box-shadow: 0 0 0 4px rgba(31, 157, 108, 0.14);
  animation: ct-pulse 2.4s ease-in-out infinite;
}
@keyframes ct-pulse {
  50% { box-shadow: 0 0 0 7px rgba(31, 157, 108, 0.04); }
}

.ct-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.8vw, 2.85rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.14;
  color: var(--ink);
  margin-bottom: 1rem;
  max-width: 16ch;
}
.ct-title em {
  font-style: italic;
  font-weight: 500;
  color: #109880;
}

.ct-lead {
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.65;
  max-width: 42ch;
  margin-bottom: 1.65rem;
}
.ct-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.ct-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.55rem;
  border-radius: 999px;
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.95rem;
  transition:
      transform 0.15s ease,
      background 0.22s ease,
      border-color 0.22s ease,
      color 0.22s ease,
      box-shadow 0.22s ease;
  white-space: nowrap;
  text-decoration: none;
}
.ct-btn--primary {
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  color: #fff;
  box-shadow: 0 10px 24px rgba(16, 152, 128, 0.28);
}
.ct-btn--primary:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(8, 48, 88, 0.22);
}
.ct-btn--secondary {
  background: #fff;
  color: var(--ink);
  border: 1.5px solid var(--border);
}
.ct-btn--secondary:hover {
  border-color: #109880;
  color: #083058;
  transform: translateY(-1px);
}

/* ============ HERO VISUAL ============ */
.ct-hero__visual {
  position: relative;
  min-height: 420px;
  display: grid;
  place-items: center;
}

.ct-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1.5px dashed rgba(16, 152, 128, 0.22);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}
.ct-orbit--1 {
  width: 70%;
  aspect-ratio: 1;
  animation: ct-spin 26s linear infinite;
}
.ct-orbit--2 {
  width: 92%;
  aspect-ratio: 1;
  border-color: rgba(16, 152, 128, 0.15);
  animation: ct-spin 34s linear infinite reverse;
}
@keyframes ct-spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.ct-visual-card {
  position: relative;
  width: 200px;
  padding: 2rem 1.5rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 22px 48px -18px rgba(8, 48, 88, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  text-align: center;
  z-index: 2;
  animation: float-y 6s ease-in-out infinite;
}
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
.ct-visual-card__icon {
  width: 54px; height: 54px;
  border-radius: 16px;
  background: linear-gradient(135deg, #083058, #109880);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 20px;
  margin-bottom: 0.35rem;
  box-shadow: 0 12px 24px -10px rgba(8, 48, 88, 0.35);
}
.ct-visual-card strong {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.ct-visual-card span {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--muted);
}

.ct-chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 1rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 650;
  color: var(--ink);
  box-shadow: 0 14px 32px -14px rgba(8, 48, 88, 0.18);
  z-index: 3;
}
.ct-chip--tl { top: 4%;  left: 2%;  animation: float-y 5s ease-in-out infinite; }
.ct-chip--mr { top: 48%; right: -2%; animation: float-y 5.5s ease-in-out infinite 0.3s; }
.ct-chip--bl { bottom: 6%; left: 12%; animation: float-y 6s ease-in-out infinite 0.6s; }

.ct-chip__badge {
  display: inline-grid;
  place-items: center;
  width: 30px; height: 30px;
  border-radius: 9px;
  background: linear-gradient(135deg, #083058, #109880);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 750;
}
.ct-chip__dot {
  width: 18px; height: 18px;
  border-radius: 50%;
  background: #7EC8C0;
  box-shadow: 0 0 0 4px rgba(126, 200, 192, 0.28);
}
.ct-chip__check {
  display: inline-grid;
  place-items: center;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: #1f9d6c;
  color: #fff;
  font-size: 11px;
}

/* ============ REACH US + FORM ============ */
.ct-reach {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 3rem;
  align-items: start;
  padding: 2rem 0 3rem;
}

.ct-reach__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}
.ct-reach__title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.18;
  margin-bottom: 0.75rem;
}
.ct-reach__lead {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.75rem;
  max-width: 38ch;
}

.ct-reach__cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.85rem;
}
.ct-reach-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.05rem 1.2rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 8px 20px -14px rgba(8, 48, 88, 0.12);
  transition:
      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.3s ease,
      border-color 0.3s ease;
}
.ct-reach-card:hover {
  transform: translateX(4px);
  box-shadow: 0 14px 32px -16px rgba(8, 48, 88, 0.18);
  border-color: rgba(16, 152, 128, 0.35);
}

.ct-reach-card__icon {
  width: 46px; height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 18px;
  flex-shrink: 0;
}
.ct-reach-card__icon--teal   { background: linear-gradient(135deg, #083058, #109880); }
.ct-reach-card__icon--mint   { background: linear-gradient(135deg, #109880, #7EC8C0); }
.ct-reach-card__icon--orange { background: linear-gradient(135deg, #F89818, #ffb547); }

.ct-reach-card__label {
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 0.15rem;
}
.ct-reach-card__value {
  font-family: var(--font-body);
  font-size: 0.98rem;
  font-weight: 650;
  color: var(--ink);
  margin: 0;
}

/* FORM */
.ct-form {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 26px;
  padding: 2.25rem 2rem;
  box-shadow: 0 22px 48px -22px rgba(8, 48, 88, 0.15);
  overflow: hidden;
}
.ct-form::before {
  content: "";
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 3px;
  background: linear-gradient(90deg, #109880, #7EC8C0, #F89818);
}
.ct-form__title {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 2.4vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin: 0 0 0.35rem;
}
.ct-form__lead {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--muted);
  margin: 0 0 1.5rem;
}

.ct-form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.35rem;
}
.ct-field { display: flex; flex-direction: column; gap: 0.4rem; }
.ct-field--full { grid-column: 1 / -1; }
.ct-field label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 650;
  color: var(--ink);
}
.ct-field input,
.ct-field select,
.ct-field textarea {
  width: 100%;
  padding: 0.7rem 0.95rem;
  border-radius: 12px;
  border: 1.5px solid var(--border);
  background: #fff;
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.ct-field input:focus,
.ct-field select:focus,
.ct-field textarea:focus {
  border-color: #109880;
  box-shadow: 0 0 0 3px rgba(16, 152, 128, 0.14);
}
.ct-field textarea {
  resize: vertical;
  min-height: 120px;
  font-family: var(--font-body);
}
.ct-form__submit {
  width: 100%;
  padding: 0.9rem 1.55rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  color: #fff;
  border: none;
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.98rem;
  cursor: pointer;
  box-shadow: 0 12px 28px -8px rgba(16, 152, 128, 0.45);
  transition: background 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease;
}
.ct-form__submit:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  transform: translateY(-1px);
  box-shadow: 0 16px 34px -10px rgba(16, 152, 128, 0.55);
}

/* ============ REVEAL ============ */
.ct-hero {
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.ct-hero.is-visible { opacity: 1; transform: translateY(0); }

.ct-hero .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.ct-hero.is-visible .reveal-child {
  opacity: 1;
  transform: translateY(0);
}

.reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.1s);
}
.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 900px) {
  main { padding-top: 6rem; }
  .ct-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem 0 2.5rem;
    min-height: 0;
    text-align: center;
  }
  .ct-hero__copy { margin: 0 auto; }
  .ct-title { margin-left: auto; margin-right: auto; }
  .ct-lead { margin-left: auto; margin-right: auto; }
  .ct-actions { justify-content: center; }
  .ct-hero__visual { min-height: 340px; }

  .ct-reach { grid-template-columns: 1fr; gap: 2rem; }
  .ct-form__grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .ct-form { padding: 1.75rem 1.25rem; }
  .ct-visual-card { width: 170px; padding: 1.5rem 1.25rem; }
}
@media (prefers-reduced-motion: reduce) {
  .ct-hero,
  .ct-hero .reveal-child,
  .reveal-item,
  .ct-visual-card,
  .ct-chip,
  .ct-orbit,
  .ct-badge__dot {
    animation: none !important;
    transition: none !important;
  }
  .ct-hero,
  .ct-hero .reveal-child,
  .reveal-item {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>