import { supabase } from "../supabase";

export async function getBulletins() {
  const { data, error } = await supabase
    .from("bulletins")
    .select(`
      id,
      bulletin_date,
      first_name,
      last_name,
      nationality,
      status,
      resolution_number,
      document_number,
      photo_url
    `)
    .eq("is_active", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}