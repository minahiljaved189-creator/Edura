<template>
  <section id="people" class="who">
    <div class="container">
      <div ref="sectionRef" class="who__reveal" :class="{ 'is-visible': isVisible }">
        <div class="who__head">
          <p class="who__eyebrow reveal-child" style="--i:0">Who it's for</p>
          <h2 class="who__title reveal-child" style="--i:1">
            Designed around the people you already manage
          </h2>
          <p class="who__lead reveal-child" style="--i:2">
            Every seat opens a portal that matches how that person actually works — not a generic dashboard.
          </p>
        </div>

        <div class="who__grid">
          <RoleCard
              v-for="(card, i) in cards"
              :key="card.tag"
              v-bind="card"
              class="reveal-child"
              :style="`--i:${i + 3}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import RoleCard from './RoleCard.vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)   // only animate once
          }
        })
      },
      {
        threshold: 0.15,       // trigger when 15% visible
        rootMargin: '0px 0px -50px 0px',
      }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const cards = [
  {
    accent: 'navy',
    icon: 'fa-solid fa-user-tie',
    tag: 'Admin',
    title: 'Run the campus without the chaos',
    description: 'Branches, directories, attendance, exams, fees, and announcements — scoped by wing when you need it.',
    chips: ['Multi-branch', 'Directories', 'Fee & exam cycles'],
    linkText: 'Open admin portal',
  },
  {
    accent: 'teal',
    icon: 'fa-solid fa-chalkboard-user',
    tag: 'Teacher',
    title: 'Teach first. Mark once. Message families.',
    description: 'Homeroom, gradebook, lessons, and parent notes live on one desk teachers will actually open.',
    chips: ['Live attendance', 'Grades', 'Parent messaging'],
    linkText: 'Open teacher desk',
  },
  {
    accent: 'orange',
    icon: 'fa-solid fa-people-roof',
    tag: 'Parent',
    title: 'See progress and pay fees without chasing slips',
    description: 'Family Connect keeps attendance, calendar, fees, and school inbox calm and clear at home.',
    chips: ['Child progress', 'Fee wallet', 'School calendar'],
    linkText: 'Open family view',
  },
  {
    accent: 'sky',
    icon: 'fa-solid fa-graduation-cap',
    tag: 'Student',
    title: 'A learner desk for homework and the day ahead',
    description: 'Schedule, grades, library, and due work — without digging through shared drives or paper planners.',
    chips: ['Homework inbox', 'Timetable', 'Digital library'],
    linkText: 'Open learner desk',
  },
]
</script>

<style scoped>
.who {
  padding: 4.25rem 0;
}

.who__head {
  max-width: 38rem;
  margin: 0 auto 2.25rem;
  text-align: center;
}

.who__eyebrow {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin-bottom: 0.75rem;
}

.who__title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.18;
  margin-bottom: 0.65rem;
}

.who__lead {
  font-size: 1.02rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 0;
}

.who__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.15rem;
}

/* ============ Reveal animation ============ */
.who__reveal {
  /* initial state */
  opacity: 0;
  transform: translateY(22px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.who__reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Children stagger */
.who__reveal .reveal-child {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}

.who__reveal.is-visible .reveal-child {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .who__reveal,
  .who__reveal .reveal-child {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

@media (max-width: 860px) {
  .who__grid { grid-template-columns: 1fr; }
  .who__head { text-align: left; margin-left: 0; }
}
</style>