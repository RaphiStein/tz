// ALGORITHM: https://www.golantelecom.co.il/gui_lib/_common/validators.js?rev=10006416
function il_id($id_num){
		//: Convert to string, in case numeric input
		var id_num = String($id_num);
		
		//: Validate correct input
		if((id_num.length > 9) || (id_num.length < 5)){
			return {
				'valid': false,
				'reason': 'E_INVALID',
				'msg': 'M_BETWEEN_5_9_DIGITS_LONG'
			};
		}


		if(isNaN(id_num)){
			return {
				'valid': false,
				'reason': 'E_INVALID',
				'msg': 'M_ONLY_ACCEPTS_DIGITS'
			};
		}

		//If the input length is less than 9 and bigger than 5 add leading 0's
		//id_num = str_pa(d$id_num, 9, "0", STR_PAD_LEFT);
		var pad = '0000';
		id_num = pad.substring(0, 9-id_num.length) + id_num;
		
		
		var counter = 0, incNum;
		//: Validate the ID number
		for(var i=0; i < 9; i++)
		{
			incNum = Number(id_num.charAt(i));
			incNum *= (i%2)+1;
			if (incNum > 9)
				incNum -= 9;
			counter += incNum;
		}
		if(counter%10 == 0){
			return {
				'valid': true
			};
		}
		else{
			return {
				'valid': false,
				'reason': 'E_INVALID',
				'msg': 'M_INVALID_ID_NUM'
			};
		}
	}

	function tz_submit(){
		var tz = document.getElementById('tz').value;
		console.log("tz", tz);

		if (il_id(tz).valid) {
			document.getElementById('result').innerHTML = ''+ 
			'<div class="xs-12">' + 
			'<p>' + tz + ' is ' + '<span id="isValid" class="report">IS VALID</span></p></div>';
		}
		else {
			document.getElementById('result').innerHTML = '' + 
			'<div class="xs-12">' + 
			'<p>' + tz + ' is ' + '<span id="isNotValid" class="report">IS NOT VALID</span></p></div>';		
		}


	// prevent page redirection
	return false;
}


