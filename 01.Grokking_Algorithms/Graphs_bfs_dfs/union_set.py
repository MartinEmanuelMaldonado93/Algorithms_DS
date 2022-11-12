stations = {}
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or ", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])

final_stations = set()
best_station = None
states_covered = set()
covered = set()
states_needed = True

while states_needed:
    best_station = None
    states_covered = set()
    for station, states in stations.items():
        covered = states_needed & states
    if len(covered) > len(states_covered):
        best_station = station
        states_covered = covered
        
states_needed -= states_covered
final_stations.add(best_station)
