export function upper(value) {

  if (!value) return "-";

  return String(value)
    .toUpperCase();

}




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



  // viene desde input date: YYYY-MM-DD

  if (
    typeof value === "string" &&
    value.includes("-")
  ) {


    const [
      year,
      month,
      day,
    ] = value.split("-");



    return (
      `${day}.${months[Number(month) - 1]}.${year.slice(-3)}`
    );

  }




  const date =
    new Date(value);



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