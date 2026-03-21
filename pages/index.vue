<template>
  <div class="min-h-screen bg-surface">

    <!-- Nav -->
    <header class="sticky top-0 z-50 bg-surface/70 backdrop-blur-xl px-8 py-4">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between">
        <span style="font-family:'Manrope',sans-serif; font-weight:800; color:#00475e; font-size:1.125rem; letter-spacing:-0.01em;">Learning Hub</span>
        <NuxtLink
          to="/course/chapter/1-introduction-to-web-development/lesson/4-setting-up-dev-environment"
          style="background:linear-gradient(135deg,#00475e,#1a5f7a); color:#fff; font-size:0.875rem; font-weight:500; padding:0.625rem 1.25rem; border-radius:0.75rem; text-decoration:none; transition:filter 0.2s;"
          onmouseover="this.style.filter='brightness(1.1)'"
          onmouseout="this.style.filter='brightness(1)'"
        >
          Start Learning
        </NuxtLink>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden px-8 pt-20 pb-28" style="background:#f2f4f6; min-height:614px; display:flex; align-items:center;">
      <div class="max-w-[1440px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">

        <!-- Left: copy -->
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-4">
            <span style="display:inline-block; padding:0.375rem 1rem; border-radius:9999px; background:#cfe6f2; color:#526772; font-size:0.7rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Curated Learning</span>
            <h1 style="font-family:'Manrope',sans-serif; font-weight:800; font-size:clamp(2.75rem,6vw,4.5rem); color:#191c1e; line-height:1.08;">
              Master your craft with <span style="color:#00475e; font-style:italic;">Precision</span>.
            </h1>
            <p style="color:#40484d; font-size:1.125rem; line-height:1.75; max-width:32rem;">
              A refined collection of web development modules — from HTML fundamentals to full Vue.js applications.
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="/course/chapter/1-introduction-to-web-development/lesson/4-setting-up-dev-environment"
              style="background:linear-gradient(135deg,#00475e,#1a5f7a); color:#fff; font-weight:700; padding:1rem 2rem; border-radius:0.75rem; text-decoration:none; box-shadow:0 20px 40px rgba(0,71,94,0.18); transition:filter 0.2s, transform 0.1s;"
              onmouseover="this.style.filter='brightness(1.08)'"
              onmouseout="this.style.filter='brightness(1)'"
            >
              Browse All Modules
            </NuxtLink>
            <NuxtLink
              to="/course"
              style="background:#fff; color:#00475e; font-weight:700; padding:1rem 2rem; border-radius:0.75rem; text-decoration:none; transition:background 0.2s;"
              onmouseover="this.style.background='#eceef0'"
              onmouseout="this.style.background='#fff'"
            >
              Our Methodology
            </NuxtLink>
          </div>
        </div>

        <!-- Right: animated SVG illustration -->
        <div class="hidden lg:block lg:col-span-5 relative">
          <!-- Ambient orbs -->
          <div class="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none" style="background:rgba(105,49,0,0.07); filter:blur(64px);"></div>
          <div class="absolute -bottom-24 -left-16 w-96 h-96 rounded-full pointer-events-none" style="background:rgba(0,71,94,0.07); filter:blur(72px);"></div>

          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[480px] mx-auto" aria-hidden="true">

            <!-- Faint concentric rings -->
            <circle cx="250" cy="250" r="195" stroke="#00475e" stroke-width="1" stroke-opacity="0.07" fill="none"/>
            <circle cx="250" cy="250" r="155" stroke="#00475e" stroke-width="1" stroke-opacity="0.10" stroke-dasharray="5 9" fill="none"/>
            <circle cx="250" cy="250" r="112" stroke="#00475e" stroke-width="1.5" stroke-opacity="0.14" stroke-dasharray="3 6" fill="none"/>

            <!-- Center ambient glow -->
            <circle cx="250" cy="250" r="88" fill="#00475e" fill-opacity="0.05"/>
            <circle cx="250" cy="250" r="66" fill="#00475e" fill-opacity="0.09"/>

            <!-- Central hexagon -->
            <polygon points="250,186 304,218 304,282 250,314 196,282 196,218" fill="#00475e"/>
            <!-- Hex top-face highlight -->
            <polygon points="250,186 304,218 277,218 250,186" fill="white" fill-opacity="0.09"/>

            <!-- Code lines inside hex -->
            <rect x="219" y="228" width="44" height="5" rx="2.5" fill="#c0e8ff" opacity="0.95"/>
            <rect x="219" y="241" width="62" height="5" rx="2.5" fill="#92cfee" opacity="0.75"/>
            <rect x="219" y="254" width="36" height="5" rx="2.5" fill="#c0e8ff" opacity="0.90"/>
            <rect x="219" y="267" width="54" height="5" rx="2.5" fill="#92cfee" opacity="0.65"/>
            <rect x="219" y="280" width="28" height="5" rx="2.5" fill="#c0e8ff" opacity="0.55"/>

            <!-- Blinking cursor -->
            <rect x="223" y="296" width="3" height="15" rx="1.5" fill="#c0e8ff">
              <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
            </rect>

            <!-- ── Inner orbit: HTML · CSS · JS (clockwise 12s) ── -->
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 250 250" to="360 250 250" dur="12s" repeatCount="indefinite"/>
              <!-- HTML node — orbit pos 0° → (362, 250) -->
              <g transform="translate(362,250)">
                <rect x="-30" y="-20" width="60" height="40" rx="12" fill="#ffdcc6"/>
                <text x="0" y="6" text-anchor="middle" font-family="'Manrope',sans-serif"
                  font-size="12" font-weight="800" fill="#693100">HTML</text>
              </g>
              <!-- CSS node — orbit pos 120° → (194, 345) -->
              <g transform="translate(194,345)">
                <rect x="-28" y="-20" width="56" height="40" rx="12" fill="#c0e8ff"/>
                <text x="0" y="6" text-anchor="middle" font-family="'Manrope',sans-serif"
                  font-size="12" font-weight="800" fill="#00475e">CSS</text>
              </g>
              <!-- JS node — orbit pos 240° → (194, 155) -->
              <g transform="translate(194,155)">
                <rect x="-22" y="-20" width="44" height="40" rx="12" fill="#cfe6f2"/>
                <text x="0" y="6" text-anchor="middle" font-family="'Manrope',sans-serif"
                  font-size="12" font-weight="800" fill="#4c616c">JS</text>
              </g>
            </g>

            <!-- ── Outer orbit: symbols (counter-clockwise 20s) ── -->
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="360 250 250" to="0 250 250" dur="20s" repeatCount="indefinite"/>
              <!-- </> — orbit pos 0° → (415, 250) -->
              <g transform="translate(415,250)">
                <rect x="-30" y="-20" width="60" height="40" rx="11" fill="#00475e"/>
                <text x="0" y="6" text-anchor="middle" font-family="monospace"
                  font-size="13" font-weight="700" fill="#c0e8ff">&lt;/&gt;</text>
              </g>
              <!-- { } — orbit pos 120° → (168, 403) -->
              <g transform="translate(168,403)">
                <rect x="-28" y="-20" width="56" height="40" rx="11" fill="#1a5f7a"/>
                <text x="0" y="6" text-anchor="middle" font-family="monospace"
                  font-size="14" font-weight="700" fill="#c0e8ff">{ }</text>
              </g>
              <!-- () — orbit pos 240° → (168, 97) -->
              <g transform="translate(168,97)">
                <rect x="-26" y="-20" width="52" height="40" rx="11" fill="#92cfee"/>
                <text x="0" y="6" text-anchor="middle" font-family="monospace"
                  font-size="14" font-weight="700" fill="#00475e">( )</text>
              </g>
            </g>

            <!-- ── Floating independent decorations ── -->

            <!-- Star / sparkle — top right -->
            <g>
              <animateTransform attributeName="transform" type="translate"
                values="0,0; 0,-11; 0,0" dur="3s" repeatCount="indefinite"/>
              <polygon points="430,88 434,100 447,100 437,108 441,121 430,113 419,121 423,108 413,100 426,100"
                fill="#00475e" opacity="0.55"/>
            </g>

            <!-- Diamond — bottom left -->
            <g>
              <animateTransform attributeName="transform" type="translate"
                values="0,0; 0,-9; 0,0" dur="4.2s" begin="1s" repeatCount="indefinite"/>
              <rect x="44" y="356" width="22" height="22" rx="4"
                fill="#92cfee" transform="rotate(45 55 367)"/>
            </g>

            <!-- Circle cluster — top left -->
            <g>
              <animateTransform attributeName="transform" type="translate"
                values="0,0; 0,-10; 0,0" dur="3.6s" begin="0.5s" repeatCount="indefinite"/>
              <circle cx="72" cy="148" r="15" fill="#cfe6f2"/>
              <circle cx="93" cy="135" r="9" fill="#00475e" opacity="0.28"/>
              <circle cx="59" cy="134" r="6" fill="#92cfee"/>
            </g>

            <!-- `npm run` pill — bottom left -->
            <g>
              <animateTransform attributeName="transform" type="translate"
                values="0,0; 0,-7; 0,0" dur="5.1s" begin="2s" repeatCount="indefinite"/>
              <rect x="34" y="364" width="78" height="30" rx="10" fill="#00475e" fill-opacity="0.09"/>
              <text x="73" y="383" text-anchor="middle" font-family="monospace"
                font-size="11" fill="#00475e" font-weight="600" opacity="0.75">npm run dev</text>
            </g>

            <!-- Floating dot particles -->
            <circle cx="388" cy="128" r="5" fill="#92cfee" opacity="0.7">
              <animate attributeName="cy" values="128;116;128" dur="2.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="148" cy="386" r="4" fill="#00475e" opacity="0.35">
              <animate attributeName="cy" values="386;376;386" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="458" cy="324" r="6" fill="#cfe6f2">
              <animate attributeName="cy" values="324;312;324" dur="4.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="52" cy="244" r="4" fill="#92cfee" opacity="0.5">
              <animate attributeName="cy" values="244;234;244" dur="3.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="420" cy="188" r="3.5" fill="#ffdcc6" opacity="0.8">
              <animate attributeName="cy" values="188;178;188" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
            </circle>

          </svg>
        </div>

      </div>
    </section>

    <!-- What you'll learn -->
    <section style="background:#f2f4f6; padding:6rem 0;">
      <div class="max-w-[1440px] mx-auto px-8">
        <p style="font-size:0.7rem; font-weight:500; letter-spacing:0.05em; text-transform:uppercase; color:#40484d; margin-bottom:0.75rem;">Curriculum</p>
        <h2 style="font-family:'Manrope',sans-serif; font-weight:700; font-size:2.25rem; color:#191c1e; margin-bottom:3.5rem;">What you'll learn</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="topic in topics"
            :key="topic.title"
            style="background:#fff; border-radius:2rem; padding:2rem; box-shadow:0 0 40px rgba(25,28,30,0.04); transition:box-shadow 0.25s;"
            onmouseover="this.style.boxShadow='0 0 40px rgba(25,28,30,0.1)'"
            onmouseout="this.style.boxShadow='0 0 40px rgba(25,28,30,0.04)'"
          >
            <div style="width:2.5rem; height:2.5rem; border-radius:0.75rem; background:#cfe6f2; display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem;">
              <span class="material-symbols-outlined" style="color:#00475e; font-size:1.25rem;">{{ topic.icon }}</span>
            </div>
            <h3 style="font-family:'Manrope',sans-serif; font-weight:700; font-size:1.125rem; color:#191c1e; margin-bottom:0.5rem;">{{ topic.title }}</h3>
            <p style="color:#40484d; font-size:0.875rem; line-height:1.6;">{{ topic.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section style="padding:6rem 0;">
      <div class="max-w-[1440px] mx-auto px-8">
        <p style="font-size:0.7rem; font-weight:500; letter-spacing:0.05em; text-transform:uppercase; color:#40484d; margin-bottom:0.75rem;">Reviews</p>
        <h2 style="font-family:'Manrope',sans-serif; font-weight:700; font-size:2.25rem; color:#191c1e; margin-bottom:3.5rem;">What students say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="t in testimonials"
            :key="t.author"
            style="background:#fff; border-radius:2rem; padding:2rem; box-shadow:0 0 40px rgba(25,28,30,0.06);"
          >
            <p style="color:#40484d; line-height:1.7; margin-bottom:1.5rem;">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div style="width:2.25rem; height:2.25rem; border-radius:9999px; background:#00475e; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                <span style="font-family:'Manrope',sans-serif; font-weight:700; color:#fff; font-size:0.875rem;">{{ t.author[0] }}</span>
              </div>
              <span style="font-family:'Manrope',sans-serif; font-weight:600; color:#191c1e; font-size:0.875rem;">{{ t.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="padding-bottom:7rem;">
      <div class="max-w-[1440px] mx-auto px-8">
        <div style="background:#00475e; border-radius:2rem; padding:4rem 3rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:2rem; box-shadow:0 0 40px rgba(0,71,94,0.22);">
          <div>
            <h2 style="font-family:'Manrope',sans-serif; font-weight:800; font-size:2.25rem; color:#fff; margin-bottom:0.75rem;">Ready to start?</h2>
            <p style="color:#92cfee; font-size:1.125rem;">Join developers mastering web development today.</p>
          </div>
          <NuxtLink
            to="/course/chapter/1-introduction-to-web-development/lesson/4-setting-up-dev-environment"
            style="background:#fff; color:#00475e; font-family:'Manrope',sans-serif; font-weight:700; padding:1.25rem 2.5rem; border-radius:1.5rem; text-decoration:none; white-space:nowrap; box-shadow:0 0 40px rgba(25,28,30,0.08); transition:filter 0.2s;"
            onmouseover="this.style.filter='brightness(0.95)'"
            onmouseout="this.style.filter='brightness(1)'"
          >
            Start Learning
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const topics = [
  { icon: 'code', title: 'Nuxt Basics', desc: 'Core concepts of Nuxt.js including layouts, pages, and components.' },
  { icon: 'hub', title: 'State Management', desc: 'Master Vuex and Pinia for managing application state efficiently.' },
  { icon: 'cloud_sync', title: 'API Integrations', desc: "Fetch and manage data from APIs using Nuxt's built-in features." },
  { icon: 'search', title: 'SEO Optimization', desc: 'Enhance your applications for better search engine rankings.' },
  { icon: 'speed', title: 'Performance', desc: 'Best practices to make your Nuxt app fast and scalable.' },
  { icon: 'rocket_launch', title: 'Deployment', desc: 'Hands-on experience deploying Nuxt applications to production.' },
]

const testimonials = [
  { quote: 'This course helped me land my first frontend developer job! The best resource out there.', author: 'Alex M.' },
  { quote: 'The explanations and hands-on projects are amazing. Highly recommended!', author: 'Sarah L.' },
  { quote: 'I went from beginner to pro in just weeks. This course is a game-changer.', author: 'Michael T.' },
]
</script>
