/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export function convertBytesToHuman(bytes) {
  if (bytes < 0 || !Number.isFinite(bytes)) {
    return false;
  }
  const unitsOfMeasurement = ["B", "KB", "MB", "GB"]; // максимальная единица измерегиня будет Гигабайт
  let size = bytes;
  let index = 0;
  while (size >= 1024 && index < unitsOfMeasurement.length - 1) {
    size /= 1024;
    index += 1;
  }
  if (Number.isInteger(size)) {
    return `${size} ${unitsOfMeasurement[index]}`;
  } else {
    return (
      `${size.toFixed(2)}`.replace(/\.?0+$/, "") +
      " " +
      `${unitsOfMeasurement[index]}`
    ); // убираем лишний 0 после запятой
  }
}

