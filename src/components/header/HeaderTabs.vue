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
                    @click="$emit('toggleCategory')"
                >
                    {{ category.name }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
defineEmits(['toggleCategory']);

const categories = [
    { id: 1, name: 'Ванны' },
    { id: 2, name: 'Смесители' },
    { id: 3, name: 'Душевые' },
    { id: 4, name: 'Мебель' },
    { id: 5, name: 'Унитазы' },
    { id: 6, name: 'Раковины' },
    { id: 7, name: 'Зеркала' },
    { id: 8, name: 'Аксессуары' },
    { id: 9, name: 'Плитка' },
    { id: 10, name: 'Освещение' },
];
</script>

<style scoped lang="scss">
.header-tabs {
    display: flex;
    justify-content: center;
    background-color: $white;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.5rem 1rem;

    &__list {
        display: flex;
        gap: 1rem;
        list-style: none;
        padding: 0;
        margin: 0;
        flex-wrap: wrap;
    }

    &__item {
        display: flex;
    }

    &__button {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        color: $text-color;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: $geyser;
        }

        &:focus {
            outline: 2px solid $cinnabar;
        }
    }
}
</style>
