/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if(input.split("/").length > 2)return "invalid number";
    var result = eval(input.slice(0,input.match(/[a-z]/i).index) || "1");
    return result;
  };
  
  this.getUnit = function(input) {
    var result = (input.slice(input.match(/[a-z]/i).index));
    let lower = result.toLowerCase();
    switch(lower){
      case 'gal':
      case 'l':
      case 'lbs':
      case 'kg':
      case 'mi':
      case 'km':
        break;
      default:
          result = "invalid unit";
    }
      return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    initUnit = initUnit.toLowerCase();
    switch(initUnit){
      case 'gal':
        result = "l"
        break;
      case 'l':
        result = "gal"
        break;
      case 'lbs':
        result = "kg"
        break;
      case 'kg':
        result = "lbs"
        break;
      case 'mi':
        result = "km"
        break;
      case 'km':
        result = "mi"
        break;
      default:
          result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    unit = unit.toLowerCase();
    switch(unit){
      case 'gal':
        result = "gallons"
        break;
      case 'l':
        result = "liters"
        break;
      case 'lbs':
        result = "pounds"
        break;
      case 'kg':
        result = "kilograms"
        break;
      case 'mi':
        result = "miles"
        break;
      case 'km':
        result = "kilometers"
        break;
      default:
          result = "invalid unit";
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
          result = "invalid unit";
    }
      if(typeof result === "number")
        {
          result = Math.round(result * 10000) / 10000;
        }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
