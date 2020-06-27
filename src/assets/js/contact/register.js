function register(){
	var phonevalidation =/^(\$|)([10-13]\d{0,2}(\,\d{3})*|([0-9]\d*))(\.\d{2})?$/;
	var mailvalidation=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	var name=$('#name').val();
	var phonenumber=$('#phonenumber').val();
	var email=$('#email').val();
	var msg=$('#msg').val();
	var enquirytype=$('#enquirytype').val();
	var country=$('#country').val();
	
	var nameflag = false;
	var emailflag=false;
	var typeflag=false;
	var phoneflag=false;
	
	if(name==""){
		$('#nameerror').html("Please Enter the Name");
		$("#name").css("border-color","red");
		nameflag=false;
	}else{
		$('#nameerror').html("");
		$("#name").css("border-color","");
		nameflag=true;
	}
	
	if(enquirytype==""){
		$('#enquiryerror').html("Please Choose Enquiry Type");
		$("#enquirytype").css("border-color","red");
		typeflag=false;
	}else{
		$('#enquiryerror').html("");
		$("#enquirytype").css("border-color","");
		typeflag=true;
	}	
	
	if(phonenumber==""){
		$('#phoneerror').html("Please Enter the Phone Number");
		$("#phonenumber").css("border-color","red");
		phoneflag=true;
	}else{
		if(phonenumber!=""){
			if(phonenumber.length >13){
				$('#phoneerror').html("Phone Number with in 13 digit Numbers");
				$("#phonenumber").css("border-color","red");
				phoneflag=false;
			}else{
				if(phonevalidation.test(phonenumber)){
					$('#phoneerror').html("");
					$("#phonenumber").css("border-color","");
					phoneflag=true;
				} else{
					$('#phoneerror').html("Please enter the Valid PhoneNumber");
					$("#phonenumber").css("border-color","red");
					phoneflag=false;
				}
			}
		}
	}
	
	if(email!="" ){
		if(mailvalidation.test(email)){
			$('#emailerror').html("");
			$("#email").css("border-color","");
			emailflag=true;
		}else{
			$('#emailerror').html("Please Enter Valid EmailID");
			$("#email").css("border-color","red");
			emailflag=false;
		}
	}else{
		$('#emailerror').html("Please Enter the EmailID");
		$("#email").css("border-color","red");
		emailflag=true;
	}
		
	var enquiryData = {
		"name" : name,
		"phonenumber" : phonenumber,
		"email" : email,
		"msg" : msg,
		"enquirytype" : enquirytype,
		"country" : country
	}
	var myData = JSON.stringify(enquiryData);
	var url="http://localhost:8095/erp/enquiry/saveEnquiry";

	$.ajax({
		type: "POST",
		contentType : 'application/json; charset=utf-8',
		dataType : 'json',
		url: url,
		data: myData,
		success: function(json) {
			$('.content_fullwidth').find("input[type=text],input[type=number], select,textarea ").val("");
			$('#nameerror').html("");
			$('#enquiryerror').html("");
			$('#phoneerror').html("");
			$('#emailerror').html("");
			alert("Thank You for giving enquiry.We will revert you wiithin 24 hours.");
		}
	});
	console.log("Called Successfully :::::::::::::::::::::::::::::");	
}

function login(){
	window.location.href = "contactLogin.html";
}

function cancel(){
	window.location.href = "contact.html";
}

function signUp(){
	var userstatus = false;
	var pwdstatus = false;
	var user=document.getElementById('username').value;
	var pass=document.getElementById('psw').value;
	if (user == null || user == "") {
		$('#usererr').html("Please Enter the User Name").css("color", "red");
	} else {
		$('#usererr').html("");
		$('#username').css("color", "green")
		userstatus = true;
	}
	
	if (pass == null || pass == "") {
		$('#pwderr').html("Please Enter the Password").css("color", "red");
	} else{
		$('#pwderr').html("");
		$('#psw').css("color", "green")
		pwdstatus = true;
	}
	
	if(user == "enquiryadmin" && pass == "rootadmin"){
		window.location.href = "contactView.html";
	}else{
		$('#usererr').html("Please Enter the Valid User Name").css("color", "red");
		$('#pwderr').html("Please Enter the Valid Password").css("color", "red");
	}
}

