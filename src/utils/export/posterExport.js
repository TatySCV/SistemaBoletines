import html2canvas from "html2canvas";

export async function exportPosterJPG(
  element,
  fileName = `boletin-${Date.now()}`
) {
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 3,
    backgroundColor: "#ffffff",
    useCORS: true,
  });

  const image = canvas.toDataURL(
    "image/jpeg",
    1
  );

  const link = document.createElement("a");

  link.href = image;
  link.download = `${fileName}.jpg`;

  link.click();
}