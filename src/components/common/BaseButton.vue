<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`]" :type="type">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size:    { type: String, default: 'md' },
  type:    { type: String, default: 'button' },
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.78rem 1.35rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.92rem;
  transition:
      transform var(--dur-fast) var(--ease-soft),
      background var(--dur) var(--ease-soft),
      border-color var(--dur) var(--ease-soft),
      color var(--dur) var(--ease-soft),
      box-shadow var(--dur) var(--ease-soft);
  white-space: nowrap;
  will-change: transform;
}
.btn:active { transform: scale(0.97); }

/* Sizes */
.btn--sm { padding: 0.45rem 0.95rem; font-size: 0.82rem; }
.btn--md { padding: 0.78rem 1.35rem; font-size: 0.92rem; }
.btn--lg { padding: 0.95rem 1.6rem;  font-size: 1rem; }     /* EXACT */

/* Primary */
.btn--primary {
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  color: #fff;
  box-shadow: 0 10px 24px rgba(16, 152, 128, 0.28);
}
.btn--primary:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(8, 48, 88, 0.22);
}
.btn--primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: none;
}

/* Outline */
.btn--outline {
  background: #fff;
  color: var(--ink);
  border: 1.5px solid var(--border);
}
.btn--outline:hover {
  background: #fff;
  border-color: #109880;
  color: #083058;
  transform: translateY(-1px);
}

/* Ghost */
.btn--ghost {
  background: transparent;
  color: var(--muted);
  padding-left: 0;
  padding-right: 0;
}
.btn--ghost:hover { text-decoration: underline; text-underline-offset: 3px; }
</style>