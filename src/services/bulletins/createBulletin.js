import { uploadPhoto } from "./uploadPhoto";
import { insertBulletin } from "./insertBulletin";
import { insertRecords } from "./insertRecords";
import { insertTimeline } from "./insertTimeline";
import { insertFlight } from "./insertFlight";

export async function createBulletin(formData) {
  try {
    // 1. Subir fotografía (si existe)
    let photoUrl = null;

    if (formData.photo) {
      photoUrl = await uploadPhoto(formData.photo);
    }

    // 2. Crear objeto principal
    const bulletinData = {
      ...formData,
      photo: photoUrl,
    };

    // 3. Insertar boletín principal
    const bulletin = await insertBulletin(bulletinData);

    console.log("Records:", formData.records);
console.log("Timeline:", formData.timeline);
console.log("Flight:", formData.flight);

await insertRecords(bulletin.id, formData.records);
await insertTimeline(bulletin.id, formData.timeline);
await insertFlight(bulletin.id, formData.flight);

    // 4. Insertar antecedentes
    await insertRecords(
      bulletin.id,
      formData.records
    );

    // 5. Insertar línea de tiempo
    await insertTimeline(
      bulletin.id,
      formData.timeline
    );

    // 6. Insertar vuelo (si existe)
    await insertFlight(
      bulletin.id,
      formData.flight
    );

    return bulletin;

  } catch (error) {
    console.error("Error creando boletín:", error);
    throw error;
  }
}