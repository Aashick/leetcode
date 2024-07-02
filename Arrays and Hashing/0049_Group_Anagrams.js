/*
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

// * Time O(n × klogk) | Space O(n × k)
var groupAnagrams = function (strs) {
  let result = new Map();

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");

    if (result.has(sortedStr)) result.get(sortedStr).push(str);
    else result.set(sortedStr, [str]);
  }

  return Array.from(result.values());
};

/*
// * Time O(n × k) | Space O(n × k)
 groupAnagrams(strs) {
        let ans = new Map();
        
        for (let s of strs) {
            let count = Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let key = count.join(',');
            if (!ans.has(key)) {
                ans.set(key, []);
            }
            ans.get(key).push(s);
        }
        
        return Array.from(ans.values());
    }
 */
