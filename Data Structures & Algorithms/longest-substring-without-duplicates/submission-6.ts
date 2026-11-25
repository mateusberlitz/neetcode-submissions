class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let substring = new Map<string, number>()
        let length = 0;

        for(let r = 0; r < s.length; r++){
            if(substring.has(s[r])){
                l = Math.max(l, substring.get(s[r])! + 1);
                substring[s[r]] = r;
            }

            substring.set(s[r], r);
            length = Math.max(length, r - l + 1);
        }

        return length;
    }
}

