<template>
  <header class="topbar">
    <div class="topbar__shell">
      <nav class="topbar__pill">
        <!-- Brand -->
        <router-link to="/" class="topbar__brand">
          <img
              src="../../assets/images/edura-logo2.png"
              alt="Edura"
              class="topbar__brand-img"
          />
        </router-link>

        <!-- Center links -->
        <ul class="topbar__links">
          <li v-for="link in navLinks" :key="link.label">
            <router-link v-if="link.to" :to="link.to">{{ link.label }}</router-link>
            <a v-else :href="link.href">{{ link.label }}</a>
          </li>
        </ul>

        <!-- Right actions -->
        <div class="topbar__actions">
          <router-link to="/login" class="topbar__login">Log in</router-link>
          <router-link to="/signup" class="topbar__cta">
            <span>Get Started</span>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'home',
  },
})

/* Home page links */
const homeLinks = [
  { label: 'People',       href: '#people' },
  { label: 'How it works', href: '#how' },
  { label: 'Platform',     href: '#platform' },
  { label: 'Reviews',      href: '#reviews' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      to: '/contact' },
]

/* Contact page links */
const contactLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Features', to: '/#platform' },
  { label: 'Pricing',  to: '/#pricing' },
  { label: 'About',    href: '#' },
  { label: 'Contact',  to: '/contact' },
]

const navLinks = computed(() =>
    props.variant === 'contact' ? contactLinks : homeLinks
)
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.85rem 1rem 0;
  background: transparent;
  pointer-events: none;
  animation: nav-in 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
}
@keyframes nav-in {
  from { opacity: 0; transform: translateY(-18px); }
  to   { opacity: 1; transform: translateY(0); }
}

.topbar__shell {
  width: min(1200px, 100%);
  margin: 0 auto;
  pointer-events: auto;
}

.topbar__pill {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.45rem 0.5rem 0.45rem 1.15rem;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 100px;
  box-shadow:
      0 12px 40px -14px rgba(15, 48, 64, 0.18),
      0 4px 12px -4px rgba(15, 48, 64, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
.topbar__pill::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 100px;
  padding: 1px;
  background: linear-gradient(
      135deg,
      rgba(16, 152, 128, 0.3),
      transparent 40%,
      transparent 60%,
      rgba(248, 152, 24, 0.28)
  );
  -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Brand */
.topbar__brand {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.topbar__brand:hover { transform: scale(1.03); }
.topbar__brand-img {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* Links */
.topbar__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.15rem;
  flex: 1;
  justify-content: center;
  background: rgba(248, 250, 252, 0.7);
  border: 1px solid rgba(226, 232, 240, 0.7);
  border-radius: 100px;
  padding: 0.22rem;
  max-width: max-content;
  margin: 0 auto;
}
.topbar__links a {
  display: inline-block;
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--muted);
  padding: 0.5rem 0.85rem;
  border-radius: 100px;
  transition: color 0.25s ease, background 0.25s ease;
  white-space: nowrap;
  text-decoration: none;
}
.topbar__links a:hover {
  color: #109880;
}

/* Actions */
.topbar__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.topbar__login {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--ink);
  padding: 0.55rem 1.1rem;
  border-radius: 100px;
  border: 1.5px solid rgba(226, 232, 240, 0.95);
  background: transparent;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.topbar__login:hover {
  border-color: #109880;
  color: #109880;
  transform: translateY(-2px);
  background: rgba(230, 244, 242, 0.7);
  box-shadow: 0 10px 24px -10px rgba(16, 152, 128, 0.28);
}

.topbar__cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.58rem 1.25rem;
  border-radius: 100px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  box-shadow: 0 12px 28px -8px rgba(16, 152, 128, 0.5);
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.topbar__cta span { position: relative; z-index: 1; }
.topbar__cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  opacity: 0;
  transition: opacity 0.3s;
}
.topbar__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px -10px rgba(16, 152, 128, 0.55);
}
.topbar__cta:hover::before { opacity: 1; }

/* Responsive */
@media (max-width: 1024px) {
  .topbar__links { display: none; }
}
@media (max-width: 640px) {
  .topbar { padding: 0.6rem 0.75rem 0; }
  .topbar__pill { padding: 0.4rem 0.4rem 0.4rem 0.85rem; }
  .topbar__brand-img { height: 34px; }
  .topbar__login { display: none; }
  .topbar__cta { padding: 0.5rem 1rem; font-size: 0.78rem; }
}
</style>