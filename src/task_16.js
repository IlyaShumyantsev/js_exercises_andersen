/**
 * Написать 3 функции
 * compose, plus, multiply так, чтобы использовать их следующим образом:
 * compose(plus(4), multiply(2))(2)
 * Функция выполняется справа на лево или снизу вверх
 *
 * После реализации запустить соответствующий тест!
 */

function multiply(firstArg) {
  function increase(secondArg) {
    if (secondArg) {
      return firstArg * secondArg;
    }
    return firstArg;
  }
  return increase;
}

function plus(firstArg) {
  function add(secondArg) {
    if (secondArg) {
      return firstArg + secondArg;
    }
    return firstArg;
  }
  return add;
}

function compose(firstFoo, secondFoo) {
  return function (value) {
    return firstFoo(secondFoo(value));
  };
}

module.exports.compose = compose;
module.exports.multiply = multiply;
module.exports.plus = plus;
