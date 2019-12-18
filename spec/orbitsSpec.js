describe('UniversalOrbit', function(){
  it("has 1 orbit when B orbits COM", function(){
    let orbits = new UniversalOrbit();
    expect(orbits.count('COM)B')).toEqual(1);
  });

  it("has 2 orbit when B orbits COM and C Orbits B", function(){
    let orbits = new UniversalOrbit();
    expect(orbits.count('COM)B B)C')).toEqual(3);
  });

  // it("has 3 orbit when B orbits COM and C Orbits B and D Orbits C", function(){
  //   let orbits = new UniversalOrbit();
  //   expect(orbits.count('COM)B B)C C)D')).toEqual(6);
  // });
});