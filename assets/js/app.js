/**
 * Created by Dell on 08/04/2018.
 */
//require('../scss/app.scss');

var $ = require('jquery');

// JS is equivalent to the normal "bootstrap" package
// no need to set this to a variable, just require it
require('bootstrap-sass/assets/javascripts/bootstrap.min.js');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
    console.log('samia limem');
});