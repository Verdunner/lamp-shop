<template>
    <button
        class="ui-button"
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
.ui-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 30px;

    border: none;
    border-radius: 5px;
    background-color: $calypso;
    color: $white;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &--secondary {
        background-color: $calypso;
        color: $text-color;
    }
}
</style>
