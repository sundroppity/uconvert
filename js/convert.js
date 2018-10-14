//False is smaller, true is larger than the standard unit. The standard unit will always be listed first.
var areaUnits = [
    squareMeters = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    squareInch = {conversionFactor: 1550.003, smallerLarger: false, unitID: 2},
    squareFeet = {conversionFactor: 10.7639, smallerLarger: false, unitID: 3},
    squareYard = {conversionFactor: 1.19599, smallerLarger: false, unitID: 4},
    squareMile = {conversionFactor: 0.00000038610, smallerLarger: true, unitID: 5},
    squareKilometers = {conversionFactor: 0.0000010000, smallerLarger: true, unitID: 6},
    acres = {conversionFactor: 0.00024711, smallerLarger: true, unitID: 7},
    hectares = {conversionFactor: 0.00010000, smallerLarger: true, unitID: 8}
];

// Converter Functions
function convertArea() {
    var unitOne = document.getElementById("areaUnitOne").value;
    var unitTwo = document.getElementById("areaUnitTwo").value;
    var numberOne = document.getElementById("areaNumberOne").value;
    console.log(unitOne);
    console.log(unitTwo);
    console.log(areaUnits[1].conversionFactor);
    console.log(areaUnits[1].smallerLarger);
    var firstConversion, secondConversion, i;
    for (i = 0; i < areaUnits.length; i++) {
        if (unitOne == areaUnits[i].unitID) {
            if (areaUnits[i].smallerLarger == false) {
                firstConversion = numberOne / areaUnits[i].conversionFactor;
                console.log("The first unit is smaller than a standard meter.");
                console.log(firstConversion);
            }
            if (areaUnits[i].smallerLarger == true) {
                firstConversion = numberOne * areaUnits[i].conversionFactor;
                console.log("The first unit is larger than a standard meter.")
                console.log(firstConversion);
            }
        }
    }
    for (i = 0; i < areaUnits.length; i++) {
        if (unitTwo == areaUnits[i].unitID) {
            if (areaUnits[i].smallerLarger == false) {
                secondConversion = firstConversion * areaUnits[i].conversionFactor;
                console.log("The second unit is smaller than a standard meter.")
                console.log(secondConversion);
            }
            if (areaUnits[i].smallerLarger == true) {
                secondConversion = firstConversion / areaUnits[i].conversionFactor;
                console.log("The Second unit is larger than a standard meter.")
                console.log(secondConversion);
            }
        }
        document.getElementById("areaNumberTwo").value = secondConversion;
        console.log(secondConversion);
    }
}