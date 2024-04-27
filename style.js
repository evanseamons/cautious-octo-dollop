const numBoxes = 16;
const initialColor = 40; 



for (let i = 0; i < numBoxes; i++) {
  const $box = $('<div class="box"></div>');
  $('.container').append($box);
}


$('.box').click(function() {
  $(this).toggleClass('dark-gray light-gray');
});