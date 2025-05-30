<template>
    <div class="topbar">
        <div class="topbar__container">
            <div class="topbar__left">
                <div class="topbar__city">
                    <Link href="#" icon="fas fa-location-dot">Тула</Link>
                </div>
                <div class="topbar__links">
                    <ul class="topbar__links-list">
                        <li
                            class="topbar__links-item"
                            v-for="item in links"
                            :key="item.text"
                        >
                            <Link :href="item.href">{{ item.text }}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="topbar__right">
                <div class="topbar__auth">
                    <Button
                        @click="modalStore.openAuthModal('login')"
                        class="topbar__auth-btn"
                        >Войти</Button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Link from '@/components/UI/Link.vue';
import Button from '@/components/UI/Button.vue';

import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();

const links = [
    { href: '#', text: 'Доставка и оплата' },
    { href: '#', text: 'Гарантия' },
    { href: '#', text: 'Возврат' },
    { href: '#', text: 'Отзывы' },
    { href: '#', text: 'Установка' },
    { href: '#', text: 'Дизайнерам' },
    { href: '#', text: 'Бренды' },
    { href: '#', text: 'Контакты' },
];
</script>

<style scoped lang="scss">
.topbar {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    color: $text-color;
    background-color: $geyser;

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: $width-container;
        width: 100%;
        height: 40px;
        padding: 0 5px;
    }

    &__left {
        display: flex;
    }

    &__city {
        margin-right: 50px;
    }

    &__links {
        &-list {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        &-item:not(:last-child) {
            margin-right: 50px;
        }
    }
}
</style>
