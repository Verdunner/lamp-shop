<template>
    <div class="header-main">
        <div class="header-main__container">
            <div class="header-main__logo">
                <img
                    src="@/assets/images/logo.png"
                    alt="logo"
                    class="header-main__logo-pic"
                />
            </div>
            <Button
                @click="$emit('toggleCatalog')"
                class="header-main__catalog-btn"
            >
                <i class="fas fa-bars header-main__catalog-btn-icon"></i>
                Каталог
            </Button>
            <div class="header-main__search">
                <input
                    type="text"
                    class="header-main__search-input"
                    placeholder="Торшеры"
                />
                <i class="fas fa-search header-main__search-icon"></i>
            </div>
            <div class="header-main__phones">
                <div class="header-main__phone">
                    <div class="header-main__phone-number">
                        8 (800) 100-44-53
                    </div>
                    <div class="header-main__phone-descr">
                        Бесплатно по России
                    </div>
                </div>
                <div class="header-main__phone">
                    <div class="header-main__phone-number">
                        +7 (495) 104-99-55
                    </div>
                    <div class="header-main__phone-descr">
                        Бесплатная доставка
                    </div>
                </div>
            </div>
            <div class="header-main__links">
                <a class="header-main__link" href="#">
                    <i class="fas fa-chart-simple header-main__link-icon"></i>
                    <span class="header-main__link-text">Сравнение</span>
                </a>
                <a class="header-main__link" href="#">
                    <i class="fa-regular fa-heart header-main__link-icon"></i>
                    <span class="header-main__link-text">Нравится</span>
                </a>
                <a class="header-main__link" href="#">
                    <i class="fas fa-cart-shopping header-main__link-icon"></i>
                    <span class="header-main__link-text">Корзина</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/components/UI/Button.vue';
defineEmits(['toggleCatalog']);
</script>

<style scoped lang="scss">
.header-main {
    width: $width-container;
    margin: 0 auto;

    &__container {
        display: flex;
        align-items: center;

        max-width: $width-container;
        width: 100%;
        height: 92px;
    }

    &__logo {
        width: 200px;
        margin-right: 43px;
    }

    &__catalog-btn {
        width: 145px;
        height: 45px;
        margin-right: 20px;
        font-size: 16px;

        &-icon::before {
            font-size: 25px;
            margin-right: 15px;
        }
    }

    &__search {
        position: relative;
        width: 345px;
        height: 45px;
        margin-right: 40px;

        &-input {
            width: 100%;
            height: 100%;
            padding: 0.5rem 2.5rem 0.5rem 1rem;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        &-icon {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);

            display: flex;
            align-items: center;
            justify-content: center;

            width: 60px;
            height: 45px;
            font-size: 25px;
            color: $calypso;
            background-color: $geyser;
            pointer-events: none;
        }
    }

    &__phones {
        display: flex;
        justify-content: space-between;
        width: 320px;
        height: 45px;
        margin-right: 40px;
    }

    &__phone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:not(:last-child) {
            padding-right: 10px;
            margin-right: 10px;
            border-right: 1px solid $granny-smith;
        }

        &-number {
            font-size: 16px;
        }

        &-descr {
            font-size: 14px;
            color: $granny-smith;
        }
    }

    &__links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 285px;
    }

    &__link {
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 76px;
        height: 52px;
        padding: 10px 5px;

        font-size: 14px;
        color: $text-color;
        text-decoration: none;

        background-color: $white;
        border-radius: 8px;

        transition: background-color 0.2s;

        &:hover {
            background-color: $geyser;
        }

        &-icon {
            font-size: 30px;
            margin-bottom: 5px;
        }

        &-text {
            text-align: center;
        }
    }
}
</style>
