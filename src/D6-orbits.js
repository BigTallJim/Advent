function UniversalOrbit(){
    orbitsMap = new Map();
    indirectCount = 0;
}

UniversalOrbit.prototype.count = function(orbits){
    let pairs = orbits.split(" ");

    this.createPlanetMap(pairs);
    this.calculateIndirectOrbits();

    return orbitsMap.size + indirectCount;
}


UniversalOrbit.prototype.createPlanetMap = function(pairs){
    pairs.forEach(function(pair){
        let parentPlanet = pair.split(')')[0];
        let  planet = pair.split(')')[1];
        orbitsMap.set(planet, parentPlanet);
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

