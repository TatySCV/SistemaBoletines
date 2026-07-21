import { supabase } from "@/services/supabase";

export async function getBulletins() {
  const { data, error } = await supabase
    .from("bulletins")
    .select("*")
    .eq("active", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}