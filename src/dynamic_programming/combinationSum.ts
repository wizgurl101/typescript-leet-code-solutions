// https://leetcode.com/problems/combination-sum/

export function combinationSum(candidates: number[], target: number): number[][] {
    let result: number[][] = [];

    function dfs(pointer: number, currentList: number[], sumOfCurrentList:number) {
        if(sumOfCurrentList === target) {
            result.push([...currentList]);
            return
        }

        if (pointer >= candidates.length || sumOfCurrentList > target) return;

        currentList.push(candidates[pointer]);
        dfs(pointer, currentList, sumOfCurrentList + candidates[pointer]);
        currentList.pop();
        dfs(++pointer, currentList, sumOfCurrentList);
    }

    dfs(0, [], 0);
    return result;
}
