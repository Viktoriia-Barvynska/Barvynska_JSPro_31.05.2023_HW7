//=================HW7==================
document.write('<br \/> ===============Вивести на сторінку в один рядок через кому числа від 10 до 20=====================<br \/>')

//Вивести на сторінку в один рядок через кому числа від 10 до 20

for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    document.write(` ${i},`);
  } else {
    document.write(i);
  }
}

//=========================================================================
document.write('<br \/> ===============Вивести квадрати чисел від 10 до 20===================== <br \/>')

//Вивести квадрати чисел від 10 до 20
for (let i = 10; i <= 20; i++) {
  let square = i * i;
  document.write(`${square}`);
}
//=========================================================================
document.write('<br \/> ===============Вивести таблицю множення на 7=====================')

//Вивести таблицю множення на 7 console.log(`${i} x ${j} = ${result}`);
document.write('<table>');
for (let i = 1; i <= 10; i++) {
  document.write('<tr>');
  document.write('<td>' + i + ' * 7 = ' + (i * 7) + '</td>');
  document.write('</tr>');
}
document.write('</table>');

//=========================================================================
document.write('<br \/> ===============Знайти суму всіх цілих чисел від 1 до 15=====================<br \/>')

//Знайти суму всіх цілих чисел від 1 до 15
let res = 0;
for (let i = 1; i <= 15; i++) {
  res += i;
}
document.write(` Сума всіх цілих чисел від 1 до 15: ${res}`);
//=========================================================================
document.write('<br \/> ===============Знайти добуток усіх цілих чисел від 15 до 35=====================<br \/>')

//Знайти добуток усіх цілих чисел від 15 до 35
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
document.write(`Добуток усіх цілих чисел від 15 до 35: ${product}`);

//=========================================================================
document.write('<br \/> ===============Знайти середнє арифметичне всіх цілих чисел від 1 до 500=====================<br \/> ')

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let result = 0;
const int = 500;

for (let i = 1; i <= int; i++) {
  result += i;
}
const average = result / int;

document.write(`Середнє арифметичне чисел від 1 до 500: ${average}`);


//=========================================================================
document.write('<br \/> ===============Вивести суму лише парних чисел у діапазоні від 30 до 80=====================<br \/> ')

//Вивести суму лише парних чисел у діапазоні від 30 до 80
let doubleNumbers = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    doubleNumbers += i;
  }
}

document.write(`Сума парних чисел у діапазоні від 30 до 80:  ${doubleNumbers}`);
//=========================================================================
document.write('<br \/> ===============Вивести всі числа в діапазоні від 100 до 200 кратні 3=====================<br \/> ')

//Вивести всі числа в діапазоні від 100 до 200 кратні 3
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    //console.log(i);
    document.write(`${i},`)
  }
}

//=========================================================================
document.write('<br \/> ===============Дано натуральне число. Знайти та вивести на сторінку всі його дільники.=====================<br \/> ')

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const naturalNumber = prompt('Введіть натуральне число:');
const integer = parseInt(naturalNumber); // Перетворюємо введене значення на ціле число
/*
        parseInt() перетворює рядок у число. Синтаксис - parseInt(value, radix);
        Параметри:
            value рядкове значення.
            radix - не обов'язковий параметр. Ціле число від 2 до 36, яке представляє систему числення для числа у зазначеній вище рядку. Для уникнення незрозумілостей при читанні коду і гарантії передбачуваного поведінки завжди визначайте цей параметр. Різні реалізації дадуть різні результати, якщо підстава системи числення не буде вказано.
*/
document.write("Дільники числа " + naturalNumber + ": ");
  for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
      console.log(`${i}`);
      document.write(`<br \/>${i}`)
      //console.log(i + " ");
    }
  }


//=========================================================================
document.write('<br \/> ===============Визначити кількість його парних дільників=====================<br \/> ')

//Визначити кількість його парних дільників

let count = 0;
  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0 && i % 2 === 0) {
      count++;
    }
  }
  //console.log(count)
document.write(`Кількість його парних дільників: ${count}`);

//=========================================================================
document.write('<br \/> ===============Знайти суму його парних дільників=====================<br \/>')

//Знайти суму його парних дільників

  let total = 0;
  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0 && i % 2 === 0) {
      total += i;
    }
  }
//console.log(total)

document.write(`Сума його парних дільників: ${total}`);

//=========================================================================
document.write('<br \/> ===============Надрукувати повну таблицю множення від 1 до 10=====================<br \/>')

//Надрукувати повну таблицю множення від 1 до 10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const result = i * j;
    //console.log(`${i} x ${j} = ${result}`);
 document.write(`<br \/>${i} x ${j} = ${result}<br \/>`);

  }
  document.write('<br \/>-----------<br \/>');
}
//=========================================================================

 