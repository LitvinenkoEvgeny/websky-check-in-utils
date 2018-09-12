(function ($) {


    function ImageReplacer() {
        this.getApp(function (app) {

            this.app = app;
            this.init();

        }.bind(this));
    }


    ImageReplacer.prototype.getApp = function (callback) {
        var app = window.app;

        var interval = setInterval(function () {

            // if app has more than 2 keys,
            // promise resolved, use it !
            if (Object.keys(app).length > 2) {
                clearInterval(interval);
                callback(app);
            }

        }, 300);
    };

    ImageReplacer.prototype.init = function () {
        var self = this;

        this.externalStorageBaseUrl = app.siteParams('check-in.externalStorageBaseUrl');
        this.$openMealButton = $('[data-code="meal"] .popup_js');

        var popupInterval = setInterval(function () {

            if ($('.popup_selectFood').length) {
                self.replaceLinks();
            }

        }, 200);

    };

    ImageReplacer.prototype.replaceLinks = function () {
        var self = this;

        this.$mealMobileItemsImg = $('.img img', this.$mealMobileItems);
        this.$mealMobileItemsImg.each(function (index, item) {
            var $imageItem = $(item);
            var srcImageName = $imageItem.attr('src').split('/').slice(-1)[0];
            $imageItem.attr('src', self.externalStorageBaseUrl + '/img/content/meal/' + srcImageName);
        });
    };


    $('document').ready(function () {
        var iReplacer = new ImageReplacer();
    });

})($);