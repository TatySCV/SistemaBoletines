import {
  supabase,
} from "@/services/supabase";


import {
  uploadPhoto,
} from "./uploadPhoto";



export async function createBulletin(
  formData
) {


  let photoUrl = null;



  // ==========================
  // SUBIR FOTO
  // ==========================


  if (formData.photo instanceof File) {


    photoUrl =
      await uploadPhoto(
        formData.photo
      );


  }



  // ==========================
  // CREAR REGISTRO
  // ==========================


  const bulletin = {


    bulletin_date:
      formData.bulletinDate,


    status:
      formData.resolutionStatus,


    photo_url:
      photoUrl,



    // DATOS PERSONALES

    first_name:
      formData.firstName,


    last_name:
      formData.lastName,


    alias:
      formData.alias,


    nationality:
      formData.nationality,


    gender:
      formData.gender,


    birth_date:
      formData.birthDate,


    document_type:
      formData.documentType,


    document_number:
      formData.documentNumber,



    // ANTECEDENTES


    has_chile_record:
      formData.hasChileRecord,


    chile_record:
      formData.chileRecord,


    has_international_record:
      formData.hasInternationalRecord,


    international_country:
      formData.internationalCountry,


    international_record:
      formData.internationalRecord,



    // RESOLUCIÓN


    resolution_number:
      formData.resolutionNumber,


    resolution_date:
      formData.resolutionDate,


    resolution_service:
      formData.resolutionService,



    // VUELO


    has_flight:
      formData.hasFlight,


    airline:
      formData.airline,


    flight_number:
      formData.flightNumber,


    origin:
      formData.origin,


    destination:
      formData.destination,


    departure:
      formData.departure,


    arrival:
      formData.arrival,


  };





  const {
    data,
    error,
  } =
    await supabase
      .from("bulletins")
      .insert(bulletin)
      .select()
      .single();





  if (error) {


    console.error(
      error
    );


    throw error;


  }



  return data;


}