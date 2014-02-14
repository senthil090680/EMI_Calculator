//==================================
   function getCookie(name) {
      var prefix = name + "="
      var cookieStartIndex = document.cookie.indexOf(prefix)
      if (cookieStartIndex == -1) return null
      var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
      if (cookieEndIndex == -1)
	cookieEndIndex = document.cookie.length
      return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
   }
//===================================
  function openWin(url,w,h){open(url,"","width="+w+",height="+h+",directories=1,scrollbars=1,status=1,resizable=1");}
   function checkData(data, msg, reqLen){
	if((data.value == "") || (data.value.length < reqLen)) {
		alert('Please enter '+msg+' with atleast '+reqLen+' characters.');
		data.focus();
		return false;
	}
	return true;
   }
    function checkNum(theField, theMsg, minimumValue){
  	if(isNaN(theField.value)){
		alert("Please enter only numbers in "+theMsg+" .");
		theField.focus();
  		return false;
	}
	if(parseFloat(theField.value) <= minimumValue){
		alert("Please enter a value greater than "+minimumValue+" in "+theMsg+" .");
		theField.focus();
  		return false;
	}
    	return true;
    }
	function intOnly(i) {
		if(i.value.length>0) {
			i.value = i.value.replace(/[^\d]+/g, ''); 
		}
	}