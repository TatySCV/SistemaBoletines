export function upper(value) {

  if (!value) return "-";

  return String(value)
    .toUpperCase();

}



// FECHA FORMATO PDI
// 2026-07-08 -> 08.JUL.026

export function formatPosterDate(value) {

  if (!value) {
    return "--.---.---";
  }


  const date =
    new Date(value);


  if (isNaN(date)) {
    return value;
  }


  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];



  const day =
    String(
      date.getDate()
    ).padStart(
      2,
      "0"
    );


  const month =
    months[
      date.getMonth()
    ];



  const year =
    String(
      date.getFullYear()
    ).slice(-3);



  return (
    `${day}.${month}.${year}`
  );

}




export function formatGender(value) {

  const genders = {

    M: "MASCULINO",

    F: "FEMENINO",

  };


  return (
    genders[value] ||
    value ||
    "-"
  );

}