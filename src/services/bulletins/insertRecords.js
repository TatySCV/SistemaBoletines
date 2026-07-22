import { supabase } from "@/services/supabase";

export async function insertRecords(
  bulletinId,
  records = []
) {
  if (!records.length) return;

  const rows = records
    .filter(record => record.description?.trim())
    .map(record => ({
      bulletin_id: bulletinId,
      type: record.type,
      country: record.country || null,
      description: record.description.trim(),
    }));

  if (!rows.length) return;

  const { error } = await supabase
    .from("bulletin_records")
    .insert(rows);

  if (error) {
    console.error(error);
    throw error;
  }
}