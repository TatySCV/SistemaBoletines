import { supabase } from "../supabase";

export async function deleteBulletin(id) {
  const { error } = await supabase
    .from("bulletins")
    .update({
      is_active: false,
    })
    .eq("id", id);

  if (error) throw error;
}