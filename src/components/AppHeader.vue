<template>
    <header class="app-header">
        <HeaderTopbar />
        <HeaderMain @toggleCatalog="toggleCatalog" />
        <HeaderTabs
            :current="currentCategory"
            @toggleCategory="toggleCategory"
        />
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
const currentCategory = ref<number | null>(null);

function toggleCatalog() {
    currentCategory.value = null;

    dropdownMode.value =
        dropdownMode.value === 'catalog' ? 'default' : 'catalog';
}
function toggleCategory(id: number) {
    if (currentCategory.value === id) {
        currentCategory.value = null;
        dropdownMode.value =
            dropdownMode.value === 'category' ? 'default' : 'category';
        return;
    }
    currentCategory.value = id;
    dropdownMode.value = 'category';
}
</script>

<style scoped lang="scss">
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: $z-index-header;
    background-color: $white;
}
</style>
