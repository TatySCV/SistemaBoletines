import html2canvas from "html2canvas";
import jsPDF from "jspdf";


async function createCanvas(element) {


  await document.fonts.ready;


  return await html2canvas(
    element,
    {
      scale: 3,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    }
  );

}



export async function exportPosterJPG(element) {


  if (!element) return;


  const canvas =
    await createCanvas(element);


  const link =
    document.createElement("a");


  link.download =
    "boletin.jpg";


  link.href =
    canvas.toDataURL(
      "image/jpeg",
      1
    );


  link.click();

}




export async function exportPosterPDF(element) {


  if (!element) return;


  const canvas =
    await createCanvas(element);


  const img =
    canvas.toDataURL(
      "image/jpeg",
      1
    );



  const pdf =
    new jsPDF(
      "p",
      "mm",
      "a4"
    );



  pdf.addImage(
    img,
    "JPEG",
    0,
    0,
    210,
    297
  );


  // pdf.save(
  //   "boletin.pdf"
  // );

}