<template>
  <footer class="footer">
    <div class="container">
      <!-- Top: brand + 3 columns -->
      <div class="footer__top">
        <!-- Brand column -->
        <div class="footer__brand">
          <img
              src="../../assets/images/edura-logo2.png"
              alt="Edura"
              class="footer__logo"
          />
          <p class="footer__tagline">
            The calm operating system for multi-wing
            schools — academics, fees, and family
            engagement in sync.
          </p>
        </div>

        <!-- Link columns -->
        <div
            v-for="col in columns"
            :key="col.title"
            class="footer__col"
        >
          <h4 class="footer__col-title">{{ col.title }}</h4>
          <ul class="footer__col-links">
            <li v-for="link in col.links" :key="link">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <p>© 2026 EDUra. All rights reserved.</p>
        <div class="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const columns = [
  {
    title: 'Product',
    links: ['People', 'How it works', 'Pricing', 'FAQ'],
  },
  {
    title: 'Get started',
    links: ['Log in', 'Start free trial', 'Campus plans'],
  },
  {
    title: 'Company',
    links: ['About EDUra', 'Contact', 'Billing'],
  },
]
</script>

<style scoped>
.footer {
  background: #E6F4F2;                /* ⬅️ design mint */
  padding: 3rem 0 1.5rem;              /* ⬅️ design spacing */
  margin-top: 0;
}

/* ============ Top row ============ */
.footer__top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;   /* ⬅️ brand wider */
  gap: 2.5rem;
  padding-bottom: 2.25rem;
  border-bottom: 1px solid rgba(90, 100, 120, 0.12);   /* ⬅️ subtle divider */
}

/* Brand */
.footer__brand { max-width: 340px; }

.footer__logo {
  height: 56px;                        /* ⬅️ BARA (design) */
  width: auto;
  display: block;
  object-fit: contain;
  margin-bottom: 1rem;
}

.footer__tagline {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  max-width: 320px;
  margin: 0;
}

/* Columns */
.footer__col-title {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #109880;                      /* ⬅️ green (design) */
  margin: 0 0 0.9rem;
}

.footer__col-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer__col-links a {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--muted);                 /* ⬅️ grey-blue */
  transition: color 0.2s ease;
}
.footer__col-links a:hover {
  color: var(--ink);
}

/* ============ Bottom ============ */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.25rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: #7A92A4;                       /* ⬅️ muted-2 (design) */
}
.footer__bottom p { margin: 0; color: #7A92A4; }

.footer__legal {
  display: flex;
  gap: 1.5rem;
}
.footer__legal a {
  color: #7A92A4;
  transition: color 0.2s ease;
}
.footer__legal a:hover { color: var(--ink); }

/* ============ Responsive ============ */
@media (max-width: 960px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .footer__brand { grid-column: 1 / -1; max-width: none; }
  .footer__tagline { max-width: none; }
}
@media (max-width: 560px) {
  .footer__top { grid-template-columns: 1fr; gap: 1.5rem; }
  .footer__bottom { justify-content: flex-start; }
}
</style>