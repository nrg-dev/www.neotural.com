function loadEnquiry(){
	var url="http://localhost:8095/erp/loadEnquiry";
	$.ajax({
		dataType: "json",
		url: url,
		method: 'GET',
		success: function(json) {
			$('#enquiryview').empty();
			console.log(json);
			if(json.length == 0){
				alert('No Data for Information.');
			}else{
				for (var i = 0; i < json.length; i++) {
					tr = $('<tr class="w3-card-8">');
					tr.append('<td>' + json[i].name+ '</td>');
					tr.append('<td>' + json[i].phonenumber+ '</td>');
					tr.append('<td>' + json[i].email_ID+ '</td>');
					tr.append('<td>' + json[i].message+ '</td>');
					tr.append('<td>' + json[i].enquirytype+ '</td>');
					tr.append('<td>' + json[i].country+ '</td>');
					$("#enquiryview").append(tr);
				} 
			}
		}
	});
} 
