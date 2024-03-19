class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdges(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    dfs(vertex, visited = new Set(), result = []) {
        visited.add(vertex);
        result.push(vertex);

        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited, result);
            }
        }

        return result;
    }

    bfs(vertex) {
        const queue = [vertex]
        const visited = new Set(queue)
        const result = []

        while (queue.length > 0) {
            const currenVertex = queue.shift();
            result.push(currenVertex);
            for (let neighbor of this.adjacencyList[currenVertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            }
        }

        return result;
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdges("A", "B")
// graph.addEdges("B", "C")

// graph.display()

// console.log(graph.hasEdges("A", "c"));

// // graph.removeEdge("B", "C")

// graph.removeVertex("B")
// graph.display()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");


graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "E");



graph.display();

console.log("DFS:", graph.dfs("A"));
console.log("BFS:", graph.bfs("A"));

