var ready = () => {

    $('.tab').on('click', (e) => {
        var tabName = (e.currentTarget.attributes[0].nodeValue);
        removeActive();
      hideAll();
      console.log(tabName)
      $('#' + tabName).addClass('is-active');
      $('#' + tabName + '-content').removeClass('is-hidden');
    });

    var removeActive = () => {
      $('li').each(function() {
        $(this).removeClass('is-active');
      });
    }

    var hideAll = () => {
      $('#webdesign-webdevelopment-tab-content').addClass('is-hidden');
      $('#graphicdesign-tab-content').addClass('is-hidden');
      $('#gamedevelopment-tab-content').addClass('is-hidden');
      $('#daily-tab-content').addClass('is-hidden');
    }

}

$(document).ready(ready);
$(document).on("page:load", ready);
