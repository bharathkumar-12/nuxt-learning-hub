<template>
	<div class="text-center mb-5 text-4xl">
            Course: <span class="font-medium">Mastering Nuxt</span>
        </div>
	<div class="grid grid-flow-col grid-cols-3 h-full">
		<div class="h-full col-span-1 p-4 flex flex-col space-y-4 text-start">
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
						:to="lesson.path">
						{{ lesson.number }} {{ lesson.title }}
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="p-10 bg-violet-50 col-span-2 rounded-sm">
			<NuxtErrorBoundary>
			<NuxtPage />
				<template #error="{error}">
					<div class="flex flex-col justify-start">
						<p> 
						oh no, something broke! 
						<code>
							{{ error }}
						</code>
					</p>
					<button 
					class="bg-amber-500 cursor-pointer w-fit px-4 py-2 text-light rounded-lg"
					@click="resetError(error)">
						Reset</button>
						</div>
				</template>
			</NuxtErrorBoundary>
		</div>
	</div>
</template>
<script lang="ts" setup>
const course = useCourse();
const resetError = (error): void =>{
	error.value = null
}
</script>
<style scoped>
.router-link-active {
	color: blueviolet;
}
</style>
