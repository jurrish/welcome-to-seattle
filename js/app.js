var userInputArray = [];
var neighborhoodArray = [];

function Neighborhood (name, identity) {
  this.name = name;
  this.characteristics = [];
  this.map = '';
  this.blurb = '';
  this.score = 0;
  this.identity = identity;
}

Neighborhood.prototype.addCharacteristic = function(characteristic, value) {
  var char = {
    characteristic: characteristic,
    value: value
  };
  this.characteristics.push(char);
};

Neighborhood.prototype.addMap = function(url) {
  this.map = url;
};

Neighborhood.prototype.addBlurb = function(blurb) {
  this.blurb = blurb;
};

var ballard = new Neighborhood ('Ballard', 'ballard');
ballard.addCharacteristic('nightLife', true);
ballard.addCharacteristic('transitAccess', false);
ballard.addCharacteristic('parks', false);
ballard.addCharacteristic('singleFamily', false);
ballard.addCharacteristic('rentApt', true);
ballard.addCharacteristic('walkability', true);
neighborhoodArray.push(ballard);

var fremont = new Neighborhood ('Fremont', 'fremont');
fremont.addCharacteristic('nightLife', true);
fremont.addCharacteristic('transitAccess', true);
fremont.addCharacteristic('parks', true);
fremont.addCharacteristic('singleFamily', false);
fremont.addCharacteristic('rentApt', true);
fremont.addCharacteristic('walkability', true);
neighborhoodArray.push(fremont);

var wedgwood = new Neighborhood ('wedgwood', 'wedgwood');
wedgwood.addCharacteristic('nightLife', false);
wedgwood.addCharacteristic('transitAccess', false);
wedgwood.addCharacteristic('parks', true);
wedgwood.addCharacteristic('singleFamily', true);
wedgwood.addCharacteristic('rentApt', false);
wedgwood.addCharacteristic('walkability', false);
neighborhoodArray.push(wedgwood);

var universityDistrict = new Neighborhood ('University District', 'universityDistrict');
universityDistrict.addCharacteristic('nightLife', true);
universityDistrict.addCharacteristic('transitAccess', true);
universityDistrict.addCharacteristic('parks', false);
universityDistrict.addCharacteristic('singleFamily', false);
universityDistrict.addCharacteristic('rentApt', true);
universityDistrict.addCharacteristic('walkability', true);
neighborhoodArray.push(universityDistrict);

var northgate = new Neighborhood ('Northgate', 'northgate');
northgate.addCharacteristic('nightLife', false);
northgate.addCharacteristic('transitAccess', true);
northgate.addCharacteristic('parks', false);
northgate.addCharacteristic('singleFamily', true);
northgate.addCharacteristic('rentApt', true);
northgate.addCharacteristic('walkability', false);
neighborhoodArray.push(northgate);

var magnolia = new Neighborhood ('Magnolia', 'magnolia');
magnolia.addCharacteristic('nightLife', false);
magnolia.addCharacteristic('transitAccess', false);
magnolia.addCharacteristic('parks', true);
magnolia.addCharacteristic('singleFamily', true);
magnolia.addCharacteristic('rentApt', false);
magnolia.addCharacteristic('walkability', false);
neighborhoodArray.push(magnolia);

var queenAnne = new Neighborhood ('Queen Anne', 'queenAnne');
queenAnne.addCharacteristic('nightLife', true);
queenAnne.addCharacteristic('transitAccess', true);
queenAnne.addCharacteristic('parks', false);
queenAnne.addCharacteristic('singleFamily', true);
queenAnne.addCharacteristic('rentApt', true);
queenAnne.addCharacteristic('walkability', true);
neighborhoodArray.push(queenAnne);

var southLakeUnion = new Neighborhood ('South Lake Union', 'southLakeUnion');
southLakeUnion.addCharacteristic('nightLife', false);
southLakeUnion.addCharacteristic('transitAccess', true);
southLakeUnion.addCharacteristic('parks', false);
southLakeUnion.addCharacteristic('singleFamily', false);
southLakeUnion.addCharacteristic('rentApt', true);
southLakeUnion.addCharacteristic('walkability', true);
neighborhoodArray.push(southLakeUnion);

var downtown = new Neighborhood ('Downtown', 'downtown');
downtown.addCharacteristic('nightLife', false);
downtown.addCharacteristic('transitAccess', true);
downtown.addCharacteristic('parks', false);
downtown.addCharacteristic('singleFamily', false);
downtown.addCharacteristic('rentApt', true);
downtown.addCharacteristic('walkability', true);
neighborhoodArray.push(downtown);

var capitolHill = new Neighborhood ('Capitol Hill', 'capitolHill');
capitolHill.addCharacteristic('nightLife', true);
capitolHill.addCharacteristic('transitAccess', true);
capitolHill.addCharacteristic('parks', true);
capitolHill.addCharacteristic('singleFamily', false);
capitolHill.addCharacteristic('rentApt', true);
capitolHill.addCharacteristic('walkability', true);
neighborhoodArray.push(capitolHill);

var centralDistrict = new Neighborhood ('Central District', 'centralDistrict');
centralDistrict.addCharacteristic('nightLife', false);
centralDistrict.addCharacteristic('transitAccess', true);
centralDistrict.addCharacteristic('parks', false);
centralDistrict.addCharacteristic('singleFamily', false);
centralDistrict.addCharacteristic('rentApt', true);
centralDistrict.addCharacteristic('walkability', false);
neighborhoodArray.push(centralDistrict);

var westSeattle = new Neighborhood ('West Seattle', 'westSeattle');
westSeattle.addCharacteristic('nightLife', false);
westSeattle.addCharacteristic('transitAccess', false);
westSeattle.addCharacteristic('parks', true);
westSeattle.addCharacteristic('singleFamily', true);
westSeattle.addCharacteristic('rentApt', false);
westSeattle.addCharacteristic('walkability', false);
neighborhoodArray.push(westSeattle);

var delridge = new Neighborhood ('Delridge', 'delridge');
delridge.addCharacteristic('nightLife', false);
delridge.addCharacteristic('transitAccess', false);
delridge.addCharacteristic('parks', false);
delridge.addCharacteristic('singleFamily', true);
delridge.addCharacteristic('rentApt', false);
delridge.addCharacteristic('walkability', false);
neighborhoodArray.push(delridge);

var georgetown = new Neighborhood ('Georgetown', 'georgetown');
georgetown.addCharacteristic('nightLife', true);
georgetown.addCharacteristic('transitAccess', false);
georgetown.addCharacteristic('parks', false);
georgetown.addCharacteristic('singleFamily', false);
georgetown.addCharacteristic('rentApt', true);
georgetown.addCharacteristic('walkability', false);
neighborhoodArray.push(georgetown);

var beaconHill = new Neighborhood ('Beacon Hill', 'beaconHill');
beaconHill.addCharacteristic('nightLife', false);
beaconHill.addCharacteristic('transitAccess', true);
beaconHill.addCharacteristic('parks', false);
beaconHill.addCharacteristic('singleFamily', true);
beaconHill.addCharacteristic('rentApt', true);
beaconHill.addCharacteristic('walkability', false);
neighborhoodArray.push(beaconHill);

var rainier = new Neighborhood ('Rainier-Seward Park', 'rainier');
rainier.addCharacteristic('nightLife', false);
rainier.addCharacteristic('transitAccess', true);
rainier.addCharacteristic('parks', true);
rainier.addCharacteristic('singleFamily', true);
rainier.addCharacteristic('rentApt', false);
rainier.addCharacteristic('walkability', false);
neighborhoodArray.push(rainier);

function createUserArray(characteristic, value){
  var userChar = {
    characteristic: characteristic,
    value: value
  };
  userInputArray.push(userChar);
}

function scoreAssignment(neighborhood){
  for (var i = 0; i < userInputArray.length; i++){
    if (destringify(userInputArray[i].value) === neighborhood.characteristics[i].value){
      neighborhood.score++;
    }
  }
}

function assignNeighborhoodScores(){
  for(var i = 0; i < neighborhoodArray.length; i++){
    scoreAssignment(neighborhoodArray[i]);
    console.log(neighborhoodArray[i]);
  }
}

function destringify(string){
  if(string === 'true'){
    string = true;
  }
  else if(string === 'false'){
    string = false;
  }
  return string;
}

function processUserAnswers(event){
  event.preventDefault();
  var nightLifeQuestion = event.target.nightlifequestion.value;
  console.log('nightlife: ', event.target.nightlifequestion.value);
  createUserArray('nightLife', nightLifeQuestion);
  var transitQuestion = event.target.transitquestion.value;
  console.log('transit: ', event.target.transitquestion.value);
  createUserArray('transitAccess', transitQuestion);
  var parksQuestion = event.target.parksquestion.value;
  console.log('parks: ', event.target.parksquestion.value);
  createUserArray('parks', parksQuestion);
  var singleFamilyHousingQuestion = event.target.singlefamilyhousingquestion.value;
  console.log('single family housing question: ', event.target.singlefamilyhousingquestion.value);
  createUserArray('singleFamily', singleFamilyHousingQuestion);
  var rentableAptQuestion = event.target.rentableaptquestion.value;
  console.log('rentable apartment question: ', event.target.rentableaptquestion.value);
  createUserArray('rentApt', rentableAptQuestion);
  var walkabilityQuestion = event.target.walkabilityquestion.value;
  console.log('walkability question: ', event.target.walkabilityquestion.value);
  createUserArray('walkability', walkabilityQuestion);
}

var getUserAnswers = document.getElementById('help-me-choose-form');
getUserAnswers.addEventListener('submit', processUserAnswers);
