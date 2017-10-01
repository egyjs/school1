moment.locale('ar'); // 'fr'
$(function(){
  setInterval(function(){
    var timenow = moment().format("dddd YYYY | h:mm a");
    $('#Tnow').text(timenow);
  },500 );
});