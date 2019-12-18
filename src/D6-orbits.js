function UniversalOrbit(){
    orbitsMap = new Map();
    indirectCount = 0;
}

UniversalOrbit.prototype.count = function(orbits){
    console.log(orbits)
    this.createPlanetMap(orbits.split(","));
    console.log(orbitsMap);
    this.calculateIndirectOrbits();

    return orbitsMap.size + indirectCount;
}


UniversalOrbit.prototype.createPlanetMap = function(pairs){
    pairs.forEach(function(pair){
        orbitsMap.set(pair.split(')')[1], pair.split(')')[0]);
    });

}

UniversalOrbit.prototype.calculateIndirectOrbits = function(){
    orbitsMap.forEach(function(parent){
        tempParent = parent
        moreAnscestors = true
        while (moreAnscestors ){
            if (orbitsMap.has(tempParent)){
                indirectCount++;
                tempParent = orbitsMap.get(tempParent);
            }else{
                moreAnscestors = false
            }
        }
    });

}

