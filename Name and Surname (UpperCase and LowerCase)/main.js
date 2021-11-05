let name = "КиРиЛЛ";
let surname = "петрОВ";

nameFirstLetter = name.substr(0, 1);
nameOtherLetters = name.substr(1);

surnameFirstLetter = surname.substr(0, 1);
surnameOtherLetters = surname.substr(1);

name = nameFirstLetter.toUpperCase() + nameOtherLetters.toLowerCase();
surname = surnameFirstLetter.toUpperCase() + surnameOtherLetters.toLowerCase();

console.log(name);
console.log(surname);
