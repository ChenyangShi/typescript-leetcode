function lengthOfLongestSubstring(s: string): number {
    let res = 0
    const n = s.length
    if (n === 0)
        return res
    // 记录每个字符是否出现过
    let char_set = new Set()
    // 右指针
    let j = 0
    // 滑动窗口开始的下标
    for(let i = 0; i < n; i += 1) {
        // 跳出循环之后滑动: 左指针向右移动一格，移除一个字符
        if (i + 1 !== 0)
            char_set.delete(s.charAt(i - 1))
        // 循环移动右指针
        while (j + 1 <= n && !char_set.has(s.charAt(j))) {
            char_set.add(s.charAt(j))
            j += 1
        }
        res = Math.max(j - i, res)
    }
    return res
}