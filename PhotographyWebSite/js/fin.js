// Alex -  - JS
'use strict';

$(document).ready(function() {

	function GetQueryString(name) {
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		let r = window.location.search.substr(1).match(reg);
		if (r!=null)
		return (r[2]);
		return null;
	}
	
	function ShowDetail(suid) {
		
		$("#mydetail").text(suid);
		$.ajax({
		  url: "json/pg.json",//json
		  type: "GET",//get
		  dataType: "json", //data
		  success: function(data) 
		  {
				if (suid>=1000){	//package
					let str="";
					
					$.each(data.package, function(i, item) {
						if (suid==item.uid){
							str= str+"<h3>"+" Package :" + item.name + "<br>Style：" +item.style+ "<br>Location: "+item.location+"<br><br>Include: <br>"+item.include+"<br><br>The Price is: $"+ item.price+"<br><br>";
						$("#mydetail").html(str);
						return true;
						}
					})	
					
					
				}
				else{		//custom
					let uSLID=suid.slice(0,2)+"0";
					
					let uPPID=suid.slice(2);
					let str="";
					let str1="";
					let str2="";
					let iPrice=0;

					
					$.each(data.custom, function(i, item) {
						if (uSLID==item.uid){
							str1="<h3>Style：" +item.style+ "<br>Location: "+item.location+"<br>";
							iPrice=parseInt(item.price);
  					    }
					})	
					
					$.each(data.album, function(i, item) {
						if (uPPID==item.uid){
							str2="<h3><br>Include: <br>"+item.include+"<br><br>";
							iPrice=parseInt(item.price)+parseInt(iPrice);
						}
					})
					
					str=str1+str2+"<br> Total Price: $"+iPrice+"<br><br>";
					
					$("#mydetail").html(str);
				}
				
				
		  }
		})
	}
	
	let uid= GetQueryString('uid');
	ShowDetail(uid);
	
	
	
	let clicker1 = $('#bsubmit');
	clicker1.on('click', clickHandler1);

	function clickHandler1() {
		SaveString(uid,"");
		window.location.href="./done.html";
	}

	//cancel
	let clicker2 = $('#bcancel');
	clicker2.on('click', clickHandler2);

	function clickHandler2() {
		window.location.href="./order.html";
	}

	function SaveString(uid,umemo) {
		
		let sfName=$("#txtFn").val();
		let slName=$("#txtLn").val();
		let sPhone=$("#txtPh").val();
		let sDate=$("#dpDate").val();
		

	
		let jsonData = {
			'fname': sfName, 
			'lname': slName,
			'phone': sPhone,
			'uid': uid,
			'udate': sDate,
			'umemo': umemo
			}; //JSON 
		
		let str_jsonData = JSON.stringify(jsonData);
		localStorage.setItem('localData', str_jsonData); // save
	}
	
});
  
