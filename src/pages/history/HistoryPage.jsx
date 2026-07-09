import {
  useEffect,
  useState,
} from "react";


import {
  getBulletins,
} from "@/services/bulletins";


import {
  BulletinTable,
} from "@/components/history";



function HistoryPage() {


  const [
    bulletins,
    setBulletins,
  ] =
    useState([]);





  useEffect(
    () => {


      async function load() {


        const data =
          await getBulletins();



        setBulletins(
          data
        );


      }



      load();


    },
    []
  );





  return (

    <div>


      <h1
        className="
        text-3xl
        font-bold
        "
      >

        Historial

      </h1>



      <p
        className="
        mt-2
        text-slate-500
        "
      >

        Boletines generados.

      </p>




      <div className="mt-8">


        <BulletinTable
          bulletins={
            bulletins
          }
        />


      </div>



    </div>

  );

}


export default HistoryPage;