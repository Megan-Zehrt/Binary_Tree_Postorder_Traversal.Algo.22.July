// 145. Binary Tree Postorder Traversal



// Given the root of a binary tree, return the postorder traversal of its nodes' values.









var postorderTraversal = function(root) {

    if(!root) return []

    let results = []

    function dfs(node){

        if(node == null){
            return
        }

        if(node != null){
            dfs(node.left)
            dfs(node.right)
            results.push(node.val)
        }
    }

    dfs(root)
    return results
    
};