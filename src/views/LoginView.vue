<template>
  <div class="login-page">
    <div class="bg-mesh" aria-hidden="true">
      <span class="bg-blob blob-1"></span>
      <span class="bg-blob blob-2"></span>
      <span class="bg-blob blob-3"></span>
    </div>

    <div class="login-bg" aria-hidden="true"></div>

    <!-- Back link -->
    <router-link to="/" class="back-link reveal-item" :class="{ 'is-visible': backVis }" style="--i:0">
      <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
      Back to homepage
    </router-link>

    <main class="login-split">
      <!-- ============ LEFT ============ -->
      <section class="login-left">
        <div class="login-left__inner">
          <div class="login-logo reveal-item" :class="{ 'is-visible': leftVis }" style="--i:1">
            <img
                src="../assets/images/edura-logo2.png"
                alt="Edura"
                class="login-logo__img"
            />
          </div>

          <p class="login-badge reveal-item" :class="{ 'is-visible': leftVis }" style="--i:2">
            Welcome back
          </p>

          <h1 class="login-title reveal-item" :class="{ 'is-visible': leftVis }" style="--i:3">
            Every school,<br />
            one calm workspace.
          </h1>

          <p class="login-lead reveal-item" :class="{ 'is-visible': leftVis }" style="--i:4">
            Sign in to manage campuses, teach, follow family progress, or open your learner desk.
          </p>

          <ul class="login-features">
            <li class="login-feature reveal-item" :class="{ 'is-visible': leftVis }" style="--i:5">
              <span class="login-feature__icon">
                <i class="fa-solid fa-sitemap" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Multi-campus</strong>
                <span>All schools in one network view.</span>
              </div>
            </li>

            <li class="login-feature reveal-item" :class="{ 'is-visible': leftVis }" style="--i:6">
              <span class="login-feature__icon">
                <i class="fa-solid fa-users" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Role-based</strong>
                <span>Super admin to student access.</span>
              </div>
            </li>

            <li class="login-feature reveal-item" :class="{ 'is-visible': leftVis }" style="--i:7">
              <span class="login-feature__icon">
                <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Always in sync</strong>
                <span>Records follow every school day.</span>
              </div>
            </li>
          </ul>

          <p class="login-footer reveal-item" :class="{ 'is-visible': leftVis }" style="--i:8">
            A product by Rasant solutions
          </p>
        </div>
      </section>

      <!-- ============ RIGHT ============ -->
      <section class="login-right">
        <div class="login-card reveal-item" :class="{ 'is-visible': rightVis }" style="--i:1">
          <h2 class="login-card__title">Sign in</h2>
          <p class="login-card__sub">Enter your school email to continue.</p>

          <div class="login-quick">
            <p class="login-quick__label">Quick demo access</p>
            <div class="login-quick__chips">
              <button
                  v-for="role in roles"
                  :key="role"
                  type="button"
                  class="login-chip"
                  :class="{ 'login-chip--active': selectedRole === role }"
                  @click="selectedRole = role"
              >
                {{ role }}
              </button>
            </div>
          </div>

          <form class="login-form" @submit.prevent>
            <div class="login-field">
              <label for="login-email">Email address</label>
              <div class="login-input">
                <i class="fa-regular fa-envelope" aria-hidden="true"></i>
                <input
                    id="login-email"
                    type="email"
                    v-model="email"
                    placeholder="amira@canopy.school"
                />
              </div>
            </div>

            <div class="login-field">
              <div class="login-field__row">
                <label for="login-password">Password</label>
                <a href="#" class="login-forgot">Forgot?</a>
              </div>
              <div class="login-input">
                <i class="fa-solid fa-lock" aria-hidden="true"></i>
                <input
                    id="login-password"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    placeholder="••••••••"
                />
                <button
                    type="button"
                    class="login-eye"
                    @click="showPassword = !showPassword"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                >
                  <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <label class="login-remember">
              <input type="checkbox" checked />
              <span>Remember me</span>
            </label>

            <button type="submit" class="login-submit">
              Sign in
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>

            <p class="login-signup">
              Don't have an account? <router-link to="/signup">Sign up</router-link>
            </p>

            <p class="login-hint">
              Demo password: <strong>canopy123</strong>
            </p>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const email = ref('amira@canopy.school')
const password = ref('canopy123')
const showPassword = ref(false)
const selectedRole = ref('Super admin')

const roles = ['Super admin', 'Admin', 'Teacher', 'Parent', 'Student']

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
.login-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Continuous background gradient */
.login-bg {
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
.login-bg::after {
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
.login-split {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  padding: 2.5rem 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* ============ LEFT ============ */
.login-left {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem 2rem 2rem;
}
.login-left__inner {
  width: 100%;
  max-width: 30rem;
}

.login-logo { margin-bottom: 1.5rem; }
.login-logo__img {
  height: 55px;
  width: auto;
  display: block;
  object-fit: contain;
}

.login-badge {
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

.login-title {
  font-family: var(--font-serif);
  font-size: clamp(2.1rem, 3.4vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 1rem;
}

.login-lead {
  font-family: var(--font-body);
  font-size: 0.98rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.6rem;
  max-width: 38ch;
}

/* Features */
.login-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: grid;
  gap: 0.65rem;
}
.login-feature {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.9rem 1.05rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 3px 10px rgba(8, 48, 88, 0.04);
}
.login-feature__icon {
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
.login-feature strong {
  display: block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 650;
  color: var(--ink);
  line-height: 1.2;
}
.login-feature span {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--muted);
}

.login-footer {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--muted);
  margin: 0;
}

/* ============ RIGHT ============ */
.login-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 2rem 3rem;
}

.login-card {
  width: 100%;
  max-width: 28rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 2.1rem 1.95rem 1.85rem;
  box-shadow: 0 20px 48px -20px rgba(8, 48, 88, 0.16);
}
.login-card__title {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin: 0 0 0.3rem;
}
.login-card__sub {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0 0 1.35rem;
}

/* Quick demo */
.login-quick {
  background: #7EC8C0;
  border-radius: 12px;
  padding: 0.85rem 0.95rem 0.95rem;
  margin-bottom: 1.25rem;
}
.login-quick__label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #083058;
  margin: 0 0 0.5rem;
}
.login-quick__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.login-chip {
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 650;
  color: #083058;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.login-chip:hover { background: rgba(255, 255, 255, 0.75); }
.login-chip--active {
  background: #083058;
  color: #fff;
}

/* Form */
.login-form { display: grid; gap: 0.95rem; }

.login-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.login-field__row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.login-field label {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 650;
  color: var(--ink);
}
.login-forgot {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 550;
  color: var(--muted);
  text-decoration: none;
}
.login-forgot:hover { color: #109880; }

.login-input {
  position: relative;
  display: flex;
  align-items: center;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.login-input:focus-within {
  border-color: #109880;
  box-shadow: 0 0 0 3px rgba(16, 152, 128, 0.14);
}
.login-input > i {
  position: absolute;
  left: 0.85rem;
  color: var(--muted);
  font-size: 0.85rem;
  pointer-events: none;
}
.login-input input {
  flex: 1;
  width: 100%;
  padding: 0.72rem 0.9rem 0.72rem 2.4rem;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--ink);
  outline: none;
  border-radius: 12px;
}
.login-input input::placeholder { color: #A8B6C2; }
.login-eye {
  background: transparent;
  border: none;
  padding: 0.35rem 0.65rem;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.85rem;
}
.login-eye:hover { color: #083058; }

/* Remember */
.login-remember {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--muted);
  cursor: pointer;
  user-select: none;
}
.login-remember input[type="checkbox"] {
  accent-color: #109880;
  width: 15px;
  height: 15px;
}

/* Submit */
.login-submit {
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
}
.login-submit:hover {
  background: linear-gradient(135deg, #109880 0%, #F89818 100%);
  transform: translateY(-1px);
  box-shadow: 0 16px 32px -10px rgba(16, 152, 128, 0.55);
}
.login-submit i { font-size: 0.82rem; }

.login-signup {
  text-align: center;
  font-family: var(--font-body);
  font-size: 0.86rem;
  color: var(--muted);
  margin: 0.4rem 0 0;
}
.login-signup a {
  color: #083058;
  font-weight: 650;
  text-decoration: none;
}
.login-signup a:hover { text-decoration: underline; text-underline-offset: 3px; }

.login-hint {
  text-align: center;
  font-family: var(--font-body);
  font-size: 0.76rem;
  color: var(--muted);
  margin: 0.2rem 0 0;
}
.login-hint strong { color: #109880; font-weight: 700; }

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
  .login-bg::after { display: none; }

  .login-split {
    grid-template-columns: 1fr;
    padding: 2.5rem 0 1.5rem;
  }
  .login-left {
    justify-content: center;
    padding: 1rem 1.5rem;
    text-align: center;
  }
  .login-left__inner { max-width: 30rem; }
  .login-logo__img { margin: 0 auto; }
  .login-features { text-align: left; }

  .login-right {
    justify-content: center;
    padding: 1rem 1.5rem 2rem;
  }
}
@media (max-width: 560px) {
  .back-link { top: 1rem; left: 1rem; font-size: 0.8rem; }
  .login-card { padding: 1.75rem 1.4rem 1.6rem; }
}
@media (prefers-reduced-motion: reduce) {
  .reveal-item { transition: none !important; opacity: 1 !important; transform: none !important; }
}
</style>