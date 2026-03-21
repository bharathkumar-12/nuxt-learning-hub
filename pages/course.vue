<template>
  <div class="flex flex-col min-h-screen bg-surface">

    <!-- Course top bar -->
    <div style="background:#fff; padding:1rem 2rem; display:flex; align-items:center; gap:1rem; box-shadow:0 0 40px rgba(25,28,30,0.06);">
      <NuxtLink to="/" style="color:#40484d; text-decoration:none; font-size:0.875rem; display:flex; align-items:center; gap:0.375rem;">
        <span class="material-symbols-outlined" style="font-size:1rem; color:#40484d;">arrow_back</span>
        Home
      </NuxtLink>
      <span style="color:#c0c8cd;">·</span>
      <span style="font-family:'Manrope',sans-serif; font-weight:700; color:#191c1e; font-size:0.9375rem;">Mastering Web Development</span>

      <!-- Overall progress -->
      <div class="ml-auto flex items-center gap-3">
        <span style="font-size:0.75rem; color:#40484d; font-weight:500;">{{ completedCount }} / {{ totalLessons }} lessons</span>
        <div style="width:120px; height:6px; background:#e1e2e5; border-radius:9999px; overflow:hidden;">
          <div :style="`width:${progressPercent}%; height:100%; background:linear-gradient(to right,#00475e,#92cfee); border-radius:9999px; transition:width 0.4s ease;`"></div>
        </div>
      </div>
    </div>

    <div class="flex flex-1" style="overflow:hidden;">

      <!-- Sidebar -->
      <aside style="width:320px; flex-shrink:0; background:linear-gradient(to bottom,#eceef0,#f2f4f6); overflow-y:auto; padding:1.5rem 1rem;">
        <div v-for="chapter in course.chapters" :key="chapter.slug" class="mb-6">
          <h2 style="font-family:'Manrope',sans-serif; font-weight:700; font-size:0.8125rem; color:#191c1e; letter-spacing:0.01em; margin-bottom:0.5rem; padding:0 0.5rem;">
            {{ chapter.title }}
          </h2>
          <div class="flex flex-col gap-0.5">
            <NuxtLink
              v-for="(lesson, index) in chapter.lessons"
              :key="index"
              :to="lesson.path"
              class="lesson-link"
              :class="{ 'lesson-active': $route.fullPath === lesson.path }"
              style="display:flex; align-items:center; gap:0.625rem; padding:0.5rem 0.625rem; border-radius:0.625rem; text-decoration:none; font-size:0.8125rem; color:#40484d; transition:background 0.15s, color 0.15s;"
            >
              <span
                class="material-symbols-outlined"
                style="font-size:0.9rem; flex-shrink:0;"
                :style="{ color: $route.fullPath === lesson.path ? '#00475e' : '#c0c8cd' }"
              >
                {{ getLessonCompletion(chapter, lesson) ? 'check_circle' : 'radio_button_unchecked' }}
              </span>
              <span :style="{ color: $route.fullPath === lesson.path ? '#00475e' : '#40484d', fontWeight: $route.fullPath === lesson.path ? '600' : '400' }">
                {{ lesson.title }}
              </span>
              <span class="ml-auto" style="font-size:0.7rem; color:#70787d; flex-shrink:0;">{{ lesson.duration }}</span>
            </NuxtLink>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main style="flex:1; background:#f2f4f6; overflow-y:auto; padding:2.5rem;">
        <div style="max-width:860px;">
          <NuxtErrorBoundary>
            <NuxtPage />
            <template #error="{ error }">
              <div style="background:#fff; border-radius:1.5rem; padding:2rem; box-shadow:0 0 40px rgba(25,28,30,0.06);">
                <p style="font-family:'Manrope',sans-serif; font-weight:700; font-size:1.125rem; color:#191c1e; margin-bottom:0.5rem;">Something went wrong</p>
                <code style="font-size:0.8125rem; color:#ba1a1a; background:#ffdad6; padding:0.25rem 0.5rem; border-radius:0.375rem; display:block; margin-bottom:1rem;">{{ error }}</code>
                <button
                  style="background:linear-gradient(135deg,#00475e,#1a5f7a); color:#fff; font-weight:500; padding:0.625rem 1.25rem; border-radius:0.75rem; border:none; cursor:pointer; font-size:0.875rem;"
                  @click="resetError(error)"
                >
                  Try Again
                </button>
              </div>
            </template>
          </NuxtErrorBoundary>
        </div>
      </main>

    </div>
  </div>
</template>

<script lang="ts" setup>
const course = useCourse()
const progress = useLocalStorage('progress', [])

const resetError = (error: any): void => {
  error.value = null
}

const getLessonCompletion = (chapter: any, lesson: any): boolean => {
  if (!progress.value[chapter.number - 1]) return false
  if (!progress.value[chapter.number - 1][lesson.number - 1]) return false
  return progress.value[chapter.number - 1][lesson.number - 1]
}

const totalLessons = computed(() =>
  course.chapters.reduce((sum: number, ch: any) => sum + ch.lessons.length, 0)
)

const completedCount = computed(() =>
  course.chapters.reduce((sum: number, ch: any) => {
    return sum + ch.lessons.filter((l: any) => getLessonCompletion(ch, l)).length
  }, 0)
)

const progressPercent = computed(() =>
  totalLessons.value > 0 ? Math.round((completedCount.value / totalLessons.value) * 100) : 0
)
</script>

<style scoped>
.lesson-link:hover {
  background: rgba(0, 71, 94, 0.06);
  color: #191c1e;
}
.lesson-active {
  background: rgba(0, 71, 94, 0.08) !important;
  border-left: 3px solid #00475e;
  padding-left: calc(0.625rem - 3px) !important;
}
</style>
