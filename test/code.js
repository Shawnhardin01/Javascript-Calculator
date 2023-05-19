// // function calculateResult() {
// //   let firstNumber = parseFloat(numbers[0]);
// //   let secondNumber = parseFloat(numbers.slice(1).join(''));
// //   let result = parseFloat(numbers[0]);
// //   switch (operator) {
// //     case '+':
// //       result = firstNumber + secondNumber;
// //       console.log(result)
// //       break;
// //     case '-':
// //       result = firstNumber - secondNumber;
// //       break;
// //     case 'x':
// //       result = firstNumber * secondNumber;
// //       break;
// //     case '%':
// //       result = firstNumber / secondNumber;
// //       break;
// //     default:
// //       break;
// //       }
// //   return result;
// // }
// let numbers = [];
// let operator = null;
// let isFirstNumber = true;
//
// function updateResult() {
//     document.getElementById('result').textContent = numbers.join('');
// }
//
//
//
//
// // so what I need to make is a function that takes the first number and puts it in the first part of the problem then
// // the operator and then the second part and then the result
//
// function makeNumber() {
//     for (let i = 0; i <= 9; i++) {
//         document.getElementById("btn" + i).addEventListener('click', function() {
//             let buttonValue = this.value;
//             if (isFirstNumber) {
//                 numbers.push(buttonValue);
//             } else {
//                 numbers = [buttonValue];
//                 isFirstNumber = true;
//             }
//             updateResult();
//         });
//         console.log()
//     }
//
//     // document.getElementById("btn+").addEventListener('click', function() {
//     //   if (!isFirstNumber) return;
//     //   operator = '+';
//     //   isFirstNumber = false;
//     // });
//     //
//     // document.getElementById("btn-").addEventListener('click', function() {
//     //   if (!isFirstNumber) return;
//     //   operator = '-';
//     //   isFirstNumber = false;
//     // });
//     //
//     // document.getElementById("btnx").addEventListener('click', function() {
//     //   if (!isFirstNumber) return;
//     //   operator = 'x';
//     //   isFirstNumber = false;
//     // });
//     //
//     // document.getElementById("btn%").addEventListener('click', function() {
//     //   if (!isFirstNumber) return;
//     //   operator = '%';
//     //   isFirstNumber = false;
//     // });
//
// }
// makeNumber();
//
// document.getElementById("clear").addEventListener('click', function() {
//     numbers = [];
//     operator = null;
//     isFirstNumber = true;
//     updateResult();
// });
