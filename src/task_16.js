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

// function compose() {
//   return [...arguments].reduce((previousFoo, currentFoo) => {
//     return function () {
//       return previousFoo(currentFoo.apply(this, arguments));
//     };
//   });
// }

function compose(...args) {
  return args.reduceRight((previous, current) => {
    return function (value) {
      return current(previous(value));
    };
  });
}

module.exports.compose = compose;
module.exports.multiply = multiply;
module.exports.plus = plus;
