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

  // Espera formato YYYY-MM-DD
  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${day}.${months[Number(month) - 1]}.${year.slice(-3)}`;
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

export function formatPosterDateTime(value) {


  if (!value) {
    return "-";
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



  // datetime-local:
  // 2026-07-04T23:05


  if (value.includes("T")) {


    const parts =
      value.split("T");


    const date =
      parts[0];


    const time =
      parts[1];


    const [
      year,
      month,
      day,
    ] =
      date.split("-");



    const [
      hour,
      minute,
    ] =
      time.split(":");



    return (
      `${day}.${months[Number(month) - 1]}.${year.slice(-3)}
${hour}:${minute}`
    );

  }



  return value;

}