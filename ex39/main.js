// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
let x = prompt('Введите число');
let n = prompt('Введите степень числа');
function pow(x, n) {
  for (let i = 1; i < n; i++) {
    x *= x;
  }
  return x;
}
alert(pow(x, n));
