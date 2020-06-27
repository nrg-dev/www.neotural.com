$(document).ready(function(){
    alert("loadEnq");
	$('#enqviewtable ul').empty();
	var urll ="http://localhost:8095/erp/loadEnquiry";
	$.ajax({
        dataType: "json",
        url: url,
        cache: false,
        method: 'GET',
        success: function(json) {
			if(json.length>0){
				$('#mydiv').show();  
				$('#nodata').hide();  
				for (var i = 0; i < json.length; i++) {
					ul = $('<ul/>');
					ul.append("<li>" + json[i].name + "</li>");
					ul.append("<li>" + json[i].phonenumber+ "</li>");
					ul.append("<li>" + json[i].email_ID + "</li>");
					ul.append("<li>" + json[i].message + "</li>");
					ul.append("<li>" + json[i].enquirytype + "</li>");
					ul.append("<li>" + json[i].country+ "</li>");
					$("#enqviewtable").append(ul);
				}
			}
			else
			{
				$('#nodata').show();  
				$('#mydiv').hide();  
			}
		}
	});
 });