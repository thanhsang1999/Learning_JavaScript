/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readLineSync = require('readline-sync');
var fs = require('fs');
var listContact = [];
function loadData() {
    var strInput = fs.readFileSync('./data.json',{encoding:"UTF-8"});
    var objJson = JSON.parse(strInput);
    return  objJson;
}

function save() {
    var stringOut = JSON.stringify(listContact);
    fs.writeFileSync('./data.json',stringOut,{encoding:"UTF-8"});
}

function showListContact() {
    for (var item in listContact) {
        console.log(item+" "+"{ name:" +listContact[item].name+", phone:"+ listContact[item].phone+" }");
    }
}

function isExist (input1,input2) {
    var listResultExist = [];
    var tmp1 = input1.split("");
    var tmp2 = input2.split("");
    var tmpBoolean = false;
    for (var i = 0; i < tmp1.length; i++) {
        for (var j = 0; j < tmp2.length; j++) {
            if (tmp1[i]===tmp2[j]){
                tmpBoolean=true;
            }else{
                tmpBoolean =false;
            }
        }
    }
    if (tmpBoolean===true){
        return true;
    }else {
        return false;
    }
}

function showMenu() {
    var exit = false;
    while(!exit){
        console.log('Danh Bạ Điện Thoại - Telephone Directory');
        for (var item of listContact) {
            console.log(item)
        }
        console.log('1. Nhập dữ liệu contact (name, phone number)');
        console.log('2. Sửa dữ liệu contact');
        console.log('3. Xoá contact');
        console.log('4. Tìm kiếm contact');
        console.log('5. Exit And Save');
        var inputNumber = readLineSync.question('Input : =>');
        switch (inputNumber){
            case '1':
                console.log('Nhập dữ liệu contact (name, phone number)');
                var name = readLineSync.question('name: ');
                var phoneNumber = readLineSync.question('phone number: ');
                var contact = {
                    name:name,
                    phone:phoneNumber
                };
                listContact.push(contact);
                break;
            case '2':
                console.log('Sửa dữ liệu contact');
                showListContact();
                var input2 = parseInt(readLineSync.question('Nhập stt để sửa:'));
                console.log(listContact[input2]);
                var name = readLineSync.question('name: ');
                var phone = readLineSync.question('phone: ');
                listContact[input2].name=name;
                listContact[input2].phone=phone;
                break;
            case '3':
                console.log('Xóa contact');
                showListContact();
                var input3 = parseInt(readLineSync.question('Nhập stt để xóa:'));
                listContact.splice(input3,1);
                break;
            case '4':
                var input4 = readLineSync.question('Nhập tên để tìm kiếm:');
                for (var item of listContact) {
                    if (item.name===input4){
                        console.log(item);
                    }else if (isExist(item.phone,input4)){
                        console.log(item);
                    }
                }
                break;
            case '5':
                save();
                exit=true;
                console.log('Exit And Saved!');
                break;
            default:
                console.log('Error 404');
                break;
        }
    }
}

function Main() {
    listContact = loadData();
    showMenu();

}
Main();
// data.json [{"name":"sang1","phone":"312312"},{"name":"hoang","phone":"012321"},{"name":"khanh","phone":"213212321"},{"name":"quoc anh","phone":"4123423"}]
