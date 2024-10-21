// =============================== Codeforce level 1 =================================
/**
 * Two sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   let map = new Map(); // to store the value and its index
   for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
         return [map.get(complement), i]; // found the pair
      }
      map.set(nums[i], i); // store the number and its index
   }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

function removeDuplicates(nums = []) {
   let tom = 0,
      jerry = 0;
   for (let i = 0; i < nums.length; ) {
      if (jerry == '_') return nums.filter((x) => x != '_').length;
      (tom = nums[i]), (jerry = nums[i + 1]);
      if (tom === jerry) {
         nums.splice(i, 1);
         nums.push('_');
      } else i++;
   }
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
   nums.sort();
   let i = nums.indexOf(val);
   for (i; i < nums.length; ) {
      if (nums[i] == val) {
         nums.splice(i, 1);
         i--;
      } else i++;
   }
   return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
[2, 2, 3, 3];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
   if (nums.includes(target)) '';
   else {
      nums.push(target), nums.sort();
      console.log(nums);
   }
   return nums.indexOf(target);
};

console.log(searchInsert([3, 5, 7, 9, 10], 8));

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
   let sum = '',
      i = 0;
   while (i < digits.length) {
      sum += digits[i];
      i++;
   }
   digits = (BigInt(sum) + 1n).toString().split('').map(Number);
   return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
   if (m == 0) (nums1.length = 0), nums1.push(...nums2);
   else {
      let i = 0;
      while (m < n + m) {
         nums1[m] = nums1[i];
         m++, i++;
      }
   }
   nums1.sort((a, b) => a - b);
};

console.log(merge([0], 0, [1], 1));

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
   let head = [[1], [1, 1], [1, 2, 1]];
   if (numRows == 1) return [[1]];
   if (numRows == 2) return [[1], [1, 1]];
   if (numRows == 3) return head;
   if (numRows > 3) {
      let i = head.length;
      while (i < numRows) {
         let curr = head[i - 1],
            arr = [];
         for (let j = 0; j < curr.length - 1; j++) {
            arr.push(curr[j] + curr[j + 1]);
         }
         arr.unshift(1), arr.push(1);
         head.push(arr);
         i++;
      }
      return head;
   }
};
console.log(generate(10));

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
   let maxProfit = 0;
   let buy = prices[0];
   for (let i = 0; i < prices.length; i++) {
      let sell = prices[i];
      if (sell > buy) {
         let profit = sell - buy,
            maxProfit = Math.max(profit, maxProfit);
      } else buy = sell;
   }
   return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
