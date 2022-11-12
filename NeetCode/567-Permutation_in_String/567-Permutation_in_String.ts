function pr(s1:string, s2:string) :boolean{
    if(s1.length > s2.length) return false;
 
    let sc1 = Array(26).fill(0);
    let sc2 = Array(26).fill(0);
    const len1 = s1.length, len2 = s2.length;
    for (let i = 0; i < len1 ; i++) {
        sc1[s1.charCodeAt(i) - 'a'.charCodeAt(0)] +=1;
        sc2[s2.charCodeAt(i) - 'a'.charCodeAt(0)] +=1; 
    }
    let matches = 0;
    for (let  i= 0;  i < 26 ; i++) 
        matches += sc1[i] == sc2[i] ? 1:0;

    let l=0;
    for(let i=len1; i<len2; i++){
        if(matches === 26) return true;

        let idx = s2[i].charCodeAt(0) -97;
        sc2[idx] +=1;
        if(sc1[idx] === sc2[idx])
            matches +=1;
        else if(sc1[idx]+1 === sc2[idx])
            matches -=1;

        idx = s2[l].charCodeAt(0)-97;
        sc2[idx] -=1;
        if(sc2[idx] === sc1[idx])
            matches +=1;
        else if(sc2[idx]-1 === sc1[idx])
            matches -=1;
        l++;
    }
    return matches === 26;
};

console.log(pr("adc", "dace"))// true
console.log(pr("adc", "dcda"))// true
console.log(pr("ab", "qqeebaoo"))// true