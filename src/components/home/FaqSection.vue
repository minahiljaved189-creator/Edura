<template>
  <section id="faq" class="faq">
    <div class="container">
      <div ref="sectionRef" class="faq__reveal" :class="{ 'is-visible': isVisible }">
        <!-- Left intro -->
        <div class="faq__left">
          <p class="faq__eyebrow reveal-child" style="--i:0">FAQ</p>
          <h2 class="faq__title reveal-child" style="--i:1">Answers before you commit</h2>
          <p class="faq__lead reveal-child" style="--i:2">
            Straight answers about branches, plans, and who EDURA is built for.
          </p>
          <router-link to="/contact" class="faq__btn reveal-child" style="--i:3">
            Still unsure? Contact us
          </router-link>
        </div>

        <!-- Right accordion -->
        <div class="faq__list">
          <div
              v-for="(item, i) in items"
              :key="i"
              class="faq__item reveal-child"
              :class="{ 'faq__item--open': openIndex === i }"
              :style="`--i:${i + 4}`"
          >
            <button
                type="button"
                class="faq__question"
                :aria-expanded="openIndex === i"
                @click="toggle(i)"
            >
              <span>{{ item.q }}</span>
              <span class="faq__icon" aria-hidden="true"></span>
            </button>

            <div
                class="faq__answer-wrap"
                :style="{ height: openIndex === i ? answerHeight[i] + 'px' : '0px' }"
            >
              <div :ref="el => setAnswerRef(el, i)" class="faq__answer">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

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

/* ---------- Accordion (single-open + smooth height) ---------- */
const openIndex = ref(0)
const answerHeight = ref([])
const answerRefs = ref([])

function setAnswerRef(el, i) {
  if (el) answerRefs.value[i] = el
}

async function measureAll() {
  await nextTick()
  answerHeight.value = answerRefs.value.map((el) => (el ? el.offsetHeight : 0))
}

onMounted(() => {
  measureAll()
  window.addEventListener('resize', measureAll)
})
onUnmounted(() => {
  window.removeEventListener('resize', measureAll)
})

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

const items = [
  {
    q: 'Can I manage multiple school branches?',
    a: 'Yes. Create wings under one campus, assign branch admins, and scope attendance, classes, and fees by location.',
  },
  {
    q: 'Is EDURA only for large districts?',
    a: 'No. Start with a single campus on Foundation, then grow into multi-wing and network plans as you expand.',
  },
  {
    q: 'What can teams manage in EDURA?',
    a: 'People directories, attendance, timetables, exams, fees, announcements, and role-specific portals for teachers, parents, and students.',
  },
  {
    q: 'How do subscriptions and role packs work?',
    a: 'Super admins sell campus plans, then layer Admin Pro, Teacher Studio, Family Connect, and Learner Desk seats as needed.',
  },
]
</script>

<style scoped>
.faq { padding: 4.25rem 0; }

/* ---------- Grid wrapper ---------- */
.faq__reveal {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 3rem;
  align-items: start;
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.faq__reveal.is-visible { opacity: 1; transform: translateY(0); }

.faq__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.faq__reveal.is-visible .reveal-child { opacity: 1; transform: translateY(0); }

/* ---------- Left ---------- */
.faq__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}
.faq__title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.18;
  margin-bottom: 0.75rem;
}
.faq__lead {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.35rem;
  max-width: 32ch;
}
.faq__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.78rem 1.35rem;
  border-radius: 999px;
  background: #fff;
  color: var(--ink);
  border: 1.5px solid var(--border);
  font-weight: 650;
  font-size: 0.92rem;
  text-decoration: none;
  transition:
      transform 0.15s ease,
      border-color 0.22s ease,
      color 0.22s ease;
}
.faq__btn:hover {
  border-color: #109880;
  color: #083058;
  transform: translateY(-1px);
}

/* ---------- Accordion list ---------- */
.faq__list { display: grid; gap: 0.75rem; }

.faq__item {
  background: #F5FAF9;
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease,
      background 0.3s ease;
}
.faq__item--open {
  border-color: rgba(16, 152, 128, 0.35);
  box-shadow: 0 12px 28px -16px rgba(8, 48, 88, 0.14);
  background: #fff;
}

/* Question */
.faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.35rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.98rem;
  color: var(--ink);
  text-align: left;
  transition: color 0.25s ease;
}
.faq__question:hover { color: #109880; }

/* + / − icon (small ~14px) */
.faq__icon {
  position: relative;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.faq__icon::before,
.faq__icon::after {
  content: "";
  position: absolute;
  background: #109880;
  border-radius: 2px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.faq__icon::before {
  top: 50%;
  left: 0;
  right: 0;
  height: 1.5px;
  transform: translateY(-50%);
}
.faq__icon::after {
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1.5px;
  transform: translateX(-50%) scaleY(1);
}
.faq__item--open .faq__icon::after {
  transform: translateX(-50%) scaleY(0);
}

/* Smooth answer */
.faq__answer-wrap {
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.faq__answer {
  padding: 0 1.35rem 1.2rem;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
}
.faq__item--open .faq__answer {
  opacity: 1;
  transform: translateY(0);
}
.faq__answer p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.55;
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .faq__reveal { grid-template-columns: 1fr; gap: 2rem; }
}
@media (prefers-reduced-motion: reduce) {
  .faq__reveal,
  .faq__reveal .reveal-child,
  .faq__answer-wrap,
  .faq__answer,
  .faq__icon::before,
  .faq__icon::after {
    transition: none !important;
  }
  .faq__answer { opacity: 1; transform: none; }
}
</style>