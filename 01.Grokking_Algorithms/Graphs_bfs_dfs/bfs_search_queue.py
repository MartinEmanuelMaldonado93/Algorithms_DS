
graph = {}
graph['you'] = ['alice', 'bob','claire']# start point
graph['bob'] = ['anuj','peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom','johnny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['johnny'] = []
 
def isMangoSeller( name ):
    return name[-1] == 'm'

def find( mygraph, key ):
    search_queue = mygraph[key] # pass an array...
    searched = {}
    while search_queue:
        person = search_queue.pop(0) 
        if not person in searched and isMangoSeller( person ):
            print( person + ' is a mango seller!')
            return True
        else: 
            searched[person] = True
            search_queue += mygraph[person]
    return False

#find( graph, 'you' )

words = {}
words["cab"]= ["car","cat"]
words["car"] = ["bar","cat"]
words["cat"] = ["mat","bat"]
words["bar"] = ["bat"]
words["mat"] = ["bat"]

def shortestPath(words,start,end):
    arr = words[start]
    #count = 0
    while graph:
        word = arr.pop(0)
        if word is not end:
            arr += words[word]
        else:
            return True
    return False

res = shortestPath(words,"cab","bat")
print(res)