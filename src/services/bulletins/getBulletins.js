import {
  supabase,
} from "@/services/supabase";



export async function getBulletins() {


  const {
    data,
    error,
  } =
    await supabase
      .from("bulletins")
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );



  if (error) {


    console.error(
      error
    );


    throw error;


  }



  return data;


}