<template>
    <div class="modal-backdrop" @click.self="modalStore.closeAuthModal()">
        <div class="modal-content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();
</script>

<style scoped lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: $z-index-modal;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 170px;
    background-color: rgba($outer-space, 0.7);
}

.modal-content {
    width: 465px;
    min-height: 200px;
    padding: 20px 20px 0;

    background: $background-color;
    border-radius: $border-radius-big;
}
</style>
