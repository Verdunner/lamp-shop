<template>
    <div class="main-layout">
        <AppHeader />
        <main>
            <slot />
        </main>
        <Modal v-if="modalStore.isAuthModalOpen">
            <LoginForm v-if="modalStore.authMode === 'login'" />
            <SignupForm v-else-if="modalStore.authMode === 'signup'" />
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import Modal from '@/components/UI/Modal.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
import SignupForm from '@/components/auth/SignupForm.vue';
import { watch } from 'vue';
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();

watch(
    () => modalStore.isAuthModalOpen,
    (isOpen) => {
        document.documentElement.style.overflow = isOpen ? 'hidden' : '';
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
        margin-top: $height-header-desktop;
    }
}
</style>
