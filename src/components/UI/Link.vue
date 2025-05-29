<template>
    <a
        class="link"
        :class="{
            'link--iconed': icon,
        }"
        :href="href"
        :target="target"
    >
        <i v-if="icon" :class="['link__icon', icon]"></i>
        <span class="link__text">
            <slot />
        </span>
    </a>
</template>

<script lang="ts" setup>
defineProps<{
    href: string;
    icon?: string;
    target?: string;
}>();
</script>

<style scoped lang="scss">
.link {
    display: inline-flex;
    align-items: center;

    font-size: 16px;
    color: $text-color;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &__icon {
        font-size: 0.875rem;
    }

    &--iconed & {
        &__icon {
            margin-right: 5px;
        }
    }
}
</style>
