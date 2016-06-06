
function initToggler() {
  $('#filter-tabs').on('click.toggler', 'li.visible.is-active a', function (event) {
    event.preventDefault();
    $('#hidden-close-all-tab a').click();
    return false;
  });
}

$(document).foundation();

$(document).ready(function() {
  if ($('#filter-tabs').length > 0) {
    initToggler();  
  } else {
    console.log('No filter tabs found.');
  }
});
