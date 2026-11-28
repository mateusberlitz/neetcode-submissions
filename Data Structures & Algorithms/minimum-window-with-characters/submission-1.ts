class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let targetMap = new Map<string, number>();
        let progressMap = new Map<string, number>();
        let l = 0;
        let r = 0;
        let bestStart = 0;
        let bestLength = Infinity;

        for(let char of t){
            targetMap.set(char, (targetMap.get(char) ?? 0) + 1);
        }

        let need = targetMap.size;
        let have = 0

        const addTargetCount = (char:string) => {
            progressMap.set(char, (progressMap.get(char) ?? 0) + 1);

            if(targetMap.has(char)){
                if(progressMap.get(char) === targetMap.get(char)){
                    have += 1;
                } 
            }
        }

        const removeTargetCount = (char:string) => {
            progressMap.set(char, progressMap.get(char) === 0 ? 0 : progressMap.get(char) - 1);

            if(targetMap.has(char)){
                if(progressMap.get(char) < targetMap.get(char)){
                    have -= 1;
                } 
            }
        }

        let currentLength = 0;

        while(r < s.length){
            addTargetCount(s[r]);

            while(have === need){
                currentLength = r - l + 1;

                if (currentLength < bestLength) {
                    bestStart = l;
                    bestLength = currentLength;
                }

                removeTargetCount(s[l]);

                l++;
            }

                r++;
        }

        return bestLength !== Infinity ? s.slice(bestStart, bestStart + bestLength) : "";
    }
}
