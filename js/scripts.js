var car1 = document.querySelector('#one .carousel');

var flkty = new Flickity( car1, {
  cellSelector: '.cell',
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false
});


var gallery = document.querySelector('.gallerycontainer')
var msrny = new Masonry( gallery, {
	itemSelector: '.galleryitem'
});