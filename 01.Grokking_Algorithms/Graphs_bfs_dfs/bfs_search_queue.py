
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

find( graph, 'you' )

