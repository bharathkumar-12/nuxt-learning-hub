<template>
    <label class="px-4 py-2 border-2 w-fit rounded-lg text-white"
    :class="{
        'bg-green-600': modelValue,
        'bg-gray-600' : !modelValue
    }">

    <input
    type="checkbox"
    :value="modelValue"
    
    @input="()=> $emit('update:modelValue', !modelValue)"
    class="hidden"
    />
    {{ modelValue ? 'Completed!' : 'Mark as Complete' }}
    </label>

</template>
<script setup lang="ts">
const props = defineProps<{
    modelValue:boolean,
}>()

const emit = defineEmits<{
    (e:'update:modelValue', value: boolean ): void
}>()
</script>
<style scoped>
::selection {
    display: none;
}
</style>