import { supabase } from "@/services/supabase";

import { uploadPhoto } from "./uploadPhoto";
import { insertRecords } from "./insertRecords";
import { insertTimeline } from "./insertTimeline";
import { insertFlight } from "./insertFlight";

export async function updateBulletin(id, formData) {
  try {
    let photoUrl = formData.photo;

    // Si se seleccionó una nueva foto (File), subirla
    if (formData.photo instanceof File) {
      photoUrl = await uploadPhoto(formData.photo);
    }

    // Actualizar tabla principal
    const { error: bulletinError } = await supabase
      .from("bulletins")
      .update({
        bulletin_date: formData.bulletinDate,

        status: formData.resolutionStatus,

        photo_url: photoUrl,

        first_name: formData.firstName,

        last_name: formData.lastName,

        alias: formData.alias,

        nationality: formData.nationality,

        gender: formData.gender,

        birth_date: formData.birthDate,

        age: formData.age,

        document_type: formData.documentType,

        document_number: formData.documentNumber,

        resolution_number: formData.resolutionNumber,

        resolution_date: formData.resolutionDate,

        resolution_service: formData.issuingService,

        resolution_status: formData.resolutionStatus,
      })
      .eq("id", id);

    if (bulletinError) throw bulletinError;

    // Eliminar antecedentes antiguos
    const { error: recordsError } = await supabase
      .from("bulletin_records")
      .delete()
      .eq("bulletin_id", id);

    if (recordsError) throw recordsError;

    // Insertar antecedentes nuevos
    await insertRecords(id, formData.records);

    // Eliminar línea de tiempo
    const { error: timelineError } = await supabase
      .from("bulletin_timeline")
      .delete()
      .eq("bulletin_id", id);

    if (timelineError) throw timelineError;

    // Insertar línea de tiempo nueva
    await insertTimeline(id, formData.timeline);

    // Eliminar vuelo anterior
    const { error: flightError } = await supabase
      .from("bulletin_flights")
      .delete()
      .eq("bulletin_id", id);

    if (flightError) throw flightError;

    // Insertar vuelo nuevo (si existe)
    await insertFlight(id, formData.flight);

    return true;
  } catch (error) {
    console.error("Error actualizando boletín:", error);
    throw error;
  }
}