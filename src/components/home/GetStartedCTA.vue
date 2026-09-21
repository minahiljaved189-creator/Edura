<template>
  <section class="cta">
    <div class="container">
      <div ref="sectionRef" class="cta__reveal" :class="{ 'is-visible': isVisible }">
        <div class="cta__panel reveal-child" style="--i:0">
          <!-- Left: copy -->
          <div class="cta__copy">
            <p class="cta__kicker reveal-child" style="--i:1">Get started</p>
            <h2 class="cta__title reveal-child" style="--i:2">
              Pick a seat and try<br />EDURA today
            </h2>
            <p class="cta__lead reveal-child" style="--i:3">
              Open a demo as admin, teacher, parent, or student — or start a free campus trial for your school.
            </p>
            <div class="cta__actions reveal-child" style="--i:4">
              <a href="#" class="cta__btn cta__btn--primary">Start free campus trial</a>
              <a href="#" class="cta__btn cta__btn--secondary">Open role demos</a>
            </div>
          </div>

          <!-- Right: 4 role chips -->
          <ul class="cta__roles">
            <li v-for="(role, i) in roles" :key="role.label" class="reveal-child" :style="`--i:${i + 5}`">
              <a href="#">
                <span class="cta__avatar" :class="`cta__avatar--${role.color}`">{{ role.letter }}</span>
                <span class="cta__role-label">{{ role.label }}</span>
              </a>
            </li>
          </ul>
        </div>
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
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => { if (observer) observer.disconnect() })

const roles = [
  { label: 'Admin',   letter: 'A', color: 'deep'   },
  { label: 'Teacher', letter: 'T', color: 'teal'   },
  { label: 'Parent',  letter: 'P', color: 'orange' },
  { label: 'Student', letter: 'S', color: 'mint'   },
]
</script>

<style scoped>
.cta {
  padding: 2.5rem 0 4.25rem;
}

/* ============ Dark panel ============ */
.cta__panel {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.5rem;
  align-items: center;
  background: linear-gradient(135deg, #083058 0%, #0A4A5C 45%, #109880 100%);
  border-radius: 28px;
  padding: 2.75rem 2.5rem;
  color: #fff;
  box-shadow: 0 22px 48px -18px rgba(8, 48, 88, 0.35);
  overflow: hidden;
  min-height: 340px;
}

/* Decorative orange blob bottom-right */
.cta__panel::after {
  content: "";
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(248, 152, 24, 0.18);
  right: -40px;
  bottom: -60px;
  pointer-events: none;
}

/* ============ Left copy ============ */
.cta__kicker {
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.85rem;
}

.cta__title {
  font-family: var(--font-serif);
  font-size: clamp(1.85rem, 3vw, 2.45rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 0.85rem;
  line-height: 1.15;
  max-width: 16ch;
}

.cta__lead {
  font-size: 0.98rem;
  color: rgba(245, 250, 249, 0.85);
  line-height: 1.55;
  margin-bottom: 1.4rem;
  max-width: 40ch;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

/* ============ Buttons ============ */
.cta__btn {
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
      color 0.22s ease,
      box-shadow 0.22s ease;
  white-space: nowrap;
}

/* Primary — navy→teal gradient */
.cta__btn--primary {
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 24px rgba(16, 152, 128, 0.35);
}
.cta__btn--primary:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(8, 48, 88, 0.28);
}

/* Secondary — white filled */
.cta__btn--secondary {
  background: #fff;
  color: #083058;
  border: none;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}
.cta__btn--secondary:hover {
  background: #F5FAF9;
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(8, 48, 88, 0.18);
}

/* ============ Right: role grid ============ */
.cta__roles {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
}

.cta__roles a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.05rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.92rem;
  color: #fff;
  transition:
      background 0.25s ease,
      transform 0.25s ease,
      border-color 0.25s ease;
}
.cta__roles a:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
}

.cta__role-label {
  letter-spacing: -0.01em;
}

.cta__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 750;
  flex-shrink: 0;
  line-height: 1;
}
.cta__avatar--deep   { background: #062440; color: #7EC8C0; }
.cta__avatar--teal   { background: #0d7a68; color: #fff; }
.cta__avatar--orange { background: #F89818; color: #083058; }
.cta__avatar--mint   { background: #7EC8C0; color: #083058; }

/* ============ Reveal ============ */
.cta__reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.cta__reveal.is-visible { opacity: 1; transform: translateY(0); }

.cta__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.cta__reveal.is-visible .reveal-child { opacity: 1; transform: translateY(0); }

/* ============ Responsive ============ */
@media (max-width: 900px) {
  .cta__panel {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 2rem 1.5rem;
    min-height: auto;
  }
  .cta__title { max-width: none; }
}
@media (max-width: 560px) {
  .cta__roles { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .cta__reveal,
  .cta__reveal .reveal-child {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>