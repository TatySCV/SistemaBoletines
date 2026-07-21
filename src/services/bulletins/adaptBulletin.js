export function adaptBulletin(bulletin) {
  if (!bulletin) return null;

  const internationalRecord = bulletin.records?.find(
    (r) => r.country && r.country.toUpperCase() !== "CHILE"
  );

  const chileRecord = bulletin.records?.find(
    (r) => r.country?.toUpperCase() === "CHILE"
  );

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
    nationality: bulletin.nationality,
    birthDate: bulletin.birth_date,
    gender: bulletin.gender,
    documentType: bulletin.document_type,
    documentNumber: bulletin.document_number,

    // ESTADO
    resolutionStatus: bulletin.status,

    // RESOLUCIÓN
    resolutionNumber: bulletin.resolution_number,
    resolutionDate: bulletin.resolution_date,
    resolutionAuthority: bulletin.resolution_authority,

    // ANTECEDENTES
    hasInternationalRecord: !!internationalRecord,
    internationalCountry: internationalRecord?.country ?? "",
    internationalRecord: internationalRecord?.description ?? "",

    hasChileRecord: !!chileRecord,
    chileRecord: chileRecord?.description ?? "",

    // TIMELINE
    timeline: bulletin.timeline ?? [],

    // VUELO
    hasFlight: !!flight,

    airline: flight?.airline ?? "",
    flightNumber: flight?.flight_number ?? "",
    departureDate: flight?.departure_date ?? "",
    departureTime: flight?.departure_time ?? "",
    departureAirport: flight?.departure_airport ?? "",
    destination: flight?.destination ?? "",
  };
}