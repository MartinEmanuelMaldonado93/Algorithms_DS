function minStep( cost:number[] ) {
    cost.push(0);
    // console.log(cost );
    for (let i = cost.length-3 ; i>=0 ; i--) {
        let oneStep  = cost[i] + cost[i+1];
        let twoSteps = cost[i] + cost[i+2];

        cost[i] = Math.min( oneStep , twoSteps ); 
    }

    return Math.min( cost[0], cost[1] );
}

console.log( minStep( [10,15,20] ));