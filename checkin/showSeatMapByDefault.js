(function () {
    /*
    *
    * ##00234694
    *
    * показываем карту мест по умолчанию.
    * nordstar при помощи css открыли блок с картой мест, но
    * не прописали js, в итоге блок был открыт, но карты мест не было,
    * только легенда карты. Этот скрипт ждет пока пользователь зайдет
    * зайдет на страницу #checkin и вызовет .click() на кнопке
    *
     */
    var LOCATION = '#checkin';

    window.addEventListener('hashchange', function () {
        if (location.hash === LOCATION) {
            showSeatMap();
        }
    });

    window.addEventListener('DOMContentLoaded', function () {
        if (location.hash === LOCATION) {
            showSeatMap();
        }
    });

    function showSeatMap() {
        var interval = setInterval(function () {
            var $openSeatMapButton = $('.registration .btn-goto-segment');

            if ($openSeatMapButton.length) {
                clearInterval(interval);
                $openSeatMapButton.click();
            }

        }, 100);
    }

}());