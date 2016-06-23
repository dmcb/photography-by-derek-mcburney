jQuery.noConflict();

(function($) {

    function initMenu() {
        $('#menu select').on('change', function() {
            window.location.href = $(this).val();
        });
    }

    $(document).ready(function(){
        initMenu();
    });
}(jQuery));