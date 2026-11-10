class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const checkedNumbers = new Set<number>();

        for(let i = 0; i < nums.length; i++){
            if(checkedNumbers.has(nums[i])){
                return true;
            }

            checkedNumbers.add(nums[i]);
        }

        return false;
    }
}
