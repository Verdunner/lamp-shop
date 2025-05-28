<template>
    <section class="home-page">
        <div class="home-page__slider">
            <p>Заглушка под слайдер</p>
        </div>

        <div class="home-page__categories">
            <p>Заглушка под категории</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.home-page {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__slider,
    &__categories {
        margin: 0 auto;
        padding: 2rem;
        border: 2px dashed #ccc;
        text-align: center;
        background-color: slategray;
    }

    &__slider {
        width: 100vw;
    }
    &__categories {
        width: 1440px;
        height: 1440px;
    }
}
</style>
