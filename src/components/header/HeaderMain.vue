<template>
    <div class="header-main">
        <div class="header-main__logo">
            <img
                src="@/assets/images/logo.png"
                alt="logo"
                class="header-main__logo-pic"
            />
        </div>
        <button
            class="header-main__catalog-button"
            @click.stop="$emit('toggleCatalog')"
        >
            Каталог
        </button>
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
                <div class="header-main__phone-number">8 (800) 100-44-53</div>
                <div class="header-main__phone-descr">Бесплатно по России</div>
            </div>
            <div class="header-main__phone">
                <div class="header-main__phone-number">+7 (495) 104-99-55</div>
                <div class="header-main__phone-descr">Бесплатная доставка</div>
            </div>
        </div>
        <div class="header-main__links">
            <a class="header-main__link" href="#">
                <i class="fas fa-chart-simple header-main__link-icon"></i>
                <span class="header-main__link-text">Сравнение</span>
            </a>
            <a class="header-main__link" href="#">
                <i class="fas fa-heart header-main__link-icon"></i>
                <span class="header-main__link-text">Нравится</span>
            </a>
            <a class="header-main__link" href="#">
                <i class="fas fa-shopping-cart header-main__link-icon"></i>
                <span class="header-main__link-text">Корзина</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineEmits(['toggleCatalog']);
</script>

<style scoped lang="scss">
.header-main {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &__search {
        position: relative;
        flex: 1;
        max-width: 400px;
        margin: 0 1rem;

        &-input {
            width: 100%;
            padding: 0.5rem 2.5rem 0.5rem 1rem;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 1rem;
        }

        &-icon {
            position: absolute;
            top: 50%;
            right: 0.75rem;
            transform: translateY(-50%);
            color: #888;
            pointer-events: none;
        }
    }

    &__phones {
        display: flex;
    }

    &__links {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    &__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        width: 64px;
        height: 64px;
        background-color: $white;
        color: $text-color;
        border-radius: 8px;
        text-decoration: none;
        font-size: 0.75rem;
        transition: background-color 0.2s;

        &:hover {
            background-color: $geyser;
        }

        &-icon {
            font-size: 1.2rem;
            margin-bottom: 0.25rem;
        }

        &-text {
            text-align: center;
        }
    }
}
</style>
