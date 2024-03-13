const calculateBonus = require("./3.1.1 script"); //вызываем тестовую функцию из другого файла. Относительный путь.

describe("calculateBonus function", () => {
  //decsribe - управление сьютами

  test("adds 20 + 10 to equal 30", () => {
    expect(calculateBonus(20, 10)).toBe(30); //expect - актуальный результат toBe - ожидаемый результат
  });

  test("adds 60 + 70 to equal 50", () => {
    expect(calculateBonus(60, 70)).toBe(50);
  });

  test("adds 35 + 20 to equal 35", () => {
    expect(calculateBonus(35, 20)).toBe(35);
  });
});
