<template>
  <section class="hero">
    <p class="hero__badge hero-stagger" style="--i:0">
      <span class="hero__badge-dot"></span>
      Built for every seat on campus
    </p>

    <div class="hero__brand hero-stagger" style="--i:1">
      <img
          src="../../assets/images/edura-logo2.png"
          alt="Edura"
          class="hero__brand-logo"
      />
    </div>

    <h1 class="hero-stagger" style="--i:2">
      School days run smoother when
      <em>people stay in sync</em>
    </h1>

    <p class="hero__lead hero-stagger" style="--i:3">
      Admins, teachers, parents, and students each get a calm seat — then share one clear campus thread.
    </p>

    <div class="hero__cta hero-stagger" style="--i:4">
      <BaseButton variant="primary" size="lg">Start free campus trial</BaseButton>
      <BaseButton variant="outline" size="lg">Meet every role</BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue'
</script>

<style scoped>
.hero {
  max-width: 34rem;
}

/* ---------- Badge ---------- */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.95rem;
  background: #fff;
  border: 1px solid rgba(16, 152, 128, 0.14);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 650;
  color: #109880;
  margin-bottom: 1.15rem;
  box-shadow: 0 6px 16px -10px rgba(8, 48, 88, 0.12);
}
.hero__badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #1f9d6c;
  box-shadow: 0 0 0 4px rgba(31, 157, 108, 0.14);
  animation: hp-hello-pulse 2.4s ease-in-out infinite;
}
@keyframes hp-hello-pulse {
  50% { box-shadow: 0 0 0 7px rgba(31, 157, 108, 0.04); }
}

/* ---------- Brand logo ---------- */
.hero__brand { margin-bottom: 1rem; }
.hero__brand-logo {
  height: clamp(52px, 7.5vw, 78px);
  width: auto;
  display: block;
  object-fit: contain;
}

/* ---------- Heading ---------- */
.hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.8vw, 2.85rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.14;
  color: var(--ink);
  margin-bottom: 1rem;
  max-width: 15ch;
}
.hero h1 em {
  font-style: italic;
  font-weight: 500;
  color: #F89818;
  white-space: nowrap;
}

/* ---------- Lead ---------- */
.hero__lead {
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.65;
  max-width: 38ch;
  margin: 0 0 1.65rem;
}

/* ---------- CTAs ---------- */
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* ---------- Stagger entrance ---------- */
.hero-stagger {
  opacity: 0;
  animation: hero-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(0.12s + var(--i, 0) * 0.11s);
}
@keyframes hero-in {
  from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0) scale(1);     filter: blur(0); }
}

@media (max-width: 900px) {
  .hero { max-width: none; margin: 0 auto; }
  .hero__brand-logo { margin: 0 auto; }
  .hero h1 { margin-left: auto; margin-right: auto; }
  .hero h1 em { white-space: normal; }
  .hero__lead { margin-left: auto; margin-right: auto; }
  .hero__cta { justify-content: center; }
}
</style>