import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
    const isAuthModalOpen = ref(false);
    const authMode = ref<'login' | 'signup'>('login');

    function openAuthModal(mode: 'login' | 'signup') {
        authMode.value = mode;
        isAuthModalOpen.value = true;
    }

    function closeAuthModal() {
        isAuthModalOpen.value = false;
    }

    return { isAuthModalOpen, authMode, openAuthModal, closeAuthModal };
});
