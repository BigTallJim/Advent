describe('UniversalOrbit', function(){
  it("has 1 orbit when B orbits COM", function(){
    let orbits = new UniversalOrbit();
    // console.log(orbits)
    expect(orbits.count('COM)B')).toEqual(1);
  });
});