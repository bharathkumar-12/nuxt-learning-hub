<template>
  <label
    style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.75rem 1.5rem; border-radius:0.75rem; cursor:pointer; font-weight:500; font-size:0.875rem; transition:filter 0.2s, transform 0.1s; user-select:none;"
    :style="modelValue
      ? 'background:linear-gradient(135deg,#2d7a2d,#3a9e3a); color:#fff;'
      : 'background:linear-gradient(135deg,#00475e,#1a5f7a); color:#fff;'"
    onmouseover="this.style.filter='brightness(1.08)'"
    onmouseout="this.style.filter='brightness(1)'"
    onmousedown="this.style.transform='scale(0.98)'"
    onmouseup="this.style.transform='scale(1)'"
  >
    <input
      type="checkbox"
      :value="modelValue"
      @input="() => $emit('update:modelValue', !modelValue)"
      class="hidden"
    />
    <span class="material-symbols-outlined" style="font-size:1.125rem;">
      {{ modelValue ? 'check_circle' : 'radio_button_unchecked' }}
    </span>
    {{ modelValue ? 'Completed!' : 'Mark as Complete' }}
  </label>
</template>

<script setup>
defineProps({ modelValue: Boolean })
defineEmits(['update:modelValue'])
</script>
