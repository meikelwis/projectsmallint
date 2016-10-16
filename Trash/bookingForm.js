/*jslint browser: true*/
/*global $,jQuery*/
jQuery(document).ready(function () {
    "use strict";
    jQuery('.tabs .tabs-link a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');
        //Show / Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        //Change/Remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass();
        e.preventDefault();
    });
});