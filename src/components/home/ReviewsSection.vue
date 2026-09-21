<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div ref="sectionRef" class="reviews__reveal" :class="{ 'is-visible': isVisible }">
        <!-- Head -->
        <div class="reviews__head">
          <p class="reviews__eyebrow reveal-child" style="--i:0">Reviews</p>
          <h2 class="reviews__title reveal-child" style="--i:1">
            Voices from the people using EDURA
          </h2>
        </div>

        <!-- 3 quote cards -->
        <div class="reviews__grid">
          <blockquote
              v-for="(item, i) in testimonials"
              :key="i"
              class="reviews__card reveal-child"
              :style="`--i:${i + 2}`"
          >
            <p class="reviews__quote">{{ item.quote }}</p>
            <footer class="reviews__author">
              <strong>{{ item.name }}</strong>
              <span> · {{ item.role }}</span>
            </footer>
          </blockquote>
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

const testimonials = [
  {
    quote: '“Branch scope alone saved our office hours. Admins and parents finally see the same attendance.”',
    name: 'Daniel Okonkwo',
    role: 'School Admin',
  },
  {
    quote: '“I mark once in the morning and families see it the same day. No more paper chase.”',
    name: 'Fatima Noor',
    role: 'Branch Admin',
  },
  {
    quote: '“Progress and fee wallet in one calm view. It feels built for families, not just staff.”',
    name: 'Sarah Mitchell',
    role: 'Parent',
  },
]
</script>

<style scoped>
.reviews { padding: 4.25rem 0; }

/* Head */
.reviews__head {
  max-width: 36rem;
  margin-bottom: 2.25rem;
}

.reviews__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}

.reviews__title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.18;
  margin: 0;
}

/* Cards */
.reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.reviews__card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.5rem 1.4rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  transition:
      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.3s ease;
}
.reviews__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(8, 48, 88, 0.1);
}

.reviews__quote {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.45;
  color: var(--ink);
  margin: 0 0 1.15rem;
  letter-spacing: -0.015em;
  flex: 1;
}

.reviews__author {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--muted);
}
.reviews__author strong {
  color: var(--ink);
  font-weight: 700;
}

/* Reveal */
.reviews__reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.reviews__reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reviews__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.reviews__reveal.is-visible .reveal-child {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .reviews__grid { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .reviews__reveal,
  .reviews__reveal .reveal-child {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>