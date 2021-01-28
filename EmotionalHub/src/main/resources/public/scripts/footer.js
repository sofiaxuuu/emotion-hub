// Assign "active" class to navbar item based on current page URL with jQuery
$(document).ready(function() {
    // get current URL path and assign 'active' class
    var pathname = window.location.pathname;
    $('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
})