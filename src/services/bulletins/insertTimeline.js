import { supabase } from "@/services/supabase";

export async function insertTimeline(
  bulletinId,
  timeline = []
) {

  if (!timeline.length) return;

  const rows = timeline

    .filter(item => item.description?.trim())

    .map((item, index) => ({

      bulletin_id: bulletinId,

      event_date: item.eventDate || null,

      description: item.description.trim(),

      position: index + 1,

    }));


  if (!rows.length) return;


  const { error } = await supabase
    .from("bulletin_timeline")
    .insert(rows);


  if (error) {

    console.error(error);

    throw error;

  }

}