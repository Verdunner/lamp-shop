import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
    const isAuthModalOpen = ref(false);

    function openAuthModal() {
        isAuthModalOpen.value = true;
    }

    function closeAuthModal() {
        isAuthModalOpen.value = false;
    }

    return { isAuthModalOpen, openAuthModal, closeAuthModal };
});
