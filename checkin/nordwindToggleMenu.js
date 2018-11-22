(function () {
    /*
    *
    *
    * Вешаем лиснер на класс js-menu-xcross
    * по клику классу .menu-xcross добавляем модификатор .menu-xcross_opened
    * классу .header-menu .header-menu_show
    * и классу .header .header_index_tofront
    *
    *
     */
    $(document).ready(function () {
        var $xCross = $('.js-menu-xcross'),
            $header = $('.header'),
            $headerMenu = $('.header-menu'),
            $submenuItems = $('.header-menu__heading', $headerMenu);

        $xCross.on('click', function () {
            // Меню раскрыто, скрываем
            $xCross.toggleClass('menu-xcross_opened');
            $header.toggleClass('header_index_tofront');
            $headerMenu.toggleClass('header-menu_show');
        });

        $submenuItems.on('click', function () {
            $(this).toggleClass('header-menu__heading_active');
        });
    });
})();