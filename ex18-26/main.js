// Что выведет код ниже?
// alert(null || 2 || undefined); // 2

// Что выведет код ниже?
// alert(alert(1) || 2 || alert(3)); // сначало 1, потом 2

// Что выведет код ниже?
// alert(1 && null && 2); // null

// Что выведет код ниже?
// alert(alert(1) && alert(2)); // сначала 1, потом undefined

// Что выведет код ниже?
// alert(null || (2 && 3) || 4); // 3

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
// if (age >= 14 && age <= 90);

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// if (!(age >= 14) && !(age <= 90));
// if (age < 14 || age > 90);

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
// if (-1 || 0) alert( 'first' ); // выполниться (-1)
// if (-1 && 0) alert( 'second' ); // не выполниться (0)
// if (null || -1 && 1) alert( 'third' ); // выполниться (1)

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//     Иначе – «Неверный пароль»,
//     При отмене – «Отменено».
// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.
let userAdmin = prompt('Введите ваш логин');
if (userAdmin && userAdmin == 'Админ') {
  let adminPass = prompt('Введите пароль');
  if (adminPass && adminPass == 'Я главный') {
    alert('Здравствуйте!');
  } else if (adminPass && adminPass != 'Я главный') {
    alert('Неверный пароль');
  } else if (adminPass == '' || adminPass == null) {
    alert('Отмена');
  }
} else if (userAdmin && userAdmin != 'Админ') {
  alert('Я вас не знаю');
} else if (!userAdmin) {
  // для тренировки попробовал, думаю в 46 строке код читабильнее, хотя...
  alert('Отмена');
}
