import { forwardRef } from "react";

import PosterHeader from "./PosterHeader";
import PosterPhoto from "./PosterPhoto";
import PosterPersonalData from "./PosterPersonalData";
import PosterSection from "./PosterSection";
import PosterResolution from "./PosterResolution";
import PosterTimeline from "./PosterTimeline";
import PosterFlight from "./PosterFlight";
import PosterFooter from "./PosterFooter";
import PosterStatus from "./PosterStatus";

const BulletinPoster = forwardRef(
  ({ data, exportMode = false }, ref) => {
    const hasRecords =
      data.showRecords &&
      data.records?.length > 0;

    const hasFlight =
      data.showFlight &&
      (
        data.flight?.airline ||
        data.flight?.flightNumber ||
        data.flight?.origin ||
        data.flight?.destination ||
        data.flight?.departure ||
        data.flight?.arrival
      );

    return (
      <div
        ref={ref}
        className={`
          ${exportMode ? "w-[1200px]" : "w-[900px]"}
          min-h-[1123px]
          bg-white
          overflow-hidden
          shadow-xl
          shrink-0
        `}
      >
        {/* HEADER */}

        <PosterHeader
          date={data.bulletinDate}
        />

        <div className="p-5 space-y-5">

          {/* FOTO + DATOS */}

          <div
            className={`
              grid
              gap-5
              ${
                exportMode
                  ? "grid-cols-[520px_1fr]"
                  : "grid-cols-[50%_1fr]"
              }
            `}
          >
            <PosterPhoto
              photo={data.photo}
            />

            <div className="space-y-4">

              <PosterStatus
                status={data.resolutionStatus}
              />

              <PosterPersonalData
                data={data}
              />

            </div>

          </div>

          {/* ANTECEDENTES */}

          {hasRecords &&
            data.records.map((record, index) => (
              <PosterSection
                key={index}
                title={
                  record.type === "chile"
                    ? "ANTECEDENTE PENAL EN CHILE"
                    : `ANTECEDENTES EN ${record.country}`
                }
              >
                {record.description}
              </PosterSection>
            ))}

          {/* RESOLUCIÓN + LÍNEA DE TIEMPO */}

          <div
            className="
              grid
              grid-cols-[30%_1fr]
              gap-5
            "
          >
            <PosterResolution
              data={data}
            />

            <PosterTimeline
              items={data.timeline}
            />
          </div>

          {/* INFORMACIÓN DE VUELO */}

          {hasFlight && (
            <PosterFlight
              data={data.flight}
            />
          )}

        </div>

        <PosterFooter />

      </div>
    );
  }
);

BulletinPoster.displayName = "BulletinPoster";

export default BulletinPoster;