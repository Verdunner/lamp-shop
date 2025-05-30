<template>
    <div class="signup-form">
        <div class="signup-form__controls">
            <IconButton
                @click="modalStore.openAuthModal('login')"
                class="signup-form__controls-btn"
            >
                <i class="fa-solid fa-arrow-left"></i>
            </IconButton>
            <IconButton
                @click="modalStore.closeAuthModal()"
                class="signup-form__controls-btn"
            >
                <i class="fa-solid fa-xmark"></i>
            </IconButton>
        </div>
        <div class="signup-form__content">
            <h1 class="signup-form__title">РЕГИСТРАЦИЯ</h1>
            <div class="signup-form__fields">
                <Input
                    v-model="names"
                    placeholder="ФИО"
                    class="signup-form__input"
                />
                <Input
                    v-model="phone"
                    type="number"
                    placeholder="Телефон"
                    class="signup-form__input"
                />
                <Input
                    v-model="role"
                    placeholder="Пользователь"
                    class="signup-form__input"
                />
                <div class="signup-form__captcha">
                    <img
                        src="@/assets/images/captcha.png"
                        alt="logo"
                        class="signup-form__captcha-pic"
                    />
                    <Input
                        v-model="captcha"
                        placeholder="Капча"
                        class="signup-form__input signup-form__captcha-input"
                    />
                </div>
            </div>
            <div class="signup-form__actions">
                <Button class="signup-form__btn signup-form__btn--signup">
                    Регистрация
                </Button>
                <a href="#" class="signup-form__link"
                    >Пароль будет отправлен на указанный номер телефона</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/components/UI/Button.vue';
import IconButton from '@/components/UI/IconButton.vue';
import Input from '@/components/UI/Input.vue';
import { ref } from 'vue';
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();

const names = ref('');
const phone = ref('');
const role = ref('');
const captcha = ref('');
</script>

<style scoped lang="scss">
.signup-form {
    &__controls {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    &__content {
        padding: 0 50px 50px;
    }

    &__title {
        margin-bottom: 20px;

        font-size: 20px;
        text-align: center;
        font-weight: 500;
    }

    &__fields {
        display: flex;
        flex-wrap: wrap;

        margin-bottom: 40px;
    }

    &__actions {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__input {
        margin-bottom: 20px;
    }

    &__captcha {
        display: flex;

        &-pic {
            width: 145px;
            height: 40px;
            margin-right: 20px;
        }

        &-input {
            margin: 0;
        }
    }

    &__btn {
        width: 175px;
        height: 40px;
        font-size: 16px;

        &--signup {
            margin-bottom: 75px;
        }
    }

    &__link {
        font-size: 12px;
        color: $sea-green;
        text-wrap: nowrap;
        text-decoration: none;
    }
}
</style>
