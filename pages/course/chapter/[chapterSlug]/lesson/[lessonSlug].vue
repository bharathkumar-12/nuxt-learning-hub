<template>
  <div style="background:#fff; border-radius:1.5rem; padding:2rem 2.5rem; box-shadow:0 0 40px rgba(25,28,30,0.06);">

    <!-- Breadcrumb -->
    <p style="font-size:0.75rem; font-weight:500; letter-spacing:0.05em; text-transform:uppercase; color:#40484d; margin-bottom:0.75rem;">
      {{ chapter.title }}
    </p>

    <!-- Lesson title -->
    <h1 style="font-family:'Manrope',sans-serif; font-weight:800; font-size:1.75rem; color:#191c1e; margin-bottom:1.5rem; line-height:1.2;">
      {{ lesson.title }}
    </h1>

    <!-- Actions row -->
    <div style="display:flex; gap:1rem; margin-bottom:1.75rem;">
      <a href="" style="display:flex; align-items:center; gap:0.375rem; font-size:0.8125rem; color:#00475e; font-weight:500; text-decoration:none; transition:color 0.15s;">
        <span class="material-symbols-outlined" style="font-size:1rem;">download</span>
        Download Video
      </a>
      <a href="" style="display:flex; align-items:center; gap:0.375rem; font-size:0.8125rem; color:#00475e; font-weight:500; text-decoration:none; transition:color 0.15s;">
        <span class="material-symbols-outlined" style="font-size:1rem;">code</span>
        Source Code
      </a>
    </div>

    <!-- Video player -->
    <VideoPlayer />

    <!-- Lesson body -->
    <p style="color:#40484d; line-height:1.8; margin-top:1.75rem; margin-bottom:2rem; font-size:1rem;">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
      eaque ipsa ad ex velit tempora quidem? Totam illo asperiores, repellendus
      fugiat sint ex ipsum, voluptatibus, odit ad facilis in modi.
    </p>

    <!-- Complete button -->
    <LessonCompleteButton
      :modelValue="isLessonComplete"
      @update:modelValue="toggleComplete"
    />

  </div>
</template>

<script setup>
const course = useCourse()
const route = useRoute()

const chapter = computed(() =>
  course.chapters?.find((c) => c.slug === route.params.chapterSlug)
)

const lesson = computed(() =>
  chapter.value.lessons?.find((l) => l.slug === route.params.lessonSlug)
)

const title = computed(() => `${lesson.value.title} - ${course.title}`)
useHead({ title })

const progress = useLocalStorage('progress', [])

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) return false
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) return false
  return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = []
  }
  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value
}
</script>
