window.onload=getCurrentPosition;
function getCurrentPosition() {
  if (window.navigator.geolocation) {
    var options = {
      enableHighAccuracy: true,
    };
    window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }else {
    log("浏览器不支持html5来获取地理位置信息");
  }
}

function handleSuccess(position) {
  var lng = position.coords.longitude;
  var lat = position.coords.latitude;
  var ggPoint = new BMap.Point(lng, lat);
  var bm = new BMap.Map();
  translateCallback = function (data) {
    if (data.status === 0) {
      var marker = new BMap.Marker(data.points[0]);
      var myGeo = new BMap.Geocoder();
      var baiduPoint = new BMap.Point(data.points[0].lng, data.points[0].lat);
      myGeo.getLocation(baiduPoint, getCityByCoordinate);
    }
  }
  setTimeout(function () {
    var convertor = new BMap.Convertor();
    var pointArr = [];
    pointArr.push(ggPoint);
    convertor.translate(pointArr, 3, 5, translateCallback)
  }, 2000);
}
function getCityByCoordinate(result) {
  var gpsAadress=result.addressComponents;
  var city=gpsAadress.city;
  getWeatherDatas(city);
  return city;
}
function handleError() {
  log('地点定位出错');
}
