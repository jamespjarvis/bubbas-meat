const slider = new Slideify({
  selector: '.slider',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true,
  onInit: () => {},
  onChange: () => {},
});

slider.createButtons('transparent');