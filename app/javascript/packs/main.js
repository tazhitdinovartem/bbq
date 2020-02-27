
document.addEventListener("DOMContentLoaded", function(){
    // Datetimepicker initialization
    DateTime("#event_datetime", {
      locale: 'ru',
      position: 'right',
      stayOpen: true,
      timeHours: 0,
      timeMinutes: 0,
      weekStart: 1,
      dateStart: Date.now()
    });
    
    // Hide and Show form for donwloading Photos
    $('form#new_photo .btn').hide();
  
    $('form#new_photo').on('change','#photo_photo' , function(){
        if ($('#photo_photo').val()) {
        $('form#new_photo .btn').show();
      };
    });

    // Lightbox initialization
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

    // lightSlider initialization
    $('.event-photos-gallery').lightSlider({
      autoWidth: true,
      enableDrag: false
    })
  });