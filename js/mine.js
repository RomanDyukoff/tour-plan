const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: 'coverflow',
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});
 ymaps.ready(function () {
  var myMap = new ymaps.Map("YMapsID", {
    center: [7.838196, 98.298813],
    zoom: 10
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [7.838196, 98.298813]
    }
});
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myGeoObject);
});