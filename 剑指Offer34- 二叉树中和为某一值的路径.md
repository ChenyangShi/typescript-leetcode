### 代码

```typescript
    function pathSum(root: TreeNode | null, sum: number): number[][] {
        const path: number[] = []
        const res: number[][] = []

        function recurr(root: TreeNode |  null, sum: number) {
            if (root === null)
                return []

            path.push(root.val)
            sum = sum - root.val

            // Find a path
            if (sum === 0 && root.left === null && root.right === null)
                res.push([...path])
            // 递归
            recurr(root.left, sum)
            recurr(root.right, sum)

            path.pop() // 回溯
        }

        recurr(root, sum)
        return res
    };
```