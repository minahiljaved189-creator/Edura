<template>
  <article class="role-card" :class="`role-card--${accent}`">
    <header class="role-card__top">
      <span class="role-card__ico">
        <i :class="icon" aria-hidden="true"></i>
      </span>
      <span class="role-card__tag">{{ tag }}</span>
    </header>

    <h3 class="role-card__title">{{ title }}</h3>
    <p class="role-card__desc">{{ description }}</p>

    <ul class="role-card__chips">
      <li v-for="chip in chips" :key="chip">{{ chip }}</li>
    </ul>

    <a class="role-card__link" href="#">
      {{ linkText }}
      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
    </a>
  </article>
</template>

<script setup>
defineProps({
  accent:      { type: String, default: 'navy' },
  icon:        { type: String, required: true },
  tag:         { type: String, required: true },
  title:       { type: String, required: true },
  description: { type: String, required: true },
  chips:       { type: Array,  default: () => [] },
  linkText:    { type: String, required: true },
})
</script>

<style scoped>
/* ============ Card shell ============ */
.role-card {
  position: relative;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--border);
  border-radius: 26px;
  padding: 1.55rem 1.5rem 1.4rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease,
      border-color 0.35s ease;
}

/* Left accent bar */
.role-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: var(--role-accent, #083058);
  opacity: 0.9;
}

/* Corner glow */
.role-card::after {
  content: "";
  position: absolute;
  right: -40px;
  top: -40px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--role-wash, rgba(8, 48, 88, 0.08)) 0%, transparent 70%);
  pointer-events: none;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.role-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 48px -22px rgba(8, 48, 88, 0.2);
}
.role-card:hover::after { transform: scale(1.15); }

/* Accent variants */
.role-card--navy   { --role-accent: #083058; --role-wash: rgba(8, 48, 88, 0.10); }
.role-card--teal   { --role-accent: #109880; --role-wash: rgba(16, 152, 128, 0.12); }
.role-card--orange { --role-accent: #F89818; --role-wash: rgba(248, 152, 24, 0.14); }
.role-card--sky    { --role-accent: #7EC8C0; --role-wash: rgba(126, 200, 192, 0.18); }

/* ============ Top row ============ */
.role-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.05rem;
  position: relative;
  z-index: 1;
}

.role-card__ico {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid rgba(184, 217, 212, 0.85);
  color: var(--role-accent, #083058);
  box-shadow: 0 10px 22px -12px rgba(8, 48, 88, 0.2);
  font-size: 20px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}
.role-card:hover .role-card__ico {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 14px 28px -12px rgba(8, 48, 88, 0.28);
}

.role-card__tag {
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  background: var(--role-accent, #083058);
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
}
.role-card--orange .role-card__tag,
.role-card--sky .role-card__tag { color: #083058; }

/* ============ Content ============ */
.role-card__title {
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.25;
  position: relative;
  z-index: 1;
  max-width: 18ch;
}

.role-card__desc {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.55;
  margin-bottom: 1.1rem;
  max-width: 42ch;
  position: relative;
  z-index: 1;
  flex: 1;
}

/* ============ Chips ============ */
.role-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.15rem;
  position: relative;
  z-index: 1;
}
.role-card__chips li {
  font-size: 0.75rem;
  font-weight: 650;
  color: var(--ink);
  background: rgba(230, 244, 242, 0.9);
  border: 1px solid rgba(184, 217, 212, 0.7);
  border-radius: 999px;
  padding: 0.28rem 0.65rem;
}

/* ============ Link ============ */
.role-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--role-accent, #083058);
  position: relative;
  z-index: 1;
  width: fit-content;
  transition: gap 0.25s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease;
}
.role-card__link i {
  font-size: 0.85rem;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
.role-card__link:hover {
  gap: 0.65rem;
  color: var(--ink);
}
.role-card__link:hover i { transform: translateX(2px); }
</style>