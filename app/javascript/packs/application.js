// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap/dist/js/bootstrap")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import DateTime from './datetime';
window.DateTime = DateTime;

document.addEventListener("DOMContentLoaded", function(){
  DateTime("#event_datetime", {
    locale: 'ru',
    position: 'right',
    stayOpen: true,
    timeHours: 0,
    timeMinutes: 0,
    weekStart: 1,
    dateStart: Date.now()
  });
  $('form#new_photo .btn').hide();

  $('form#new_photo').on('change','#photo_photo' , function(){
  	if ($('#photo_photo').val()) {
      $('form#new_photo .btn').show();
    };
  });
});

