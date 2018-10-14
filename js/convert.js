//False is smaller, true is larger than the standard unit. The standard unit will always be listed first.
var areaUnits = [
    squareMeter = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    squareInch = {conversionFactor: 1550.003, smallerLarger: false, unitID: 2},
    squareFoot = {conversionFactor: 10.7639, smallerLarger: false, unitID: 3},
    squareYard = {conversionFactor: 1.19599, smallerLarger: false, unitID: 4},
    squareMile = {conversionFactor: 0.00000038610, smallerLarger: true, unitID: 5},
    squareKilometer = {conversionFactor: 0.0000010000, smallerLarger: true, unitID: 6},
    acre = {conversionFactor: 0.00024711, smallerLarger: true, unitID: 7},
    hectare = {conversionFactor: 0.00010000, smallerLarger: true, unitID: 8}
];

var lengthUnits = [
    meter = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    nanometer = {conversionFactor: 1000000000, smallerLarger: false, unitID: 2},
    micrometer = {conversionFactor: 1000000, smallerLarger: false, unitID: 3},
    millimeter = {conversionFactor: 1000, smallerLarger: false, unitID: 4},
    centimeter = {conversionFactor: 100, smallerLarger: false, unitID: 5},
    inch = {conversionFactor: 39.3701, smallerLarger: false, unitID: 6},
    foot = {conversionFactor: 3.28084, smallerLarger: false, unitID: 7},
    yard = {conversionFactor: 1.09361, smallerLarger: false, unitID: 8},
    kilometer = {conversionFactor: 1000, smallerLarger: true, unitID: 9},
    mile = {conversionFactor: 1609.344, smallerLarger: true, unitID: 10},
    nauticalMile = {conversionFactor: 1852, smallerLarger: true, unitID: 11}
];

var timeUnits = [
    minute = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    nanosecond = {conversionFactor: 60000000000, smallerLarge: false, unitID: 2},
    microsecond = {conversionFactor: 60000000, smallerLarger: false, unitID: 3},
    millisecond = {conversionFactor: 60000, smallerLarger: false, unitID: 4},
    second = {conversionFactor: 60, smallerLarger: false, unitID: 5},
    hour = {conversionFactor: 60, smallerLarger: true, unitID: 6},
    day = {conversionFactor: 1440, smallerLarger: true, unitID: 7},
    week = {conversionFactor: 10080, smallerLarger: true, unitID: 8},
    month = {conversionFactor: 43800.048, smallerLarger: true, unitID: 9},
    year = {conversionFactor: 525600, smallerLarger: true, unitID: 10},
    decade = {conversionFactor: 5256000, smallerLarger: true, unitID: 11},
    century = {conversionFactor: 52560000, smallerLarger: true, unitID: 12}
];

var volumeUnits = [
    liter = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    milliliter = {conversionFactor: 1000, smallerLarger: false, unitID: 2},
    usTeaspoon = {conversionFactor: 202.884, smallerLarger: false, unitID: 3},
    imperialTeaspoon = {conversionFactor: 168.936, smallerLarger: false, unitID: 4},
    usTablespoon = {conversionFactor: 67.628, smallerLarger: false, unitID: 5},
    cubicInch = {conversionFactor: 61.024, smallerLarger: false, unitID: 6},
    imperialTablespoon = {conversionFactor: 56.312, smallerLarger: false, unitID: 7},
    imperialFluidOunce = {conversionFactor: 35.1951, smallerLarger: false, unitID: 8},
    usFluidOunce = {conversionFactor: 33.814, smallerLarger: false, unitID: 9},
    cubicFoot = {conversionFactor: 28.317, smallerLarger: false, unitID: 10},
    usLegalCup = {conversionFactor: 4.167, smallerLarger: false, unitID: 11},
    imperialCup = {conversionFactor: 3.51951, smallerLarger: false, unitID: 12},
    usLiquidPint = {conversionFactor: 2.11338, smallerLarger: false, unitID: 13},
    imperialPint = {conversionFactor: 1.75975, smallerLarger: false, unitID: 14},
    usLiquidQuart = {conversionFactor: 1.057, smallerLarger: false, unitID: 15},
    imperialQuart = {conversionFactor: 1.137, smallerLarger: true, unitID: 16},
    usLiquidGallon = {conversionFactor: 3.785, smallerLarger: true, unitID: 17},
    imperialGallon = {conversionFactor: 4.546, smallerLarger: true, unitID: 18},
    cubicMeter = {conversionFactor: 1000, smallerLarger: true, unitID: 19}
];

var massUnits = [
    gram = {conversionFactor: 1, smallerLarger: false, unitID: 1},
    microgram = {conversionFactor: 1000000, smallerLarger: false, unitID: 2},
    milligram = {conversionFactor: 1000, smallerLarger: false, unitID: 3},
    ounce = {conversionFactor: 28.35, smallerLarger: true, unitID: 4},
    pound = {conversionFactor: 453.592, smallerLarger: true, unitID: 5},
    kilogram = {conversionFactor: 1000, smallerLarger: true, unitID: 6},
    stone = {conversionFactor: 6350.293, smallerLarger: true, unitID: 7},
    usTon = {conversionFactor: 907184.74, smallerLarger: true, unitID: 8},
    metricTon = {conversionFactor: 1000000, smallerLarger: true, unitID: 9},
    imperialTon = {conversionFactor: 1016047, smallerLarger: true, unitID: 10}
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
function convertLength() {
    var unitOne = document.getElementById("lengthUnitOne").value;
    var unitTwo = document.getElementById("lengthUnitTwo").value;
    var numberOne = document.getElementById("lengthNumberOne").value;
    console.log(unitOne);
    console.log(unitTwo);
    console.log(lengthUnits[1].conversionFactor);
    console.log(lengthUnits[1].smallerLarger);
    var firstConversion, secondConversion, i;
    for (i = 0; i < lengthUnits.length; i++) {
        if (unitOne == lengthUnits[i].unitID) {
            if (lengthUnits[i].smallerLarger == false) {
                firstConversion = numberOne / lengthUnits[i].conversionFactor;
                console.log("The first unit is smaller than a standard meter.");
                console.log(firstConversion);
            }
            if (lengthUnits[i].smallerLarger == true) {
                firstConversion = numberOne * lengthUnits[i].conversionFactor;
                console.log("The first unit is larger than a standard meter.")
                console.log(firstConversion);
            }
        }
    }
    for (i = 0; i < lengthUnits.length; i++) {
        if (unitTwo == lengthUnits[i].unitID) {
            if (lengthUnits[i].smallerLarger == false) {
                secondConversion = firstConversion * lengthUnits[i].conversionFactor;
                console.log("The second unit is smaller than a standard meter.")
                console.log(secondConversion);
            }
            if (lengthUnits[i].smallerLarger == true) {
                secondConversion = firstConversion / lengthUnits[i].conversionFactor;
                console.log("The Second unit is larger than a standard meter.")
                console.log(secondConversion);
            }
        }
        document.getElementById("lengthNumberTwo").value = secondConversion;
        console.log(secondConversion);
    }
}
function convertTemperature() {
    var unitOne = document.getElementById("temperatureUnitOne").value;
    var unitTwo = document.getElementById("temperatureUnitTwo").value;
    var numberOne = document.getElementById("temperatureNumberOne").value;
    var firstConversion, secondConversion, i;
        if (unitOne == 1) {
            firstConversion = (numberOne - 32) * 5/9;
            console.log("The first unit is Fahrenheit. Converting to centigrade.");

        }
        if (unitOne == 2) {
            firstConversion = (numberOne);
            console.log("The first unit is Celsius. Writing input to variable.");
        }
        if (unitOne == 3) {
            firstConversion = numberOne - 273.15;
            console.log("The first unit is Kelvin. Converting to centigrade.");
        }
    console.log(firstConversion);
        if (unitTwo == 1) {
                secondConversion = firstConversion * 9/5 + 32;
                console.log("The second unit is Fahrenheit. Converting from Celsius")
                console.log(firstConversion);
            }
        if (unitTwo == 2) {
            secondConversion = firstConversion;
            console.log("The second unit is Celsius. Writing output.")
        }
        if (unitTwo == 3) {
            secondConversion = firstConversion + 273.15;
            console.log("The second unit is Kelvin. Converting from Celsius")
        }
    console.log(secondConversion);
    document.getElementById("temperatureNumberTwo").value = secondConversion;
        }
function convertTime() {
    var unitOne = document.getElementById("timeUnitOne").value;
    var unitTwo = document.getElementById("timeUnitTwo").value;
    var numberOne = document.getElementById("timeNumberOne").value;
    console.log(unitOne);
    console.log(unitTwo);
    console.log(timeUnits[1].conversionFactor);
    console.log(timeUnits[1].smallerLarger);
    var firstConversion, secondConversion, i;
    for (i = 0; i < timeUnits.length; i++) {
        if (unitOne == timeUnits[i].unitID) {
            if (timeUnits[i].smallerLarger == false) {
                firstConversion = numberOne / timeUnits[i].conversionFactor;
                console.log("The first unit is smaller than a minute.");
                console.log(firstConversion);
            }
            if (timeUnits[i].smallerLarger == true) {
                firstConversion = numberOne * timeUnits[i].conversionFactor;
                console.log("The first unit is larger than a minute.")
                console.log(firstConversion);
            }
        }
    }
    for (i = 0; i < timeUnits.length; i++) {
        if (unitTwo == timeUnits[i].unitID) {
            if (timeUnits[i].smallerLarger == false) {
                secondConversion = firstConversion * timeUnits[i].conversionFactor;
                console.log("The second unit is smaller than a minute.")
                console.log(secondConversion);
            }
            if (timeUnits[i].smallerLarger == true) {
                secondConversion = firstConversion / timeUnits[i].conversionFactor;
                console.log("The Second unit is larger than a minute.")
                console.log(secondConversion);
            }
        }
        document.getElementById("timeNumberTwo").value = secondConversion;
        console.log(secondConversion);
    }
}
function convertVolume() {
    var unitOne = document.getElementById("volumeUnitOne").value;
    var unitTwo = document.getElementById("volumeUnitTwo").value;
    var numberOne = document.getElementById("volumeNumberOne").value;
    console.log(unitOne);
    console.log(unitTwo);
    console.log(volumeUnits[1].conversionFactor);
    console.log(volumeUnits[1].smallerLarger);
    var firstConversion, secondConversion, i;
    for (i = 0; i < volumeUnits.length; i++) {
        if (unitOne == volumeUnits[i].unitID) {
            if (volumeUnits[i].smallerLarger == false) {
                firstConversion = numberOne / volumeUnits[i].conversionFactor;
                console.log("The first unit is smaller than a minute.");
                console.log(firstConversion);
            }
            if (volumeUnits[i].smallerLarger == true) {
                firstConversion = numberOne * volumeUnits[i].conversionFactor;
                console.log("The first unit is larger than a minute.")
                console.log(firstConversion);
            }
        }
    }
    for (i = 0; i < volumeUnits.length; i++) {
        if (unitTwo == volumeUnits[i].unitID) {
            if (volumeUnits[i].smallerLarger == false) {
                secondConversion = firstConversion * volumeUnits[i].conversionFactor;
                console.log("The second unit is smaller than a minute.")
                console.log(secondConversion);
            }
            if (volumeUnits[i].smallerLarger == true) {
                secondConversion = firstConversion / volumeUnits[i].conversionFactor;
                console.log("The Second unit is larger than a minute.")
                console.log(secondConversion);
            }
        }
        document.getElementById("volumeNumberTwo").value = secondConversion;
        console.log(secondConversion);
    }
}
function convertMass() {
    var unitOne = document.getElementById("massUnitOne").value;
    var unitTwo = document.getElementById("massUnitTwo").value;
    var numberOne = document.getElementById("massNumberOne").value;
    console.log(unitOne);
    console.log(unitTwo);
    console.log(massUnits[1].conversionFactor);
    console.log(massUnits[1].smallerLarger);
    var firstConversion, secondConversion, i;
    for (i = 0; i < massUnits.length; i++) {
        if (unitOne == massUnits[i].unitID) {
            if (massUnits[i].smallerLarger == false) {
                firstConversion = numberOne / massUnits[i].conversionFactor;
                console.log("The first unit is smaller than a minute.");
                console.log(firstConversion);
            }
            if (massUnits[i].smallerLarger == true) {
                firstConversion = numberOne * massUnits[i].conversionFactor;
                console.log("The first unit is larger than a minute.")
                console.log(firstConversion);
            }
        }
    }
    for (i = 0; i < massUnits.length; i++) {
        if (unitTwo == massUnits[i].unitID) {
            if (massUnits[i].smallerLarger == false) {
                secondConversion = firstConversion * massUnits[i].conversionFactor;
                console.log("The second unit is smaller than a minute.")
                console.log(secondConversion);
            }
            if (massUnits[i].smallerLarger == true) {
                secondConversion = firstConversion / massUnits[i].conversionFactor;
                console.log("The Second unit is larger than a minute.")
                console.log(secondConversion);
            }
        }
        document.getElementById("massNumberTwo").value = secondConversion;
        console.log(secondConversion);
    }
}