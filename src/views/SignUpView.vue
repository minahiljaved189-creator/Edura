<template>
  <div class="signup-page">
    <div class="bg-mesh" aria-hidden="true">
      <span class="bg-blob blob-1"></span>
      <span class="bg-blob blob-2"></span>
      <span class="bg-blob blob-3"></span>
    </div>

    <!-- Continuous gradient + halki divider -->
    <div class="signup-bg" aria-hidden="true"></div>

    <!-- Back link -->
    <router-link to="/" class="back-link reveal-item" :class="{ 'is-visible': backVis }" style="--i:0">
      <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
      Back to homepage
    </router-link>

    <main class="signup-split">
      <!-- ============ LEFT ============ -->
      <section class="signup-left">
        <div class="signup-left__inner">
          <div class="signup-logo reveal-item" :class="{ 'is-visible': leftVis }" style="--i:1">
            <img
                src="../assets/images/edura-logo2.png"
                alt="Edura"
                class="signup-logo__img"
            />
          </div>

          <p class="signup-badge reveal-item" :class="{ 'is-visible': leftVis }" style="--i:2">
            Get started
          </p>

          <h1 class="signup-title reveal-item" :class="{ 'is-visible': leftVis }" style="--i:3">
            Create your<br />
            EDURA account.
          </h1>

          <p class="signup-lead reveal-item" :class="{ 'is-visible': leftVis }" style="--i:4">
            Join as a school leader, teacher, parent, or student — then explore the matching workspace.
          </p>

          <ul class="signup-features">
            <li class="signup-feature reveal-item" :class="{ 'is-visible': leftVis }" style="--i:5">
              <span class="signup-feature__icon">
                <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Free to explore</strong>
                <span>Prototype signup — no billing yet.</span>
              </div>
            </li>

            <li class="signup-feature reveal-item" :class="{ 'is-visible': leftVis }" style="--i:6">
              <span class="signup-feature__icon">
                <i class="fa-solid fa-users" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Role-ready</strong>
                <span>Pick your seat during signup.</span>
              </div>
            </li>

            <li class="signup-feature reveal-item" :class="{ 'is-visible': leftVis }" style="--i:7">
              <span class="signup-feature__icon">
                <i class="fa-solid fa-house" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Instant access</strong>
                <span>Land in your portal after signup.</span>
              </div>
            </li>
          </ul>

          <p class="signup-footer reveal-item" :class="{ 'is-visible': leftVis }" style="--i:8">
            A product by Rasant solutions
          </p>
        </div>
      </section>

      <!-- ============ RIGHT ============ -->
      <section class="signup-right">
        <div class="signup-card reveal-item" :class="{ 'is-visible': rightVis }" style="--i:1">
          <h2 class="signup-card__title">Sign up</h2>
          <p class="signup-card__sub">Create an account to open your portal.</p>

          <form class="signup-form" @submit.prevent>
            <!-- Row 1: Full name + Role -->
            <div class="signup-row">
              <div class="signup-field">
                <label for="su-name">Full name</label>
                <input id="su-name" type="text" v-model="fullName" placeholder="Your name" />
              </div>

              <div class="signup-field">
                <label for="su-role">I am a</label>
                <div class="signup-select">
                  <select id="su-role" v-model="role">
                    <option value="">Select role</option>
                    <option>School leader</option>
                    <option>Admin</option>
                    <option>Teacher</option>
                    <option>Parent</option>
                    <option>Student</option>
                  </select>
                  <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <!-- School / organization -->
            <div class="signup-field">
              <label for="su-school">School / organization</label>
              <input id="su-school" type="text" v-model="school" placeholder="Greenfield Academy" />
            </div>

            <!-- Email -->
            <div class="signup-field">
              <label for="su-email">Email address</label>
              <div class="signup-input">
                <i class="fa-regular fa-envelope" aria-hidden="true"></i>
                <input id="su-email" type="email" v-model="email" placeholder="you@school.edu" />
              </div>
            </div>

            <!-- Password + Confirm -->
            <div class="signup-row">
              <div class="signup-field">
                <label for="su-password">Password</label>
                <div class="signup-input">
                  <i class="fa-solid fa-lock" aria-hidden="true"></i>
                  <input
                      id="su-password"
                      :type="showPassword ? 'text' : 'password'"
                      v-model="password"
                      placeholder="Min. 6 chars"
                  />
                  <button
                      type="button"
                      class="signup-eye"
                      @click="showPassword = !showPassword"
                      :aria-label="showPassword ? 'Hide password' : 'Show password'"
                  >
                    <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div class="signup-field">
                <label for="su-confirm">Confirm</label>
                <input id="su-confirm" type="password" v-model="confirm" placeholder="Repeat" />
              </div>
            </div>

            <!-- Terms -->
            <label class="signup-terms">
              <input type="checkbox" v-model="agree" />
              <span>I agree to the demo terms</span>
            </label>

            <!-- Submit -->
            <button type="submit" class="signup-submit">
              Create account
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>

            <p class="signup-signin">
              Already have an account? <router-link to="/login">Sign in</router-link>
            </p>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const fullName = ref('')
const role = ref('')
const school = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const agree = ref(false)
const showPassword = ref(false)

const backVis  = ref(false)
const leftVis  = ref(false)
const rightVis = ref(false)

onMounted(async () => {
  await nextTick()
  setTimeout(() => { backVis.value = true }, 0)
  setTimeout(() => { leftVis.value = true }, 80)
  setTimeout(() => { rightVis.value = true }, 160)
})
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Continuous background gradient */
.signup-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  background:
      radial-gradient(ellipse 80% 60% at 50% 0%, #F5FAF9 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 100% 40%, #E6F4F2 0%, transparent 60%),
      linear-gradient(180deg, #ffffff 0%, #F5FAF9 50%, #E6F4F2 100%);
}
.signup-bg::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  transform: translateX(-0.5px);
  background: linear-gradient(180deg,
  transparent 0%,
  rgba(184, 217, 212, 0.35) 15%,
  rgba(184, 217, 212, 0.35) 85%,
  transparent 100%);
}

/* Back link */
.back-link {
  position: absolute;
  top: 1.35rem;
  left: 1.5rem;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  transition: background 0.22s ease;
}
.back-link:hover { background: rgba(255, 255, 255, 0.6); }
.back-link i { font-size: 0.78rem; }

/* Split layout */
.signup-split {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  padding: 2.5rem 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* ============ LEFT ============ */
.signup-left {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem 2rem 2rem;
}
.signup-left__inner {
  width: 100%;
  max-width: 30rem;
}

.signup-logo { margin-bottom: 1.5rem; }
.signup-logo__img {
  height: 55px;
  width: auto;
  display: block;
  object-fit: contain;
}

.signup-badge {
  display: inline-block;
  padding: 0.32rem 0.8rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(16, 152, 128, 0.14);
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #109880;
  margin: 0 0 1rem;
}

.signup-title {
  font-family: var(--font-serif);
  font-size: clamp(2.1rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 1rem;
}

.signup-lead {
  font-family: var(--font-body);
  font-size: 0.98rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.6rem;
  max-width: 40ch;
}

/* Features */
.signup-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: grid;
  gap: 0.65rem;
}
.signup-feature {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.9rem 1.05rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 3px 10px rgba(8, 48, 88, 0.04);
}
.signup-feature__icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(230, 244, 242, 0.9);
  color: #109880;
  font-size: 16px;
  flex-shrink: 0;
}
.signup-feature strong {
  display: block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 650;
  color: var(--ink);
  line-height: 1.2;
}
.signup-feature span {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--muted);
}

.signup-footer {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--muted);
  margin: 0;
}

/* ============ RIGHT ============ */
.signup-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 2rem 3rem;
}

.signup-card {
  width: 100%;
  max-width: 30rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 2.1rem 1.95rem 1.85rem;
  box-shadow: 0 20px 48px -20px rgba(8, 48, 88, 0.16);
}
.signup-card__title {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin: 0 0 0.3rem;
}
.signup-card__sub {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0 0 1.35rem;
}

/* Form */
.signup-form { display: grid; gap: 0.95rem; }

.signup-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.signup-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.signup-field label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 650;
  color: var(--ink);
}

.signup-field input,
.signup-field select {
  width: 100%;
  padding: 0.72rem 0.9rem;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  background: #fff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.signup-field input::placeholder { color: #A8B6C2; }
.signup-field input:focus,
.signup-field select:focus {
  border-color: #109880;
  box-shadow: 0 0 0 3px rgba(16, 152, 128, 0.14);
}

/* Select with custom arrow */
.signup-select {
  position: relative;
}
.signup-select select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-right: 2.4rem;
}
.signup-select > i {
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  font-size: 0.72rem;
  pointer-events: none;
}

/* Input with icon */
.signup-input {
  position: relative;
  display: flex;
  align-items: center;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.signup-input:focus-within {
  border-color: #109880;
  box-shadow: 0 0 0 3px rgba(16, 152, 128, 0.14);
}
.signup-input > i {
  position: absolute;
  left: 0.85rem;
  color: var(--muted);
  font-size: 0.85rem;
  pointer-events: none;
}
.signup-input input {
  flex: 1;
  width: 100%;
  padding: 0.72rem 0.9rem 0.72rem 2.4rem;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--ink);
  outline: none;
  border-radius: 12px;
}
.signup-eye {
  background: transparent;
  border: none;
  padding: 0.35rem 0.65rem;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.85rem;
}
.signup-eye:hover { color: #083058; }

/* Terms */
.signup-terms {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--muted);
  cursor: pointer;
  user-select: none;
  margin-top: 0.1rem;
}
.signup-terms input[type="checkbox"] {
  accent-color: #109880;
  width: 15px;
  height: 15px;
}

/* Submit */
.signup-submit {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.88rem 1.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #083058 0%, #109880 100%);
  color: #fff;
  border: none;
  font-family: var(--font-body);
  font-weight: 650;
  font-size: 0.96rem;
  cursor: pointer;
  box-shadow: 0 12px 26px -8px rgba(16, 152, 128, 0.45);
  transition: background 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease;
  margin-top: 0.35rem;
}
.signup-submit:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  transform: translateY(-1px);
  box-shadow: 0 16px 32px -10px rgba(16, 152, 128, 0.55);
}
.signup-submit i { font-size: 0.82rem; }

.signup-signin {
  text-align: center;
  font-family: var(--font-body);
  font-size: 0.86rem;
  color: var(--muted);
  margin: 0.4rem 0 0;
}
.signup-signin a {
  color: #083058;
  font-weight: 650;
  text-decoration: none;
}
.signup-signin a:hover { text-decoration: underline; text-underline-offset: 3px; }

/* ============ REVEAL ============ */
.reveal-item {
  opacity: 0;
  transform: translateY(18px);
  transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 0.08s);
}
.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 960px) {
  .signup-bg::after { display: none; }

  .signup-split {
    grid-template-columns: 1fr;
    padding: 2.5rem 0 1.5rem;
  }
  .signup-left {
    justify-content: center;
    padding: 1rem 1.5rem;
    text-align: center;
  }
  .signup-left__inner { max-width: 30rem; }
  .signup-logo__img { margin: 0 auto; }
  .signup-features { text-align: left; }

  .signup-right {
    justify-content: center;
    padding: 1rem 1.5rem 2rem;
  }
}
@media (max-width: 640px) {
  .signup-row { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .back-link { top: 1rem; left: 1rem; font-size: 0.8rem; }
  .signup-card { padding: 1.75rem 1.4rem 1.6rem; }
}
@media (prefers-reduced-motion: reduce) {
  .reveal-item { transition: none !important; opacity: 1 !important; transform: none !important; }
}
</style>