function numIslands(grid: string[][]): number {
    let res = 0
// 主循环：遍历整个矩阵，当遇到 grid[i][j] == '1' 时，从此点开始做深度优先搜索 dfs，岛屿数 count + 1 且在深度优先搜索中删除此岛屿
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                res += 1
            }
        }
    }
    return res
};

// 深度优先遍历DFS
function dfs(grid: string[][], i: number, j: number) {
    // 终止条件
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0')
    return
    // 搜索岛屿的同时，执行 grid[i][j] = '0'，即将岛屿所有节点删除，以免之后重复搜索相同岛屿
    grid[i][j] = '0'

    // 访问四个方向
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)
}