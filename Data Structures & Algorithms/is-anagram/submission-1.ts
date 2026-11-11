class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const characters = new Map<string, number>();

        if(s.length != t.length){
            return false;
        }

        for(let i = 0; i < s.length; i++){
            characters.set(s[i], (characters.get(s[i]) ?? 0) + 1);

            characters.set(t[i], (characters.get(t[i]) ?? 0) - 1);
        }

        for(const [key,value] of characters){
            if(value !== 0){
                return false;
            }
        }

        return true;
    }
}
