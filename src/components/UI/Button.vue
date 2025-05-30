<template>
    <button
        class="ui-button"
        :class="$attrs.class"
        v-bind="attrsWithoutClass"
        @click="$emit('click', $event)"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
defineOptions({ inheritAttrs: false });
defineEmits(['click']);

const attrs = useAttrs();
const { class: _class, ...attrsWithoutClass } = attrs;
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
    transition: background-color 0.4s;
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
