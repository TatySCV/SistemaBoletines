import { supabase } from "../supabase";

export async function getCompleteBulletin(id) {
  const { data, error } = await supabase
    .from("bulletins")
    .select(`
      *,
      bulletin_records (*),
      bulletin_timeline (*),
      bulletin_flights (*)
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return {
    ...data,

    records: data.bulletin_records ?? [],

    timeline: data.bulletin_timeline ?? [],

    flights: data.bulletin_flights ?? [],
  };
}