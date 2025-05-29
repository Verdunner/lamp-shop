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

    &__slider,
    &__categories {
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        background-color: slategray;
    }

    &__slider {
        width: 100vw;
        margin-bottom: 60px;
    }
    &__categories {
        width: $width-container;
        height: $width-container;
    }
}
</style>
