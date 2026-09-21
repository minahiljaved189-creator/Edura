<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div ref="sectionRef" class="pricing__reveal" :class="{ 'is-visible': isVisible }">
        <div class="pricing__head">
          <p class="pricing__eyebrow reveal-child" style="--i:0">Pricing</p>
          <h2 class="pricing__title reveal-child" style="--i:1">
            Campus plans for every school size
          </h2>
        </div>

        <!-- Loop through plans -->
        <div class="pricing__grid">
          <article
              v-for="(plan, i) in plans"
              :key="plan.plan"
              class="pricing__card reveal-child"
              :class="{ 'pricing__card--featured': plan.featured }"
              :style="`--i:${i + 2}`"
          >
            <header class="pricing__card-head">
              <p class="pricing__plan">{{ plan.plan }}</p>
              <span v-if="plan.badge" class="pricing__badge">{{ plan.badge }}</span>
            </header>

            <p class="pricing__amount">
              {{ plan.amount }} <span>{{ plan.unit }}</span>
            </p>

            <p class="pricing__desc">{{ plan.description }}</p>

            <ul class="pricing__features">
              <li v-for="f in plan.features" :key="f">
                <i class="fa-solid fa-check" aria-hidden="true"></i>
                <span>{{ f }}</span>
              </li>
            </ul>

            <a
                href="#"
                class="pricing__cta"
                :class="{ 'pricing__cta--featured': plan.featured }"
            >
              {{ plan.cta }}
            </a>
          </article>
        </div>

        <p class="pricing__note reveal-child" :style="`--i:${plans.length + 2}`">
          Layer role packs anytime —
          <a href="#">see Admin Pro, Teacher Studio, Family Connect &amp; Learner Desk</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ---------- Scroll reveal ---------- */
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => { if (observer) observer.disconnect() })

/* ---------- Plans data (loop) ---------- */
const plans = [
  {
    plan: 'Foundation',
    amount: '$49',
    unit: '/ school / mo',
    description: 'Core SIS for growing schools.',
    features: [
      'Admin + teacher seats',
      'Attendance & gradebook',
      'Basic parent view',
      'Email support',
    ],
    cta: 'Start free trial',
    featured: false,
    badge: '',
  },
  {
    plan: 'Campus',
    amount: '$199',
    unit: '/ school / mo',
    description: 'Full operations for established schools.',
    features: [
      'Everything in Foundation',
      'Fees, exams, report cards',
      'Full parent & student portals',
      'Role pack marketplace',
      'Priority support',
    ],
    cta: 'Start free trial',
    featured: true,
    badge: 'Most popular',
  },
  {
    plan: 'Network',
    amount: '$499',
    unit: '/ mo',
    description: 'Districts and multi-campus groups.',
    features: [
      'Unlimited campuses',
      'Central billing & analytics',
      'Custom entitlements',
      'Dedicated success manager',
    ],
    cta: 'Talk to us',
    featured: false,
    badge: '',
  },
]
</script>

<style scoped>
.pricing { padding: 4.25rem 0; }

.pricing__head {
  max-width: 36rem;
  margin-bottom: 2.25rem;
}
.pricing__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}
.pricing__title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.18;
  margin: 0;
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15rem;
  align-items: stretch;
}

/* ============ Card ============ */
.pricing__card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.75rem 1.55rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition:
      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.3s ease,
      border-color 0.3s ease;
}
.pricing__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(8, 48, 88, 0.1);
  border-color: rgba(16, 152, 128, 0.4);
}

.pricing__card--featured {
  background: linear-gradient(180deg, #E6F4F2 0%, #fff 45%);
  border-color: #109880;
  box-shadow: 0 18px 44px rgba(16, 152, 128, 0.14);
  transform: translateY(-8px);
}
.pricing__card--featured:hover { transform: translateY(-10px); }

/* Head */
.pricing__card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.pricing__plan {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #109880;
  margin: 0;
}
.pricing__badge {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  background: #109880;
  border-radius: 999px;
  padding: 0.28rem 0.6rem;
}

/* Price */
.pricing__amount {
  font-family: var(--font-serif);
  font-size: 2.55rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 0 0 0.35rem;
  line-height: 1.1;
}
.pricing__amount span {
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 550;
  color: var(--muted);
}

.pricing__desc {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

/* Features */
.pricing__features {
  flex: 1;
  margin: 0 0 1.35rem;
  padding: 0;
  list-style: none;
}
.pricing__features li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--ink);
  padding: 0.48rem 0;
  border-bottom: 1px solid var(--border);
}
.pricing__features li:last-child { border-bottom: none; }
.pricing__features i {
  color: #109880;
  font-size: 12px;
  width: 14px;
  flex-shrink: 0;
}

/* CTA */
.pricing__cta {
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
      background 0.22s ease,
      border-color 0.22s ease,
      color 0.22s ease,
      box-shadow 0.22s ease;
}
.pricing__cta:hover {
  border-color: #109880;
  color: #083058;
  transform: translateY(-1px);
}
.pricing__cta--featured {
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  color: #fff;
  border: none;
  box-shadow: 0 10px 24px rgba(16, 152, 128, 0.28);
}
.pricing__cta--featured:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  color: #fff;
  box-shadow: 0 14px 28px rgba(8, 48, 88, 0.22);
}

/* Note */
.pricing__note {
  text-align: center;
  margin-top: 1.75rem;
  font-size: 0.92rem;
  color: var(--muted);
}
.pricing__note a {
  color: #083058;
  font-weight: 650;
  border-bottom: 1px solid rgba(8, 48, 88, 0.25);
}

/* ---------- Reveal ---------- */
.pricing__reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.pricing__reveal.is-visible { opacity: 1; transform: translateY(0); }

.pricing__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.pricing__reveal.is-visible .reveal-child { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) {
  .pricing__grid { grid-template-columns: 1fr; }
  .pricing__card--featured { transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .pricing__reveal,
  .pricing__reveal .reveal-child {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>