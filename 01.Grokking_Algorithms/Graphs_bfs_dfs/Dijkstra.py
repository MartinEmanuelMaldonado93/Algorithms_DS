# Hashtable of Start :
graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2
graph["a"] = {}
graph["a"]["fin"] = 1
graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5
graph["fin"] = {}
# Hashtable of costs :
infinity = 461651
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity
# Hashtable of parents:
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None
# Array of processed
processed = []

def runDijsktra( graph, costs ):
    node = findLowestCostNode( costs ) 
    while node: #is not empty
        cost = costs[node]
        neighbors = graph[node]
        for n in neighbors.keys():
            newCost = cost + neighbors[n]
            if costs[n] > newCost:
                costs[n] = newCost
                parents[n] = node
        processed.append(node)
        print(node)
        node = findLowestCostNode(costs)
     

def findLowestCostNode( costs ):
    lowestCost = 461651
    lowestCostNode = None
    for node in costs:
        cost = costs[node]
        if cost<lowestCost and node not in processed:
            lowestCost = cost
            lowestCostNode = node
    return lowestCostNode

runDijsktra( graph, costs )  

# 157 