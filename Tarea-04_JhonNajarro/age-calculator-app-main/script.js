const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is requerid";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is requerid";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is requerid";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
});

submit_btn.addEventListener("click", () => {
  if (isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    let birthdayObj = new Date(birthday);
    let agediffMill = new Date() - birthdayObj;
    let ageDate = new Date(agediffMill);
    let ageYears = ageDate.getFullYear() - 1970;
    let ageMonth = ageDate.getMonth();
    //DETERMINA EL NUMERO DE DIAS QUE TIENE EL MES ACTUAL
    let diasMes = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      0
    ).getDate();
    let ageDay = dias(new Date().getDate(), birthdayObj.getDate(), diasMes);
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert("error");
  }
});

//cALCULA EL NUMERO DE DIAS QUE SE CUMPLIERON
let diasDeUnMes;
let diaActual;
let diaBirthday;
const dias = (diaActual, diaBirthday, diasDeUnMes) => {
  let dia = 0;
  if (diaActual >= diaBirthday) {
    dia = diaActual - diaBirthday;
  } else {
    dia = diasDeUnMes - (diaBirthday - diaActual);
  }
  return dia;
};
