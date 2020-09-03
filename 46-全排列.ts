// tslint:disable
function permute(nums: number[]): number[][] {
    const res: number[][] = []
    const path: number[] = []
    dfs(nums, path, res)
    return res
};
function dfs(nums: number[], path: number[], res: number[][]): void {
    //判断是否到叶子节点，存下当前路径的所有值
    if (nums.length === path.length) {
        res.push([...path])
        return
    }
    for (let i = 0; i < nums.length; i++) {
        // 排除不合法的选择
        if (path.indexOf(nums[i]) !== -1)
            continue
        // 做选择
        path.push(nums[i])
        // 进入下一层决策树
        dfs(nums, path, res)
        // 取消选择
        path.pop()
    }
}