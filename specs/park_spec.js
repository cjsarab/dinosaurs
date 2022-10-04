const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurassic Park', 80000);
    dinosaur = new Dinosaur('T-Rex', 'Carnivore', 200);
    dinosaur2 = new Dinosaur('Diplodocus', 'Herbivore', 100)
  });

  it('should have a name', function() {
  const actual = park.name;
  assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 80000);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.findDinosaurWithMostVisitors();
    assert.deepEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
  park.addDinosaur(dinosaur);
  park.addDinosaur(dinosaur2);
  species = dinosaur.species;
  const actual = park.findAllDinosaursOfSpecies(species);
  assert.deepEqual(actual, dinosaur)
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitors();
    assert.deepEqual(actual, 300)
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitorsPerYear();
    assert.deepEqual(actual, 109500)
  });

  it('should be able to calculate total revenue for one year', function (){
    actual = park.totalRevenue();
    assert.deepEqual(actual, 8760000000)
  });

});
