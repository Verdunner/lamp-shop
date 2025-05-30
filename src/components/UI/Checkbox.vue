<template>
    <label class="checkbox">
        <input
            type="checkbox"
            class="checkbox__input"
            v-bind="$attrs"
            v-model="model"
        />
        <span class="checkbox__label"><slot /></span>
    </label>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });
const model = defineModel<boolean>();
</script>

<style scoped lang="scss">
.checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__input {
        width: 25px;
        height: 25px;

        margin: 0;
        margin-right: 10px;
    }

    &__label {
        font-size: 14px;
    }
}
</style>
