const setCanvas = () => {
  var c = document.getElementById("myCanvas");

  var ctx = c.getContext("2d");
  var img = document.getElementById("theImg");
  ctx.drawImage(img, 0, 0);
  var imgData = ctx.getImageData(0, 0, '1500', '1500');
  console.log('imgData', imgData)
  
  // invert colors
  // var i;
  // for (i = 0; i < imgData.data.length; i += 4) {
  //   imgData.data[i] = 255 - imgData.data[i];
  //   imgData.data[i+1] = 255 - imgData.data[i+1];
  //   imgData.data[i+2] = 255 - imgData.data[i+2];
  //   imgData.data[i+3] = 255;
  // }
  ctx.putImageData(imgData, 0, 0);
  return 'hello'
};

// setCanvas()

export default setCanvas