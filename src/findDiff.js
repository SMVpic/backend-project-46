import { parseFunc } from './parse-data.js'
import _ from 'lodash'

export const gendiff = (filepath1, filepath2) => {
// Собираю ключи обьектов
  const objOfFile1 = parseFunc(filepath1)
  const objOfFile2 = parseFunc(filepath2)

  // Объединяю два массива в один с уникальными ключами
  let keysOfFiles = _.sortBy(_.union(Object.keys(objOfFile1), Object.keys(objOfFile2)))

  // Оставляю только уникальные
  const uniqKeys = keysOfFiles.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc
    }
    return [...acc, item]
  }, [])

  // проверяю наличие ключа у файла 1 и файла 2, если совпадают тогда проверяю их значения, если нет, то вывожу отдельно
  const result = uniqKeys.map((key) => {
    if (Object.hasOwn(objOfFile1, key) && Object.hasOwn(objOfFile2, key)) {
      return objOfFile1[key] === objOfFile2[key] ? `  ${key}: ${objOfFile1[key]}` : `- ${key}: ${objOfFile1[key]}\n+ ${key}: ${objOfFile2[key]}`
    }
    else if (Object.hasOwn(objOfFile1, key)) {
      return `- ${key}: ${objOfFile1[key]}`
    }
    else {
      return `+ ${key}: ${objOfFile2[key]}`
    }
  })
  const diff = `{\n${result.join('\n')}\n}`
  return diff
}
