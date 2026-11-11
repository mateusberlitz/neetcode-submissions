class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const duplicates = new Set();

        for(let i = 0; i < nums.length; i++){
            if(duplicates.has(nums[i])){
               return true; 
            }

            duplicates.add(nums[i]);
        }

        return false;
    }
}
