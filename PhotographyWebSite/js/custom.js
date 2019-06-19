// Alex -  - JS
'use strict';

$(document).ready(function() {
	
	let uSLID=110;
	let uPPID=1;

	function ShowDetail() {
		$.ajax({
		  url: "json/pg.json",//json
		  type: "GET",//get
		  dataType: "json", //data
		  success: function(data) 
		  {
			$.each(data.custom, function(i, item) {
				if (uSLID==item.uid){
					let str="<h3>Style：" +item.style+ "<br>Location: "+item.location+"<br>The Price is: $"+ item.price+"<br>";
				$("#mySLdetail").html(str);
				}
			})	
			
			$.each(data.album, function(i, item) {
				if (uPPID==item.uid){
					let str= "<h3>Include: <br>"+item.include+"<br>The Price is: $"+ item.price+"<br>";
				$("#myPPdetail").html(str);
				}
			})
				
		  }
		})
	}
	
	ShowDetail();
	
	//SL Click
	let clickerSL1 = $('#btnSL1');
	clickerSL1.on('click', clickHandlerSL1);

	function clickHandlerSL1() {
		uSLID=110;
		ShowDetail();
	}
	let clickerSL2 = $('#btnSL2');
	clickerSL2.on('click', clickHandlerSL2);

	function clickHandlerSL2() {
		uSLID=120;
		ShowDetail();
	}
	
	let clickerSL3 = $('#btnSL3');
	clickerSL3.on('click', clickHandlerSL3);

	function clickHandlerSL3() {
		uSLID=130;
		ShowDetail();
	}
	
	//PPClick
	let clickerPP1 = $('#btnPP1');
	clickerPP1.on('click', clickHandlerPP1);

	function clickHandlerPP1() {
		uPPID=1;
		ShowDetail();
	}
	let clickerPP2 = $('#btnPP2');
	clickerPP2.on('click', clickHandlerPP2);

	function clickHandlerPP2() {
		uPPID=2;
		ShowDetail();
	}
	
	let clickerPP3 = $('#btnPP3');
	clickerPP3.on('click', clickHandlerPP3);

	function clickHandlerPP3() {
		uPPID=3;
		ShowDetail();
	}
	
	//Next
	let clickerNext = $('#btnNext');
	clickerNext.on('click', clickHandlerNext);

	function clickHandlerNext() {
		let fid=uSLID+uPPID;
		window.location.href="./fin.html?uid="+fid;
	}


		
});
  
