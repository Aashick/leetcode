/*
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

topKFrequent(nums, k) {
    let count = new Map();

    // Step 1: Count frequencies of each number
    for (let n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
    }

    // Step 2: Create an array to hold numbers by frequency
    let buckets = [];
    count.forEach((value, key) => {
        if (!buckets[value]) {
            buckets[value] = [];
        }
        buckets[value].push(key);
    });

    // Step 3: Collect k most frequent elements
    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i]) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k);
}