# Инструкция по установке, настройке и запуска проекта и тестов.

1.	Клонировать репозиторий на свой локальный компьютер:
2.  Зайти в VS-CODE, и выбрать: File  New Window  «Clone Git repository»
3.  Создать файл с расширением js. Например: scriptLera.js, в котором будет храниться ваш код.

### Для того, чтобы установить себе библиотеку JEST, нужно: 
- выполнить команду в терминале VS:  **npm install --save-dev jest**

После установки, в проекте появятся новые файлы:
- Package.json
- Package-lock.json
- Node_modules

В файле package.json установите в объекте «script» - “test” : ”jest".

Создать файл, откуда будут запускаться юнит – тесты. В названии должно быть расширение **test .js** или **spes.js**. 

**Например:** unitTestLera.test.js


Для того, чтобы была взаимосвязь между файлом со скриптом и файлом с юнит тестами для этого скрипта, необходимо в файле со скриптом (scriptLera.js) выполнить:

**module.exports = calculateBonus;** -- функция будет доступна вне этого файла.
А в файле с юнит тестами для скрипта (unitTestLera.test.js) выполнить следующую команду:

**const calculateBonus = require("./3.1.1 script");** -- таким образом мы вызываем тестовую функцию из другого файла. При помощи символов: **./** указываем относительный путь.

### Чтобы запустить юнит тесты для вашего скрипта, нужно:
Выполнить команду в терминале VS CODE, в файле "package.jsone": **npx jest**
---------------------------------------------------------------------------------

# Описание работы измерения покрытия в проекте

 Чтобы покрытие кода по веткам и строкам составляло 100%, нужно убедиться что каждая ветка логики кода протестирована.
 
  То есть, на примере нашего кода обе ветки (оба условия: если `sum > 50` и если `sum <= 50`) должны быть протестированы.

Для возможности проверки покрытия тестами, нужно установить плагин.

**Команда для установки:** *npm install --save-dev babel-plugin-istanbul*

После установки он должен появиться в package.json в devDependencies.

Чтобы наглядно увидеть процент покрытия тестами кода, можно применить команду:

**npx jest --coverage**

Данная команда позволит увидеть какие части кода не полностью охвачены тестами. В этом случае можно дописать тесты, чтобы добиться 100% покрытия. 

 ## Отличие покрытия функций/веток (branches)/строк (lines)


**Покрытие функций** - измеряет процент выполненных функций в коде. Если функция вызывается хотя бы один раз из тестов, то она считается выполненной, ее покрытие 100%. Если функция не вызывается из тестов, ее покрытие будет неполным.

**Покрытие веток** - измеряет каждую ветку логики кода, % покрытия тестами. Если каждая ветвь логики вызывается хотя бы один раз, то покрытие веток равно 100%. Непротестированные ветви добавляются к неполному покрытию.

**Покрытие строк** - измеряет процент выполненных строк кода. Если строка кода выполнена хотя бы один раз из тестов, то ее покрытие = 100%. Если строка кода остается невыполненной, это уменьшает общее покрытие строк.


