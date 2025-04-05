<template>
    <NuxtLayout>
        <div class="flex flex-col justify-items-center">
            <div>Handling Server side Error</div>
            <div>Something wrong</div>
            <div>Redirect to Home</div>
            <p @click="handleError" class="underline">{{ error.message }}</p>
        </div>
    </NuxtLayout>
</template>
<script setup>
const error = useError()
const handleError = ()=>{
    clearError({
        redirect: '/course/chapter/1-introduction-to-web-development/lesson/1-what-is-web-development'
    })
}
</script>