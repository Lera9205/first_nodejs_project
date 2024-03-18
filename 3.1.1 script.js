// Код из предыдущего д.з. Расчет бонусов. Условия - если sum > 50? То бонус = 50, в противном случае, бонус = sum

const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  return bonus;
};
console.log(calculateBonus(20, 10));

module.exports = calculateBonus; // функция будет доступна вне этого файла.

//Для проверки покрытия тестами кода устанавливаю плагин. Он отобразился в package.json в devDependencies.
// Выполняю команду jest --coverage
