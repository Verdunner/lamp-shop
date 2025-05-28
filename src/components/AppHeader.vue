<template>
    <header class="app-header">
        <HeaderTopbar />
        <HeaderMain @toggleCatalog="toggleCatalog" />
        <HeaderTabs @toggleCategory="toggleCategory" />
        <CatalogDropdown v-if="dropdownMode === 'catalog'" />
        <CategoryDropdown v-if="dropdownMode === 'category'" />
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HeaderTopbar from './header/HeaderTopbar.vue';
import HeaderMain from './header/HeaderMain.vue';
import HeaderTabs from './header/HeaderTabs.vue';
import CatalogDropdown from './header/CatalogDropdown.vue';
import CategoryDropdown from './header/CategoryDropdown.vue';

const dropdownMode = ref<'default' | 'catalog' | 'category'>('default');

function toggleCatalog() {
    dropdownMode.value =
        dropdownMode.value === 'catalog' ? 'default' : 'catalog';
}
function toggleCategory() {
    dropdownMode.value =
        dropdownMode.value === 'category' ? 'default' : 'category';
}
</script>

<style scoped lang="scss">
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #333;
    z-index: 1000;
}
</style>
