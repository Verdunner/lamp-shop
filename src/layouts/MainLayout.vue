<template>
    <div class="main-layout">
        <AppHeader />
        <main>
            <slot />
        </main>
        <Modal
            v-if="modalStore.isAuthModalOpen"
            @close="modalStore.closeAuthModal()"
        />
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import Modal from '@/components/Modal.vue';
import { watch } from 'vue';
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();

watch(
    () => modalStore.isAuthModalOpen,
    (isOpen) => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
);
</script>

<style scoped lang="scss">
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
        flex: 1;
        margin-top: 182px;
    }
}
</style>
