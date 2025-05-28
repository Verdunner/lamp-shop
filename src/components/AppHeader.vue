<template>
    <header class="app-header">
        <div class="app-header__upper">
            <p>Upper section (логин, уведомления)</p>
        </div>
        <div class="app-header__center">
            <p>Center section (логотип, поиск)</p>
        </div>
        <div class="app-header__bottom">
            <p>Bottom section (навигация)</p>
        </div>
    </header>
</template>

<style scoped lang="scss">
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #333;
    color: white;
    z-index: 1000;

    &__upper,
    &__center,
    &__bottom {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}
</style>
