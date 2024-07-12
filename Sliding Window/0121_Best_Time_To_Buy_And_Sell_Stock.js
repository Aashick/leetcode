/*
Example 1:
Input: prices = [10,1,5,6,7,1]
Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:
Input: prices = [10,8,7,5,2]
Output: 0
*/

// * Time O(n) | Space O(1)
class Solution {
  /**
   * @param {number} prices
   * @return {number}
   */
  maxProfit(prices) {
    let res = 0;
    let low = prices[0];

    for (let p of prices) {
      if (p < low) low = p;

      res = Math.max(res, p - low);
    }

    return res;
  }
}
