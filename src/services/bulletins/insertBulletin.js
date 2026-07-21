import { supabase } from "@/services/supabase";

export async function insertBulletin(data) {

    const bulletin = {

        bulletin_date: data.bulletinDate,

        status: data.resolutionStatus,

        photo_url: data.photo,

        first_name: data.firstName,

        last_name: data.lastName,

        alias: data.alias,

        nationality: data.nationality,

        gender: data.gender,

        birth_date: data.birthDate,

        age: data.age,

        document_type: data.documentType,

        document_number: data.documentNumber,

        resolution_number: data.resolutionNumber,

        resolution_date: data.resolutionDate,

        resolution_service: data.issuingService,

        resolution_status: data.resolutionStatus,

        is_active: true

    };

    const { data: created, error } = await supabase

        .from("bulletins")

        .insert(bulletin)

        .select()

        .single();

    if (error) throw error;

    return created;

}