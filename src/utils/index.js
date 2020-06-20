import { SUBJECTS } from './contants.js';

// 随机打乱数组
const shuffle = array => {
  if (!array.length) return []
  let count = array.length - 1
  while (count) {
      let index = Math.floor(Math.random() * (count + 1))
      ;[array[index], array[count]] = [array[count], array[index]]
      count--
  }
  return array
}

// 随机抽样
const sampling = (array, number) => {
  if (!array.length) return []
  let result = []
  let count = number
  let len = array.length
  while (count) {
   result.push(array.splice(Math.floor(Math.random() * len), 1))
   count--
  }
  return result
}

/**
 * @description 格式化全题数据
 * @param data 原始数据
 */
export function formatWhole (data = {}) {
  let result = []
  Object.keys(data).forEach(subject => {
    result = result.concat(data[subject].singles, data[subject].multiples)
  })
  result = shuffle(result)
  return result
}

/**
 * @description 格式化科目数据
 * @param data 原始数据
 * @param subjectId 科目ID
 */
export function formatSubject (data = {}, subjectId) {
  if (typeof data !== 'object') return {}
  let result = Object.values(data).find(subject => subject.id === subjectId) || {}
  return result
}

/**
 * @description 格式化模拟测验数据
 * @param data 原始数据
 */
export function formatTesting (data = {}) {
  let result = { singles: [], multiples: [] };
  Object.values(data).forEach(subject => {
    let subjectConfig = SUBJECTS.find(item => item.id === subject.id)
    let single = subjectConfig.single
    let multiple = subjectConfig.multiple
    result.singles.push(...sampling(subject.singles, single))
    result.multiples.push(...sampling(subject.multiples, multiple))
  })
  result.singles = shuffle(result.singles)
  result.multiples = shuffle(result.multiples)
  return result
}
