class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let l = 0
        let r = cleanedString.length - 1;

        while(r > l){
            if(cleanedString[l] != cleanedString[r]){
                return false;
            }

            r--;
            l++
        }

        return true;
    }
}
