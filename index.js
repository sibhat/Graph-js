class Graph{
    constructor(){
        this.adjacentList = {};
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex])
            this.adjacentList[vertex] = [];
    }
    addEdges(v1,v2){
        if(!this.adjacentList[v1] || !this.adjacentList[v2])
            return false;
        this.adjacentList[v1].push(v2);
        this.adjacentList[v2].push(v1);
    }
    removeEdges(v1, v2){
        if(!this.adjacentList[v1] || !this.adjacentList[v2])
            return false;
         this.adjacentList[v1] = this.adjacentList[v1].filter(item => item !== v2);
         this.adjacentList[v2] = this.adjacentList[v2].filter(item => item !== v1);
    }
    removeVertex(vertex){
        if(!this.adjacentList[vertex]) return false;
        this.adjacentList[vertex].forEach(item => this.removeEdges(item, vertex));
        delete this.adjacentList[vertex];
    }

    depthFirstSearch(vertex, visited = {}, result = []){
        if (!vertex || !this.adjacentList[vertex]){
            return result;
        }
        result.push(vertex);
        visited[vertex] = true;
        this.adjacentList[vertex].forEach(child => {
            if(!visited[child]){
              console.log(this);
              this.depthFirstSearch(child, visited, result);
            }
        });
        return result;
    }
    depthFirstSearchLoop(start){
        let stack = [start];
        let visited = {};
        let result = [];
        visited[start] = true;
        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
              this.adjacentList[currentVertex].forEach(child => {
                  if(!visited[child]){
                    visited[child] = true;
                    stack.push(child);
          }});
        }
        return result;
    }
    breathFirstSearchLoop(start){
        let stack = [start];
        let visited = {};
        let result = [];
        let currentVertex;
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.shift();
              result.push(currentVertex);
              this.adjacentList[currentVertex].forEach(child => {
                if(!visited[child]){
                  visited[child] = true;
                  stack.push(child);
                }
              });
        }
        return result;
    }
    
}

