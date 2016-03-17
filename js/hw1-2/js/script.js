function myPow() {
    var number = +prompt('Number:');

    var power = +prompt('Power:');
    if(number == 1 || power == 0){
        console.log(1);
        return 1;
    }

    if(number == -1){
        if(!(power % 2)){
            return 1;
        }else{
            return -1;
        }


    }

    var neg = false;
    if(power < 0){
        power = -1 * power;
        neg = true;
    }

    var result = 1;
    for (var i = 0; i < power; i++) {
        result = number * result;
    }

    if (neg) {
        return 1 / result;
    } else {
        return result;
    }

}
//------------------------------------
// Задание 1
console.log(myPow());


//------------------------------------
// Задание 2

var massiv = [];
var masLen = 5;
var i = 0;
var str = '';
do{
    str = prompt('Input name №' + (i + 1));
    if(str != '' && str != null ){
        massiv.push(str);
        i++;
    }
}while (i < masLen)
currName = prompt('Input Login:');

var success = false;
for(i = 0; i < masLen; i++){
    if(massiv[i] === currName){
        success = true;
        break;
    }
}
if(success){
    alert(currName + ', вы успешно вошли.');
} else {
    alert('Вход невозможен.');
}



