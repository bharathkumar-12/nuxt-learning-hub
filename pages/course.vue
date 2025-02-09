<template>
	<div class="flex flex-col h-full">
		<div class="text-center text-semibold text-2xl mb-5">
			Course Mastering Nuxt
		</div>
		<div class="grid grid-flow-col grid-cols-3 h-full">
			<div class="h-full col-span-1 p-4 flex flex-col space-y-4">
				<div href="" v-for="chapter in course.chapters" class="pointer-default">
					<h2 class="mb-2 font-medium">{{ chapter.title }}</h2>
					<div class="flex flex-col space-y-2">
						<NuxtLink
							v-for="(lesson, index) in chapter.lessons"
							:key="index" 
                            :class="{
                                'bg-violet-50': $route.fullPath === lesson.path,
                                'text-gray-500': $route.fullPath !== lesson.path,
                            }"
							class="text-sm cursor-pointer rounded-sm py-1 px-2"
							:to="lesson.path"
						>
							{{ index + 1 }}. {{ lesson.title }}
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="p-10 bg-violet-50 col-span-2 rounded-sm">
				<NuxtPage />
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
const course = useCourse();
</script>
<style scoped>
.router-link-active {
	color: blueviolet;
}
</style>
