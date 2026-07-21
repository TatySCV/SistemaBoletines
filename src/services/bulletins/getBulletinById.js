import { supabase } from "../supabase";

export async function getBulletinById(id) {
  const { data, error } = await supabase
    .from("bulletins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}