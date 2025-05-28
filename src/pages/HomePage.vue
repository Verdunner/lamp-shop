<!-- src/pages/HomePage.vue -->
<template>
    <section class="home-page">
        <h2>HOME PAGE CONTENT</h2>
        <button @click="toggle">Нажми меня</button>
        <i class="fas fa-home"></i>
        <i class="fas fa-home"></i>
        <i class="fas fa-home"></i>

        <p v-if="clicked">🎉 Ты кликнул кнопку!</p>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const clicked = ref(false);
const toggle = () => {
    clicked.value = !clicked.value;
};
</script>

<style scoped lang="scss">
.home-page {
    h2 {
        margin-bottom: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #42b883;
        color: $white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #2c9c6a;
        }
    }

    p {
        margin-top: 1rem;
    }
}
</style>
