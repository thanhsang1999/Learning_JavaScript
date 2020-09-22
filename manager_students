var readLineSync = require('readline-sync');
var js = require('fs');
// var listStudent = [];
// var student1 = {
//     name:'sang',
//     age:22,
// }
// listStudent.push(student1);
// var strJson = JSON.stringify(listStudent);
// js.writeFileSync('./data.json',strJson);
// console.log(objJson[0].name);

// var strOut = js.readFileSync('./data.json',{encoding:"UTF-8"});
// var objJson = JSON.parse(strOut);
// for (var item of objJson) {
//     console.log(item);
// }
var exit = false;
var strOut
var strJson;
var listStudent = [];




function main(){
    loadData();
    while(!exit){
        showMenu();
        var input1 =readLineSync.question('Please Input Number: ');
        switch (input1){
            case '1':
                showStudent();
                break;
            case '2':
                createNewStudent();
                break;
            case '3':
                saveAndExit();
                break;
            default:
                console.log('Error 404');
        }
    }
}
function showMenu() {
    console.log(
        '1. Show All Students\n' +
        '2. Create a new Student\n' +
        '3. Save and Exit'
    )
}
function loadData() {
    listStudent = JSON.parse(js.readFileSync('./data.json',{encoding:"UTF-8"}));
}
function showStudent() {
    console.log('Danh Sách Sinh Viên');
    for (var item of listStudent) {
        console.log(item);
    }
}
function createNewStudent() {
    console.log('Input New Student');
    var nameIn = readLineSync.question('Name Student: ');
    var ageIn = parseInt(readLineSync.question('Age Student: '));
    var student = {
        name:nameIn,
        age:ageIn,
    }
    listStudent.push(student);
}

function saveAndExit() {
    console.log('saving ....');
    js.writeFileSync('./data.json',JSON.stringify(listStudent));
    console.log('saved!')
    exit=true;
}
main();
