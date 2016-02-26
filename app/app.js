var app = angular.module('dashboardApp',['ngRoute','ui.sortable','chart.js']);


app.config(function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('mainController', function ($scope, $rootScope, $http, $compile) {

// if is not a mobile device 

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {

  console.log("NOT mobile: activating draggable..");

  // angular.element(document.getElementById('mainController')).scope().makeDraggable();


  $scope.sortableOptions = {
    connectWith: ".draggable",
    handle: ".move, .portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all",
    cursor: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA3lBMVEUAAAAnk8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8J5sPN9AAAASXRSTlMAAQIDBAUGBwgODxESFBUZGxwfIywuMTQ2ODk7PD1AQ0dQVFVWWVxfYWNka21zdYOGjo+XmqWmq7Cyt7nAwcPI0dri6O3z9/n718TKMwAAALxJREFUGBl1wddWwkAARdEzKYJYKCo2jJSAvYuiqKCGCff/fwgWEBwf2JvVPD9s3zc2ouOQjPcgpfZ9LCnZLRpmbtU5sZuUPv2SpO8CkI+SAdwA5zAs5HpfsDWSelADahDBgXxeP4L1Lo6qQmwbLnFUFaIYznDsK0AxHOFoCX6u+a/bhytbxGXSDpg3W8axrQrgvaQV/tTlMWWexzssPfWZMY82IPN7wZyvQxbyili401KyRmavGc+d5lhhAtNfGTQkXlpjAAAAAElFTkSuQmCC'), pointer",
    cursorAt: { left : 200 },
    receive: function( event, ui ) {
      console.log(event);
      console.log(ui);
      var listaId=this.id;
      var cardId=ui.item[0].id;
      console.log("-->update verso colonna :"+listaId+"\n elemento id: "+cardId);
      reloadChart();
  //$scope.moveCard(cardId,listaId);
  },
  start: function( event, ui ) {
    $(".draggable").addClass("draggable_min_height");

    console.log('')
       // $(".draggable").addClass("showBordersMobile");
      // $("#showBorders").prop('checked', true);
      reloadChart();
    },
    stop: function( event, ui ) {
      $(".draggable").removeClass("draggable_min_height");
       // $(".draggable").removeClass("showBordersMobile");
       //  $("#showBorders").prop('checked', false);
       reloadChart();
     }
    /** OTHER CONTROLS ON START AND STOP DRAGGING
    start: function( event, ui ) {
      console.log(event.target);
      angular.element(this).addClass('dragging-element');
    },
    stop: function( event, ui ) {
      console.log(event.target);
       angular.element(this).removeClass('dragging-element');
     },***/
   };

  }else{
    $scope.sortableOptions = {
      disabled: true
    }
  }
});



function reloadChart(){
  $(window).trigger('resize');

  if (document.createEvent) { // W3C
    var ev = document.createEvent('Event');
    ev.initEvent('resize', true, true);
    //lancia evento
    window.dispatchEvent(ev);
  }
  else { // IE
    element=document.documentElement;
    var event=document.createEventObject();
    element.fireEvent("onresize",event);
  }
};


$(function() {
  // $( ".portlet" )
  // .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
  // .find( ".portlet-header" )
  // .addClass( "ui-widget-header ui-corner-all" )
  // .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  // $( ".portlet-toggle" ).click(function() {
  //   var icon = $( this );
  //   icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
  //   icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  // });

$(".borders").click(function () {
 $(".draggable").toggleClass("showBorders");
});
});

