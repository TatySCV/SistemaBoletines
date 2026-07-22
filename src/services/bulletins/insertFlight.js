import { supabase } from "@/services/supabase";

export async function insertFlight(
  bulletinId,
  flight
) {
  if (!flight) return;

  const hasFlight =
    flight.airline?.trim() ||
    flight.flightNumber?.trim() ||
    flight.origin?.trim() ||
    flight.destination?.trim() ||
    flight.departure ||
    flight.arrival;

  if (!hasFlight) return;

  const row = {
    bulletin_id: bulletinId,
    airline: flight.airline || null,
    flight_number: flight.flightNumber || null,
    origin: flight.origin || null,
    destination: flight.destination || null,
    departure: flight.departure || null,
    arrival: flight.arrival || null,
  };

  const { error } = await supabase
    .from("bulletin_flights")
    .insert(row);

  if (error) {
    console.error(error);
    throw error;
  }
}