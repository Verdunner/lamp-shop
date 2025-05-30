<template>
    <div class="catalog-dropdown">Раскрытый каталог</div>
</template>

<style scoped lang="scss">
.catalog-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: $z-index-header-dropdown;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 500px;
    font-size: 24px;
    background-color: $geyser;
}
</style>
