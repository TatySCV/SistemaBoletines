import { uploadPhoto } from "./uploadPhoto";
import { insertBulletin } from "./insertBulletin";
import { insertRecords } from "./insertRecords";
import { insertTimeline } from "./insertTimeline";
import { insertFlight } from "./insertFlight";

export async function createBulletin(formData) {

  console.log("FORM DATA", formData);

  try {
    let photoUrl = null;

    if (formData.photo) {
      photoUrl = await uploadPhoto(formData.photo);
    }

    const bulletinData = {
      ...formData,
      photo: photoUrl,
    };

    const bulletin = await insertBulletin(bulletinData);

    console.log("FORM DATA", formData);

    await insertRecords(
      bulletin.id,
      formData.records
    );

    await insertTimeline(
      bulletin.id,
      formData.timeline
    );

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