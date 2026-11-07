class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let prev = 1;
        let current = 1;

        for(let i = 2; i <= n; i++){
            const next = current + prev;
            prev = current;
            current = next;
        }

        return current;
    }
}
