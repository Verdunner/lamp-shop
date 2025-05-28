<template>
    <div class="main-layout">
        <AppHeader />
        <main>
            <slot />
        </main>
        <!-- <Modal /> -->
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
// import Modal from '@/components/Modal.vue';
</script>

<style scoped lang="scss">
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
        flex: 1;
        padding: 2rem;
    }
}
</style>
