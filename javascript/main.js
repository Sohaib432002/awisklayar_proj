'use strict'

// Contact form delivery (Web3Forms). Messages are emailed to the owner of this access key.
// To receive them in your own inbox, create a free key at https://web3forms.com and replace it here.
const WEB3FORMS_ACCESS_KEY = 'baf60a04-502e-4800-8238-a84d4c5c12ce'

const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- footer year ---------- */
$('#year').textContent = new Date().getFullYear()

/* ---------- theme ---------- */
const root = document.documentElement
const themeBtn = $('#theme-toggle')
function syncThemeLabel() {
  const dark = root.dataset.theme === 'dark'
  themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme')
  $('meta[name="theme-color"]').setAttribute('content', dark ? '#050f1c' : '#eef5fb')
}
themeBtn.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem('theme', root.dataset.theme)
  } catch {
    /* storage unavailable */
  }
  syncThemeLabel()
})
syncThemeLabel()

/* ---------- mobile menu ---------- */
const nav = $('#nav')
const menuBtn = $('#menu-btn')
function setMenu(open) {
  nav.classList.toggle('open', open)
  menuBtn.setAttribute('aria-expanded', String(open))
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')))
nav.addEventListener('click', (e) => e.target.closest('a') && setMenu(false))
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !e.target.closest('.nav, .menu-btn')) setMenu(false)
})

/* ---------- typing effect ---------- */
const typedEl = $('#typed')
const words = ['Team Leader', 'Mathematics Student', 'Culture Ambassador', 'Finance Assistant']
if (!reduceMotion) {
  let w = 0
  let i = 0
  let deleting = false
  const tick = () => {
    const word = words[w]
    typedEl.textContent = word.slice(0, i)
    let delay = deleting ? 45 : 90
    if (!deleting && i === word.length) {
      deleting = true
      delay = 1700
    } else if (deleting && i === 0) {
      deleting = false
      w = (w + 1) % words.length
      delay = 350
    }
    i += deleting ? -1 : 1
    setTimeout(tick, delay)
  }
  typedEl.textContent = ''
  tick()
}

/* ---------- reveal on scroll ---------- */
const revealEls = $$('.reveal')
revealEls.forEach((el) => {
  const siblings = $$(':scope > .reveal', el.parentElement)
  const idx = Math.max(0, siblings.indexOf(el))
  el.style.setProperty('--d', `${Math.min(idx * 0.08, 0.4)}s`)
})
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )
  revealEls.forEach((el) => io.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('in'))
}

/* ---------- active nav link ---------- */
const links = $$('a[data-spy]')
const sections = links.map((a) => $(a.getAttribute('href'))).filter(Boolean)
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`))
        }
      }
    },
    { rootMargin: '-42% 0px -52% 0px' }
  )
  sections.forEach((s) => spy.observe(s))
}

/* ---------- count-up stats ---------- */
const statEls = $$('[data-count]')
function runCount(el) {
  const end = Number(el.dataset.count)
  const start = performance.now()
  const dur = 1100
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1)
    el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))))
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
if ('IntersectionObserver' in window && !reduceMotion) {
  statEls.forEach((el) => (el.textContent = '0'))
  const so = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          runCount(e.target)
          so.unobserve(e.target)
        }
      }
    },
    { threshold: 0.6 }
  )
  statEls.forEach((el) => so.observe(el))
}

/* ---------- lightbox ---------- */
const lb = $('#lightbox')
const lbImg = $('#lb-img')
const lbCap = $('#lb-caption')
$$('[data-lightbox]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const src = btn.dataset.lightbox
    if (typeof lb.showModal !== 'function') return window.open(src, '_blank', 'noopener')
    lbImg.src = src
    lbImg.alt = btn.querySelector('img')?.alt || ''
    lbCap.textContent = btn.dataset.caption || ''
    lb.showModal()
  })
})
$('#lb-close').addEventListener('click', () => lb.close())
lb.addEventListener('click', (e) => {
  if (e.target === lb) lb.close() // click on the backdrop
})
lb.addEventListener('close', () => {
  lbImg.removeAttribute('src')
})

/* ---------- contact form ---------- */
const form = $('#contact-form')
const status = $('#form-status')
const submit = $('#form-submit')
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function setStatus(text, kind = '') {
  status.textContent = text
  status.className = `form-status ${kind}`
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const name = String(data.get('name') || '').trim()
  const email = String(data.get('email') || '').trim()
  const message = String(data.get('message') || '').trim()

  $$('[aria-invalid]', form).forEach((el) => el.removeAttribute('aria-invalid'))
  let bad = null
  const flag = (field, text) => {
    $(`[name="${field}"]`, form).setAttribute('aria-invalid', 'true')
    bad ||= { field, text }
  }
  if (name.length < 2) flag('name', 'Please enter your name.')
  if (!EMAIL_RE.test(email)) flag('email', 'Please enter a valid email address.')
  if (message.length < 10) flag('message', 'Please write a short message (at least 10 characters).')
  if (bad) {
    setStatus(bad.text, 'err')
    return $(`[name="${bad.field}"]`, form).focus()
  }

  if (data.get('botcheck')) return // bots tick the hidden box

  submit.disabled = true
  setStatus('Sending...')
  const body = new FormData()
  body.append('access_key', WEB3FORMS_ACCESS_KEY)
  body.append('subject', 'New message from your portfolio website')
  body.append('from_name', 'Portfolio website')
  body.append('name', name)
  body.append('email', email)
  body.append('phone', String(data.get('phone') || '').trim())
  body.append('message', message)
  try {
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body })
    const json = await res.json()
    if (!json.success) throw new Error(json.message || 'Could not send your message.')
    form.reset()
    setStatus('Thank you! Your message was sent. I will get back to you soon.', 'ok')
  } catch (err) {
    const offline = err instanceof TypeError
    setStatus(offline ? 'Network error. Please check your connection and try again.' : err.message, 'err')
  } finally {
    submit.disabled = false
  }
})
