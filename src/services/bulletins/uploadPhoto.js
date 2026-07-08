import {
  supabase,
} from "@/services/supabase";


export async function uploadPhoto(
  file
) {


  if (!file) {

    return null;

  }



  const extension =
    file.name
      .split(".")
      .pop();



  const fileName =
    `${crypto.randomUUID()}.${extension}`;




  const path =
    `photos/${fileName}`;





  const {
    error,
  } =
    await supabase
      .storage
      .from("bulletin-photos")
      .upload(
        path,
        file
      );




  if (error) {

    throw error;

  }





  const {
    data,
  } =
    supabase
      .storage
      .from("bulletin-photos")
      .getPublicUrl(path);





  return data.publicUrl;


}