<template>
  <section id="platform" class="platform">
    <div class="container">
      <div ref="sectionRef" class="platform__reveal" :class="{ 'is-visible': isVisible }">
        <div class="platform__left">
          <p class="platform__eyebrow reveal-child" style="--i:0">Platform</p>
          <h2 class="platform__title reveal-child" style="--i:1">
            Tools that stay out of the way
          </h2>
          <p class="platform__lead reveal-child" style="--i:2">
            Multi-branch campuses, live attendance, classroom studio, fees, role packs, and network command — sold as plans your people can grow into.
          </p>
          <a href="#" class="platform__btn reveal-child" style="--i:3">
            Explore the platform
          </a>
        </div>

        <div class="platform__grid">
          <div
              v-for="(f, i) in features"
              :key="f.label"
              class="platform__chip reveal-child"
              :style="`--i:${i + 4}`"
          >
            <span class="platform__chip-icon">
              <i :class="f.icon" aria-hidden="true"></i>
            </span>
            <strong>{{ f.label }}</strong>
          </div>
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

const features = [
  { label: 'Multi-branch', icon: 'fa-solid fa-building' },
  { label: 'Attendance',   icon: 'fa-solid fa-check' },
  { label: 'Classroom',    icon: 'fa-solid fa-chalkboard' },
  { label: 'Fees',         icon: 'fa-solid fa-cube' },
  { label: 'Role packs',   icon: 'fa-solid fa-shield-halved' },
  { label: 'Network',      icon: 'fa-solid fa-share-nodes' },
]
</script>

<style scoped>
.platform { padding: 4.25rem 0; }

/* ============ Grid wrapper ============ */
.platform__reveal {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 3rem;
  align-items: center;
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.platform__reveal.is-visible { opacity: 1; transform: translateY(0); }

.platform__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.platform__reveal.is-visible .reveal-child { opacity: 1; transform: translateY(0); }

/* ============ Left ============ */
.platform__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}

.platform__title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.9vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 1rem;
  max-width: none;              /* ⬅️ koi limit nahi — 1 line mein fit */
}

.platform__lead {
  font-size: 1.02rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 52ch;
}

.platform__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.78rem 1.35rem;
  border-radius: 999px;
  background: #fff;
  color: var(--ink);
  border: 1.5px solid var(--border);
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.92rem;
  transition:
      transform 0.15s ease,
      border-color 0.22s ease,
      color 0.22s ease;
}
.platform__btn:hover {
  border-color: #109880;
  color: #083058;
  transform: translateY(-1px);
}

/* ============ Right chip grid ============ */
.platform__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.platform__chip {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.85rem 1rem;
  transition:
      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.3s ease,
      box-shadow 0.3s ease;
}
.platform__chip:hover {
  transform: translateX(4px);
  border-color: #7EC8C0;
  box-shadow: 0 6px 16px rgba(8, 48, 88, 0.06);
}

.platform__chip-icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #083058;
  font-size: 17px;
  flex-shrink: 0;
}

.platform__chip strong {
  font-family: var(--font-body);
  font-size: 0.94rem;
  font-weight: 650;
  color: var(--ink);
  letter-spacing: -0.01em;
}

/* ============ Responsive ============ */
@media (max-width: 900px) {
  .platform__reveal { grid-template-columns: 1fr; gap: 2rem; }
  .platform__title { font-size: clamp(1.75rem, 6vw, 2.25rem); }   /* mobile pe chhota */
}
@media (prefers-reduced-motion: reduce) {
  .platform__reveal,
  .platform__reveal .reveal-child {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>