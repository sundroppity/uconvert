var i;
//False is smaller, true is larger than the standard unit. The standard unit will always be listed first.
var areaUnits = [
    squareMeters = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    squareFeet = {conversionFactor: 4050.15, smallerLarger: false, unitID: 2}
];

// Converter Functions
function convertArea() {
    var unitOne = document.getElementById("unitOne").value;
    var unitTwo = document.getElementById("unitTwo").value;
    var numberOne = document.getElementById("numberOne").value;
    console.log(unitOne);
    console.log(unitTwo);
    console.log(areaUnits[1].conversionFactor);
    console.log(areaUnits[1].smallerLarger);
    var firstConversion, secondConversion;
    for (i = 0; i < areaUnits.length; i++) {
        if (unitOne == areaUnits[i].unitID) {
            if (areaUnits[i].smallerLarger == false) {
                firstConversion = numberOne * areaUnits[i].conversionFactor
            }
            if (areaUnits[i].smallerLarger == true) {
                firstConversion = numberOne / areaUnits[i].conversionFactor
            }
        }
    }
    console.log(firstConversion);
    for (i = 0; i < areaUnits.length; i++) {
        if (unitTwo == areaUnits[i].unitID) {
            if (areaUnits[i].smallerLarger == false) {
                secondConversion = firstConversion * areaUnits[i].conversionFactor;
            }
            if (areaUnits[i].smallerLarger == true) {
                secondConversion = firstConversion / areaUnits[i].conversionFactor;
                console.log("The Second unit is larger than a standard meter.")
            }
        }
        document.getElementById("numberTwo").value = secondConversion;
        console.log(secondConversion);
    }
}