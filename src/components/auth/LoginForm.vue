<template>
    <div class="login-form">
        <div class="login-form__controls">
            <IconButton
                @click="modalStore.closeAuthModal()"
                class="login-form__controls-btn"
            >
                <i class="fa-solid fa-xmark"></i>
            </IconButton>
        </div>
        <div class="login-form__content">
            <h1 class="login-form__title">ВХОД</h1>
            <div class="login-form__fields">
                <Input
                    v-model="login"
                    placeholder="Логин"
                    class="login-form__input"
                />
                <Input
                    v-model="password"
                    type="password"
                    placeholder="Пароль"
                    class="login-form__input"
                />
                <Checkbox v-model="rememberMe" class="login-form__checkbox">
                    Запомнить меня
                </Checkbox>
            </div>
            <div class="login-form__actions">
                <Button class="login-form__btn login-form__btn--login">
                    Войти
                </Button>
                <Button
                    @click="modalStore.openAuthModal('signup')"
                    class="login-form__btn login-form__btn--signup"
                >
                    Регистрация
                </Button>
                <a href="#" class="login-form__link">Не помню свой пароль</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/components/UI/Button.vue';
import IconButton from '@/components/UI/IconButton.vue';
import Checkbox from '@/components/UI/Checkbox.vue';
import Input from '@/components/UI/Input.vue';
import { ref } from 'vue';
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();

const login = ref('');
const password = ref('');
const rememberMe = ref<boolean>(false);
</script>

<style scoped lang="scss">
.login-form {
    &__controls {
        display: flex;
        justify-content: flex-end;
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

        margin-bottom: 20px;
    }

    &__actions {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__input {
        margin-bottom: 20px;
    }

    &__btn {
        width: 175px;
        height: 40px;
        font-size: 16px;

        &--login {
            margin-bottom: 5px;
        }

        &--signup {
            margin-bottom: 50px;

            color: $calypso;
            background-color: transparent;

            &:hover {
                background-color: $geyser;
            }
        }
    }

    &__link {
        font-size: 12px;
        color: $outer-space;
    }
}
</style>
