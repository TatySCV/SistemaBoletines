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
  // CREAR BOLETIN
  // ==========================


  const bulletin = {


    // GENERAL

    bulletin_date:
      formData.bulletinDate || null,


    status:
      formData.resolutionStatus || null,


    photo_url:
      photoUrl,






    // DATOS PERSONALES

    first_name:
      formData.firstName || null,


    last_name:
      formData.lastName || null,


    alias:
      formData.alias || null,


    nationality:
      formData.nationality || null,


    gender:
      formData.gender || null,


    birth_date:
      formData.birthDate || null,


    age:
      formData.age || null,


    document_type:
      formData.documentType || null,


    document_number:
      formData.documentNumber || null,







    // ANTECEDENTES

    has_chile_record:
      Boolean(
        formData.hasChileRecord
      ),


    chile_record:
      formData.chileRecord || null,



    has_international_record:
      Boolean(
        formData.hasInternationalRecord
      ),


    international_country:
      formData.internationalCountry || null,


    international_record:
      formData.internationalRecord || null,








    // RESOLUCION


    resolution_number:
      formData.resolutionNumber || null,


    resolution_date:
      formData.resolutionDate || null,


    issuing_service:
      formData.issuingService || null,


    resolution_status:
      formData.resolutionStatus || null,








    // VUELO


    has_flight:
      Boolean(
        formData.hasFlight
      ),



    airline:
      formData.hasFlight
        ? formData.airline || null
        : null,



    flight_number:
      formData.hasFlight
        ? formData.flightNumber || null
        : null,



    origin:
      formData.hasFlight
        ? formData.origin || null
        : null,



    destination:
      formData.hasFlight
        ? formData.destination || null
        : null,



    departure:
      formData.hasFlight
        ? formData.departure || null
        : null,



    arrival:
      formData.hasFlight
        ? formData.arrival || null
        : null,


  };







  const {
    data,
    error,
  } =
    await supabase
      .from(
        "bulletins"
      )
      .insert(
        bulletin
      )
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