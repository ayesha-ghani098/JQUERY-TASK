const button =
  '<button id="wishlist-btn" onClick="handleDisplay()"  class="btn btn-primary"type="button">Add to WishList</button>';

const backButton =
  '<button id="backbtn" onClick="goBack()"  class="btn btn-primary"type="button">Go Back</button>';

const section =
  '<div id="wishlist-section" class="col-sm-9 d-none">Add To Wishlist Section</div>';

$(document).ready(() => {
  $('#btn-container').append(button);
  $('#btn-container').append(backButton);

  //   another way
  //   $('#wishlist-btn').click(handleDisplay);
  //   $('#backbtn').click(goBack);

  $(section).insertAfter('#btn-container');
});

handleDisplay = () => {
  $('#wishlist-section').removeClass('d-none');
  $('#prev-section').addClass('d-none');
};
goBack = () => {
  $('#prev-section').removeClass('d-none');
  $('#wishlist-section').addClass('d-none');
};
