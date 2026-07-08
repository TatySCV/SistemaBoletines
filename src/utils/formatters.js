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