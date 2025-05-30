<template>
    <header class="app-header">
        <HeaderTopbar />
        <HeaderMain
            :isCatalogOpened="dropdownMode === 'catalog'"
            @toggleCatalog="toggleCatalog"
        />
        <HeaderTabs
            :current="currentCategory"
            @toggleCategory="toggleCategory"
        />
        <transition name="dropdown-slide" appear>
            <CatalogDropdown v-if="dropdownMode === 'catalog'" />
        </transition>
        <transition name="dropdown-slide" appear>
            <CategoryDropdown v-if="dropdownMode === 'category'" />
        </transition>
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
    z-index: $z-index-header;

    width: 100vw;
    height: $height-header-desktop;
    background-color: $background-color;
}

.dropdown-slide-enter-active,
.dropdown-slide-leave-active {
    transition: max-height $transition-duration $transition-function;
    overflow: hidden;
}

.dropdown-slide-enter-from,
.dropdown-slide-leave-to {
    max-height: 0;
}

.dropdown-slide-enter-to,
.dropdown-slide-leave-from {
    max-height: 500px;
}
</style>
