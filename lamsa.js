		

function mobileType()
{
	var type = 0;
var isiphone  =  navigator.userAgent.match(/iPhone/i) != null;
	
	if(isAndroidMobile){
		type = 1;        
	}
	return type;
}	
function mobileType2()
{
	var type = 0;
	//var isiphone  =  navigator.userAgent.match(/iPhone/i) != null;
	    var isAndroidMobile=navigator.userAgent.match(/(android)/i) !=null;
	if(isAndroidMobile){
		type = 1;        
	}
	return type;
}		

function CALLC2FUNCTION(fName)
{
	if(c2_callFunction)
		{
			c2_callFunction(fName);
		}
}


function LOADCOMPLETE()
{
	//Do everything to be done on load complete here
	console.log("Load completed");
		if(mobileType2()==0){
		try {
   webkit.messageHandlers.callback.postMessage("LoadComplete");
   } catch(err) {
    console.log('Can not reach native code');
  }
		}
}

function nexttime()
{
	console.log("next load");
	return "0.3";
}

function MODESELECT(mode)
{
	if(mode == 1)
	{
		console.log("Autoplay selected");
	}
	else if(mode == 2)
	{
		console.log("Interactive mode selected");
	}
	else
	{
		console.log("No mode select");
	}
}

var currentPageNo = 0;

function SETCURRENTPAGE(pageNo)
{
	currentPageNo = pageNo;
	console.log(currentPageNo);
	if(currentPageNo >= 3)
	{
		
				if(mobileType2()==0){
		try {
			
    window.webkit.messageHandlers.callback.postMessage("SamplePopUp");
  } catch(err) {
  }
}
	
}}

function STORYEND()
{
	//Do everything for end of story here
	console.log("End of story");
		if(mobileType2()==0){
		console.log("ios");
		try {
    window.webkit.messageHandlers.callback.postMessage("EndOfStory");
  } catch(err) {
    console.log('Can not reach native code');
  }
}}



	
	
