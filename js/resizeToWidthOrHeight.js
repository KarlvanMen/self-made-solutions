var setW = 1280;
var setH = 800;


var w = document.body.clientWidth;
var h = window.innerHeight;
var h2 = h*1.6;
if(h2 < w){
  if(h<800){
    var pageDIV = document.getElementById('pageDIV');
    if (!!pageDIV) {                    
      var scale = h / 800;
      var x = -(((1280 - w) / 2) / scale);
      x = parseInt(x);
      var y = -(((800 - 800 * scale) / 2) / scale);
      //y = parseInt(y);
      pageDIV.style.setProperty('transform', 'scale(' + scale + ') translate(' + x + 'px, ' + y + 'px)', null);
    }
  }
} else {
  if (w < 1280) {
    var pageDIV = document.getElementById('pageDIV');
    if (!!pageDIV) {
      var scale = w / 1280;
      pageDIV.style.left = 0;
      var x = -(((1280 - w) / 2) / scale);
      x = parseInt(x);
      var y = -(((800 - 800 * scale) / 2) / scale);
      y = parseInt(y);
      pageDIV.style.setProperty('transform', 'scale(' + scale + ') translate(' + x + 'px, ' + y + 'px)', null);
    }
  }
}
