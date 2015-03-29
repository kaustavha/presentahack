var Leap = require('leapjs'),
    open = require('open'),
    slideCount = 0,
    slidesUrlList = [
    'file:///media/Data/Dev/kaustavha.github.com/index.html',
    '1.html',
    'http://localhost:3000/#/store',
    'http://localhost:3000/#/developer',
    'https://www.google.ca/trends/explore#q=js%20tutorial&cmpt=q&tz='
    ];

var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "circle":
              console.log('circle');
              startPrez();
              break;
          case "keyTap":
              console.log("Key Tap Gesture");
              nextSlide();
              break;
          case "screenTap":
              prevSlide();
              break;
          case "swipe":
              console.log('swipe');
              break;
        }
    });
  }
});

increment = function() {
  slideCount++;
}
decrement = function() {
  slideCount--;
}

startPrez = function() {
  if (slideCount === 0) {
    open(slidesUrlList[slideCount], 'firefox');
    slideCount++;
  }
}

nextSlide = function() {
  open(slidesUrlList[slideCount], 'firefox', increment);
}

prevSlide = function() {
  open(slidesUrlList[slideCount], 'firefox', decrement);
}
