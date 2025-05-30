<template>
    <input
        v-bind="attrsWithoutClass"
        :class="['ui-input', attrs.class]"
        v-model="modelValueProxy"
        @input="emitInput"
    />
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

defineOptions({ inheritAttrs: false });
const props = defineProps<{ modelValue: string | number }>();
const emit = defineEmits(['update:modelValue', 'input']);

const attrs = useAttrs();
const { class: _class, ...attrsWithoutClass } = attrs;

const modelValueProxy = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});

const emitInput = (event: Event) => {
    emit('input', event);
};
</script>

<style scoped lang="scss">
.ui-input {
    all: unset;
    width: 100%;
    height: 40px;
    padding: 0 15px;

    font-size: 14px;
    background-color: $link-water;
    border-radius: $border-radius-medium;
}
</style>
