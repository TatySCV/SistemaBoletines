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
  (
    { data },
    ref
  ) => {


    return (

      <div
        ref={ref}
        className="
        w-[794px]
        min-h-[1123px]
        bg-white
        overflow-hidden
        shadow-xl
        shrink-0
        "
      >


        {/* HEADER */}

        <PosterHeader
          date={data.bulletinDate}
        />




        <div
          className="
          p-5
          space-y-5
          "
        >


          {/* FOTO + DATOS */}

          <div
            className="
            grid
            grid-cols-[300px_1fr]
            gap-4
            items-stretch
            "
          >


            <PosterPhoto
              photo={data.photo}
            />



            <div
              className="
              space-y-4
              "
            >


              <PosterStatus
                status={
                  data.resolutionStatus
                }
              />



              <PosterPersonalData
                data={data}
              />


            </div>


          </div>





          {/* ANTECEDENTE INTERNACIONAL */}


          {
            data.hasInternationalRecord && (

              <PosterSection
                title={
                  `ANTECEDENTES EN ${data.internationalCountry}`
                }
              >

                {
                  data.internationalRecord
                }


              </PosterSection>

            )
          }





          {/* ANTECEDENTE CHILE */}


          {
            data.hasChileRecord && (

              <PosterSection
                title="
                ANTECEDENTE PENAL EN CHILE
                "
              >

                {
                  data.chileRecord
                }


              </PosterSection>

            )
          }





          {/* RESOLUCION + TIMELINE */}


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
              items={
                data.timeline
              }
            />


          </div>






          {/* VUELO OPCIONAL */}


          {
            data.hasFlight && (

              <PosterFlight
                data={data}
              />

            )
          }



        </div>




        <PosterFooter />



      </div>

    );

  }

);


BulletinPoster.displayName =
  "BulletinPoster";


export default BulletinPoster;