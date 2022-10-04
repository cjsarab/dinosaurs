const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDinosaur, 1)
}

// Park.prototype.findDinosaurWithMostVisitors = function(){
 
// }

Park.prototype.findAllDinosaursOfSpecies = function(species){
    allDinosaursOfSpecies = []
    for (currentDinosaur of this.dinosaurCollection) {
        if (dinosaur.species == species) {
            allDinosaursOfSpecies.push(dinosaur)
        }
    return allDinosaursOfSpecies
    }
};

Park.prototype.totalVisitors = function() {
    totalVisitors = 0;
    for (currentDinosaur of this.dinosaurCollection) {
        totalVisitors += this.dinosaurCollection.dinosaur.guestsAttractedPerDay
    }
    return this.totalVisitors
}



module.exports = Park;

