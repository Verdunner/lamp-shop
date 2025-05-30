<template>
    <nav class="header-tabs">
        <ul class="header-tabs__list">
            <li
                class="header-tabs__item"
                v-for="category in categories"
                :key="category.id"
            >
                <button
                    class="header-tabs__button"
                    :class="{
                        'header-tabs__button--current': category.id === current,
                    }"
                    @click="$emit('toggleCategory', category.id)"
                >
                    {{ category.name }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
defineEmits(['toggleCategory']);
defineProps<{ current?: number | null }>();

const categories = [
    { id: 1, name: 'Люстры' },
    { id: 2, name: 'Светильники' },
    { id: 3, name: 'Лампы' },
    { id: 4, name: 'Бра' },
    { id: 5, name: 'Торшеры' },
    { id: 6, name: 'Торшеры' },
    { id: 7, name: 'Споты' },
    { id: 8, name: 'Точечные' },
    { id: 9, name: 'Подсветки' },
    { id: 10, name: 'Трековые системы' },
    { id: 11, name: 'LED' },
    { id: 12, name: 'Уличные' },
    { id: 13, name: 'Лампочки' },
];
</script>

<style scoped lang="scss">
.header-tabs {
    display: flex;
    justify-content: center;
    height: 50px;
    border-top: 1px solid $geyser;

    &__list {
        display: flex;
        width: $width-container;
        height: 100%;
    }

    &__item {
        display: flex;
        flex-basis: 20px;
        flex-grow: 1;
    }

    &__button {
        width: 100%;
        height: 100%;
        padding: 5px 10px;

        font-size: 18px;
        color: $text-color;
        text-wrap: nowrap;

        background: none;
        border: none;
        cursor: pointer;
        transition: background-color $transition-duration $transition-function;

        &:hover {
            background-color: $geyser;
        }

        &--current {
            color: $calypso;
            background-color: $link-water;
        }
    }
}
</style>
