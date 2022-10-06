$(document).ready(function () {
  var currentFloor = 2; // перемененная, где хванится текущий этаж
  var floorPath = $(".home-image path") // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up")
  var counterDown = $(".counter-down")

// функция при наведении мышкой на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
   currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
   $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });
  counterUp.on("click", function(){ // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа
    currentFloor++;
    usCurrentFloor= currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажем, чтобы было 01, а не 1
    $(".counter").text(usCurrentFloor); 
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    };
  });
  
  counterDown.on("click", function () {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor= currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    };
  });
});