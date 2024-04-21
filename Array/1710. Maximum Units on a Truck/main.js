/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 // Time: O(nlogn), 排序
 // Spze: O(1), 只有紀錄大小
 var maximumUnits = function(boxTypes, truckSize) {
  // 看解答, 但應該比我的 bucket sort 時間複雜度高

  const sortedBoxTypes = boxTypes.slice().sort((a, b) => a[1] > b[1] ? -1 : 1)

  let totalNumber = 0
  let targetSize = truckSize

  for (let [numberOfBoxes, numberOfUnitsPerBox] of sortedBoxTypes) {
      if (targetSize === 0) return totalNumber
      const currentNumberOfBoxes = targetSize >= numberOfBoxes ? numberOfBoxes : targetSize
      totalNumber = totalNumber + numberOfUnitsPerBox * currentNumberOfBoxes
      targetSize = targetSize - currentNumberOfBoxes
  }

  return totalNumber
};


// /**
//  * @param {number[][]} boxTypes
//  * @param {number} truckSize
//  * @return {number}
//  */
//  // Time: O(1), 因為固定是 1000 以下
//  // Spze: O(k), k 個 numberOfUnitsPerBox
// var maximumUnits = function(boxTypes, truckSize) {
//     // 我們可以藉由 HashTable 來紀錄箱子可存放單位(key)與箱子數量(value)
//     // 透過 loop boxTyoes 存放這些紀錄，相同的則箱子數量加一
//     // 透過 sort 排序由大到小, 因為有限定長度 1000 ，可以用 bucket sort, 可以讓時間複雜度更低
//     // 跑一遍 buckets 依序相加，直到達到 truckSize 的閥值
//     const boxMap = new Map()

//     boxTypes.forEach(([numberOfBoxes, numberOfUnitsPerBox]) => {
//         const currentNumberOfBoxes = boxMap.has(numberOfUnitsPerBox) ? boxMap.get(numberOfUnitsPerBox) + numberOfBoxes : numberOfBoxes
//         boxMap.set(numberOfUnitsPerBox, currentNumberOfBoxes)
//     })

//     const buckets = Array(1001).fill(0)
//     Array.from(boxMap).forEach(([numberOfUnitsPerBox, numberOfBoxes]) => {
//         buckets[numberOfUnitsPerBox] = buckets[numberOfUnitsPerBox] + numberOfBoxes
//     })

//     let totalNumber = 0
//     let targetSize = truckSize

//     for (let numberOfUnitsPerBox = 1000; numberOfUnitsPerBox >= 0; numberOfUnitsPerBox--) {
//         const numberOfBoxes = buckets[numberOfUnitsPerBox]
//         if (numberOfBoxes === 0) continue
//         if (targetSize === 0) return totalNumber
      
      
//         const currentNumberOfBoxes = targetSize >= numberOfBoxes ? numberOfBoxes : targetSize
//         totalNumber = totalNumber + numberOfUnitsPerBox * currentNumberOfBoxes
//         targetSize = targetSize - currentNumberOfBoxes
//     }

//     return totalNumber
// };



// /**
//  * @param {number[][]} boxTypes
//  * @param {number} truckSize
//  * @return {number}
//  */
// Time: O(nlogn), 用了排序
// Spze: O(k), k 個 numberOfUnitsPerBox
// var maximumUnits = function(boxTypes, truckSize) {
//     // 我們可以藉由 HashTable 來紀錄箱子可存放單位(key)與箱子數量(value)
//     // 透過 loop boxTyoes 存放這些紀錄，相同的則箱子數量加一
//     // 透過 sort 排序由大到小
//     // 跑一遍 sort list 依序相加，直到達到 truckSize 的閥值
//     const boxMap = new Map()

//     boxTypes.forEach(([numberOfBoxes, numberOfUnitsPerBox]) => {
//         const currentNumberOfBoxes = boxMap.has(numberOfUnitsPerBox) ? boxMap.get(numberOfUnitsPerBox) + numberOfBoxes : numberOfBoxes
//         boxMap.set(numberOfUnitsPerBox, currentNumberOfBoxes)
//     })

//     const sortedList = Array.from(boxMap).sort((a, b) => a[0] > b[0] ? -1 : 1)

//     let totalNumber = 0
//     let targetSize = truckSize

//     for (let [numberOfUnitsPerBox, numberOfBoxes] of sortedList) {
//         if (targetSize === 0) return totalNumber
//         const currentNumberOfBoxes = targetSize >= numberOfBoxes ? numberOfBoxes : targetSize
//         totalNumber = totalNumber + numberOfUnitsPerBox * currentNumberOfBoxes
//         targetSize = targetSize - currentNumberOfBoxes
//     }

//     return totalNumber
// };