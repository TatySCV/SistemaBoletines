export function adaptBulletin(bulletin) {
  if (!bulletin) return null;

  const records = (bulletin.records ?? []).map((record) => ({
    type:
      record.country?.toUpperCase() === "CHILE"
        ? "chile"
        : "international",
    country: record.country,
    description: record.description,
  }));

  const flight = bulletin.flights?.[0];

  return {
    id: bulletin.id,

    // HEADER
    bulletinDate: bulletin.bulletin_date,

    // FOTO
    photo: bulletin.photo_url,

    // DATOS PERSONALES
    firstName: bulletin.first_name,
    lastName: bulletin.last_name,
    alias: bulletin.alias ?? "",
    nationality: bulletin.nationality,
    birthDate: bulletin.birth_date,
    age: bulletin.age,
    gender: bulletin.gender,
    documentType: bulletin.document_type,
    documentNumber: bulletin.document_number,

    // ESTADO
    resolutionStatus: bulletin.status,

    // RESOLUCIÓN
    resolutionNumber: bulletin.resolution_number,
    resolutionDate: bulletin.resolution_date,
    issuingService:
      bulletin.resolution_service ?? "",

    // ANTECEDENTES
    showRecords: records.length > 0,
    records,

    // TIMELINE
    timeline:
      (bulletin.timeline ?? []).map((item) => ({
        eventDate: item.event_date,
        description: item.description,
      })),

    // VUELO
    showFlight: !!flight,

    flight: {
      airline: flight?.airline ?? "",
      flightNumber: flight?.flight_number ?? "",
      origin: flight?.origin ?? "",
      destination: flight?.destination ?? "",
      departure: flight?.departure ?? "",
      arrival: flight?.arrival ?? "",
    },
  };
}