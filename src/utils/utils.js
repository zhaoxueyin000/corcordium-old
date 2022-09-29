let utils={
	getQueryStringByName:(name)=>{
		let result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
		if (result == null || result.length < 1) {
			return "";
		}
		return decodeURIComponent(result[1]);
	},
	checkMobile:(string)=>{
		return (/^1[3-9]+\d{9}$/.test(string));
	},
	checkNumber:(string)=>{
		return (/^[0-9]*$/.test(string));
	},
	getMaxArray:(numArray)=>{
		return Math.max.apply(null, numArray);
	},
	getMinArray:(numArray)=>{return Math.min.apply(null,numArray);},

	convertCanvasToImage:(canvas)=>{
		let image = new Image();
		image.src = canvas.toDataURL('image/png');
		image.crossOrigin='Anonymous';
		return image;
	},
	randomNumArr:(n)=>{
		let temp = new Array();
        for (let i = 0; i < n; i++){
            temp.push(i);
        }
         function randomM(){
            if (Math.random() > .5){
                return 1;
            } else {
                return -1
            }
        }
        let returnArr = temp.slice();
        returnArr.sort(randomM);
        return returnArr;
	},
	isIphoneX:()=>{
      return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
	},
	getURL:(url,method)=>{
		let __url=url
        if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1){
          if(__url.indexOf("?")==-1){
            __url=__url+"?"+Math.random()*100000;
          }else{
             __url= __url+"&"+Math.random()*100000;
          }
        }
        switch(method){
            case "_blank":
                window.location.href=__url;
            break;
            case "_self":
                window.location.href=__url;
            break;
            case "_parent":
                parent.location.href=__url;
            break;
            case "_top":
                top.location.href=__url;
            break;
            default:window.location.href=__url;
        }
	},
	
}

export default utils