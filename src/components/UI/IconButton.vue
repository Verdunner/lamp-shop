<template>
    <button
        class="icon-button"
        :class="$attrs.class"
        @click="$emit('click', $event)"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
defineEmits(['click']);
</script>

<style scoped lang="scss">
.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    padding: 0;

    font-size: 24px;
    color: $outer-space;
    background-color: transparent;
    transition: background-color 0.2s;

    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: $geyser;
    }
}
</style>
