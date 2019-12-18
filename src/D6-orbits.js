function UniversalOrbit(orbits){
    orbitsMap = new Map();
    indirectCount = 0;
    this.createPlanetMap(orbits.split(","));
}

UniversalOrbit.prototype.count = function(){
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

UniversalOrbit.prototype.meToSanta = function(){
    youRoute = this.mapRouteBack("YOU");
    santaRoute = this.mapRouteBack("SAN");
    return this.checkRoutes(youRoute, santaRoute);
}   

UniversalOrbit.prototype.mapRouteBack = function(startPlanet){
    moreAnscestors = true;
    tempPlanet = startPlanet;
    orbitCount = 0;
    orbitChanges = new Map();
    while (moreAnscestors ){
        if (orbitsMap.has(tempPlanet)){
            tempPlanet = orbitsMap.get(tempPlanet);
            orbitChanges.set(tempPlanet, orbitCount);
            orbitCount++;
        }else{
            moreAnscestors = false
        }
    };
    return orbitChanges;
}

UniversalOrbit.prototype.checkRoutes = function(youRoute, santaRoute){
    console.log(youRoute)
    console.log(santaRoute)
    orbitJumps = 0;
    youRoute.forEach(function(count, planet){
        if (santaRoute.has(planet)){
            if (orbitJumps == 0){
                orbitJumps = count + santaRoute.get(planet)
            }
        }
    }) 
    return orbitJumps
}

