<template>
	<div class="flex flex-col space-y-4 text-gray-500">
		<h4 class="text-sm font-medium">{{ chapter.title }}</h4>
		<h1 class="text-2xl font-bold text-black">{{ lesson.title }}</h1>
		<div class="underline flex flex-row space-x-4 cursor-pointer">
			<a href="">Download Video</a>
			<a href="">Download Source Code</a>
			<a href=""></a>
		</div>
		<VideoPlayer />
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
			eaque ipsa ad ex velit tempora quidem? Totam illo asperiores, repellendus
			fugiat sint ex ipsum, voluptatibus, odit ad facilis in modi.
		</p>
        
            <LessonCompleteButton
			:modelValue="isLessonComplete"
			@update:modelValue="toggleComplete"
		/>
       
		
	</div>
</template>
<script setup lang="ts">
const course = useCourse();
const route = useRoute();
const chapter = computed(() => {
	return course.chapters?.find(
		(chapter) => chapter.slug === route.params.chapterSlug
	);
});

const lesson = computed(() => {
	return chapter.value.lessons?.find(
		(lesson) => lesson.slug === route.params.lessonSlug
	);
});

const title = computed(() => `${lesson.value.title} - ${course.title}`);
useHead({
	title,
});
const progress = useLocalStorage('progress', [])

const isLessonComplete = computed(() => {
	if (!progress.value[chapter.value.number - 1]) {
		return false;
	}
	if (!progress.value[chapter.value.number - 1][
        lesson.value.number - 1]
    ) {
		return false;
	}
	return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
	if (!progress.value[chapter.value.number - 1]) {
		progress.value[chapter.value.number - 1] = [];
	}
	progress.value[chapter.value.number - 1][
		lesson.value.number - 1
	] = !isLessonComplete.value;
};
</script>
