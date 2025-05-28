<template>
    <div class="topbar">
        <div class="topbar__container">
            <div class="topbar__left">
                <div class="topbar__city">Тула</div>
                <div class="topbar__links">
                    <ul class="topbar__links-list">
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Доставка и оплата
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Гарантия
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Возврат
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Отзывы
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Установка
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Дизайнерам
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Бренды
                            </a>
                        </li>
                        <li class="topbar__links-item">
                            <a class="topbar__link" href="#" target="_blank">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="topbar__right">
                <div class="topbar__auth">Войти</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.topbar {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    color: $text-color;
    background-color: $geyser;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &__container {
        max-width: 1440px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            gap: 1rem;
            list-style: none;
            padding: 0;
            margin: 0;
        }
    }

    &__link {
        color: $text-color;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
