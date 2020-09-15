function mess(){
  var inputText = document.getElementById('entry').value;
  var tag = document.createElement('p');
  var text = document.createTextNode(inputText);
  tag.appendChild(text);
  tag.setAttribute('class','userMess');
  var box = document.getElementById('message');
  box.appendChild(tag);
  answer(inputText);
}
async function answer(inputText){
  var ans = "";
	var num = parseInt(inputText);
	var remainder, quitent, temp_num = num, sum = 0;
	for(var i = 0; i < inputText.length; i++){
		quitent = Math.floor(temp_num/10);
		remainder = temp_num%10;
		temp_num = quitent; 
		sum = sum + (remainder * remainder * remainder);
	}
	if(sum == num){
		ans = ("The number is armstrong!");
	}
	else{
		ans = ("the number is not armstrong");
	}
  var tag1 = document.createElement('p');
  var text1 = document.createTextNode(ans);
  tag1.appendChild(text1);
  tag1.setAttribute('class','botMess');
  var box1 = document.getElementById('message');
  box1.appendChild(tag1);
  document.getElementById('entry').value = "";
}