<template>
  <div class="home">
    <Navbar />

    <main>
      <section class="hero-grid">
        <div class="container hero-grid__inner">
          <HeroSection />
          <HeroOrbit />
        </div>
      </section>

      <WhoItsFor />
      <HowItWorks />
      <PlatformSection />
      <ReviewsSection />
      <PricingSection />
      <GetStartedCTA />
      <FaqSection />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar           from '../components/layout/Navbar.vue'      /* ⬅️ The hata diya */
import Footer           from '../components/layout/Footer.vue'      /* ⬅️ The hata diya */
import HeroSection      from '../components/home/HeroSection.vue'
import HeroOrbit        from '../components/home/HeroOrbit.vue'
import WhoItsFor        from '../components/home/WhoItsFor.vue'
import HowItWorks       from '../components/home/HowItWorks.vue'
import PlatformSection  from '../components/home/PlatformSection.vue'
import ReviewsSection   from '../components/home/ReviewsSection.vue'
import PricingSection   from '../components/home/PricingSection.vue'
import GetStartedCTA    from '../components/home/GetStartedCTA.vue'
import FaqSection       from '../components/home/FaqSection.vue'
</script>

<style scoped>
.home { min-height: 100vh; position: relative; }

.hero-grid {
  position: relative;
  z-index: 1;
  padding: 7rem 0 3.25rem;
}
.hero-grid__inner {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: clamp(1.75rem, 4vw, 3.5rem);
  align-items: center;
  min-height: min(56vh, 520px);
}
@media (max-width: 900px) {
  .hero-grid { padding: 6rem 0 2rem; }
  .hero-grid__inner {
    grid-template-columns: 1fr;
    min-height: 0;
    gap: 2rem;
    text-align: center;
  }
}
</style>