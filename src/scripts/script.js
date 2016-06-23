jQuery.noConflict();

(function($) {

    function initLazy() {
        $('.lazy').show().lazy({
          effect: "fadeIn",
          effectTime: 500,
          threshold: 0
        });
    }

    function initMenu() {
        $('#menu select').on('change', function() {
            window.location.href = $(this).val();
        });
    }

    $(document).ready(function(){
        initLazy();
        initMenu();
    });
}(jQuery));