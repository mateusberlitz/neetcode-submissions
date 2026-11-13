class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupedAnagrams = new Map<string, string[]>;

        for(const str of strs){
            const count = new Array<number>(26).fill(0);

            for(const char of str){
                const index = char.charCodeAt(0) - 97;

                count[index] += + 1;
            }

            const stringKey = count.join(",");

            const groupedSpot = groupedAnagrams.get(stringKey);

            if(groupedSpot){
                groupedSpot.push(str);

                groupedAnagrams[stringKey] = groupedSpot;
            }else{
                groupedAnagrams.set(stringKey, [str]);
            }
        }

        return Array.from(groupedAnagrams.values());
    }
}
