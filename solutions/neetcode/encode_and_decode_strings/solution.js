class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let i = 0; i < strs.length; i++) {
            const sperator = `${strs[i].length}#`;
            result += sperator + strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        for (let i = 0; i < str.length; i++) {
            let j = i;
            while (j < str.length && str[j] !== "#") {
                j++;
            }
            let wordLength = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + wordLength);
            result.push(word);
            i = j + wordLength;
        }
        // for (let i = 0; i < str.length; ) {
        //     const j = str.indexOf("#", i);

        //     const wordLength = Number(str.slice(i, j));
        //     const word = str.slice(j + 1, j + 1 + wordLength);

        //     result.push(word);

        //     i = j + 1 + wordLength;
        // }
        return result;
    }
}
