import { bmi_data } from './data_xx.js';

let bmi_data_xx = bmi_data;

console.log('bmi_data', bmi_data_xx);

function bmiCalc_xx(height, weight) {
  return weight / (height * height);
}

function bmiCalcResult_xx(height, weight) {
  let bmi = bmiCalc_xx(height, weight).toFixed(2);
  console.log(`For (h,w) = (${height},${weight}), the BMI = ${bmi}`);
}

function bmiDataCalc(data) {
  data.forEach(function (item) {
    bmiCalcResult_xx(item.height, item.weight);
  });
}

// bmiCalcResult_xx(1.75, 55);
// bmiCalcResult_xx(1.75, 70);
// bmiCalcResult_xx(1.75, 85);

// bmiDataCalc(bmi_data_xx);

///////////////////////////////////////////////////////

function bmi_normal_low(height) {
  return 18.5 * height * height;
}
function bmi_normal_high(height) {
  return 24 * height * height;
}
function bmiCalcSuggestion_xx(height, weight) {
  let bmi = bmiCalc_xx(height, weight).toFixed(2);
  if (bmi < 18.5) {
    let normal_low = bmi_normal_low(height);
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is ${(
        normal_low - weight
      ).toFixed(2)} kg lower than normal.`
    );
  } else if (bmi < 24) {
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is normal.`
    );
  } else {
    let normal_high = bmi_normal_high(height);
    // console.log('normal_high', normal_high);
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is ${(
        weight - normal_high
      ).toFixed(2)} kg higher than normal.`
    );
  }
}
function bmiDataCalcSuggestion(data) {
  data.forEach(function (item) {
    bmiCalcSuggestion_xx(item.height, item.weight);
  });
}
bmiDataCalcSuggestion(bmi_data_xx);
