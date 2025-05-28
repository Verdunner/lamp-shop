<template>
    <header class="app-header">
        <div class="app-header__topbar">
            <div class="topbar__city">Город</div>
            <div class="topbar__nav">Навигация</div>
            <div class="topbar__profile">Профиль</div>
        </div>
        <div
            class="app-header__main header-main"
            @click="
                dropdownMode =
                    dropdownMode === 'catalog' ? 'default' : 'catalog'
            "
        >
            <div class="header-main__left">
                <div class="header-main__logo">Логотип</div>
            </div>
            <div class="header-main__center">
                <button class="header-main__catalog-button">Каталог</button>
                <div class="header-main__search">Поиск</div>
                <div class="header-main__phones">Телефоны</div>
            </div>
            <div class="header-main__right">
                <a class="header-main__link" href="#">Избранное</a>
                <a class="header-main__link" href="#">Сравнение</a>
                <a class="header-main__link" href="#">Корзина</a>
            </div>
        </div>

        <div
            class="app-header__nav"
            @click="
                dropdownMode =
                    dropdownMode === 'category' ? 'default' : 'category'
            "
        >
            Кнопки категорий
        </div>
        <div
            class="app-header__dropdown app-header__dropdown--catalog"
            v-if="dropdownMode === 'catalog'"
        >
            Раскрытый каталог
        </div>
        <div
            class="app-header__dropdown app-header__dropdown--category"
            v-if="dropdownMode === 'category'"
        >
            Раскрытая категория
        </div>
    </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const dropdownMode = ref('catalog'); // 'default' | 'catalog' | 'category'
</script>
<style scoped lang="scss">
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #333;
    color: white;
    z-index: 1000;

    &__topbar,
    &__main,
    &__nav {
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        z-index: 999;

        &--catalog {
            background-color: slategray;
            height: 600px; // пример
        }

        &--category {
            background-color: $link-water;
            height: 300px; // пример
        }
    }
}
</style>
