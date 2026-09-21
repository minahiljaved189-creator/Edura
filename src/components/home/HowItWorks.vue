<template>
  <section id="how" class="how">
    <div class="container">
      <div ref="sectionRef" class="how__reveal" :class="{ 'is-visible': isVisible }">
        <div class="how__head">
          <p class="how__eyebrow reveal-child" style="--i:0">How it works</p>
          <h2 class="how__title reveal-child" style="--i:1">
            From signup to a synced school day
          </h2>
        </div>

        <ol class="how__journey">
          <li
              v-for="(step, i) in steps"
              :key="step.title"
              class="how__step reveal-child"
              :style="`--i:${i + 2}`"
          >
            <span class="how__step-num">{{ i + 1 }}</span>
            <h3 class="how__step-title">{{ step.title }}</h3>
            <p class="how__step-desc">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const steps = [
  {
    title: 'Invite your people',
    desc:  'Admins, teachers, parents, and students get the right seat — not a shared login.',
  },
  {
    title: 'Connect every wing',
    desc:  'Link branches so attendance, classes, and fees stay scoped and searchable.',
  },
  {
    title: 'Run the day together',
    desc:  'Marks, messages, and payments flow to the portals that need them.',
  },
]
</script>

<style scoped>
.how {
  padding: 4.25rem 0;
}

.how__head {
  max-width: 36rem;
  margin-bottom: 2.25rem;
}

.how__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}

.how__title {
  font-family: var(--font-serif);          /* Newsreader serif */
  font-size: clamp(1.9rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);                        /* navy, not green */
  line-height: 1.18;
  margin: 0;
}

/* ============ 3-step grid ============ */
.how__journey {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.how__step {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.5rem 1.35rem;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
  box-shadow 0.3s ease,
  border-color 0.3s ease;
}
.how__step:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(8, 48, 88, 0.1);
  border-color: rgba(16, 152, 128, 0.4);
}

/* Number badge — navy → teal gradient like design */
.how__step-num {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #083058, #109880);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 750;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.how__step-title {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.how__step-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
}

/* ============ Reveal animation (same as WhoIt'sFor) ============ */
.how__reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.how__reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.how__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.how__reveal.is-visible .reveal-child {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .how__reveal,
  .how__reveal .reveal-child {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ============ Responsive ============ */
@media (max-width: 900px) {
  .how__journey { grid-template-columns: 1fr; }
}
</style>