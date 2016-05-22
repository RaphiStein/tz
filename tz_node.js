var prompt = require('prompt');


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
			return true;
		}
		else{
			return {
				'valid': false,
				'reason': 'E_INVALID',
				'msg': 'M_INVALID_ID_NUM'
			};
		}
	}


//Program Start
prompt.start();

prompt.get(['TZ'], function(err, result){
	console.log("Teudat Zehut", result.TZ);
	var isValid = il_id(result.TZ);
	console.log(isValid);
})



