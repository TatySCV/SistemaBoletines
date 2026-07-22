import { useEffect, useMemo, useState } from "react";
import { exportPosterJPG } from "@/utils/export/posterExport";

import BulletinPreview from "@/components/bulletins/BulletinPreview";

import { getBulletins, getCompleteBulletin } from "@/services/bulletins";

import BulletinFilters from "./BulletinFilters";
import BulletinTable from "./BulletinTable";

function BulletinHistory() {
  const [bulletins, setBulletins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [nationality, setNationality] = useState("");

  // Preview

  const [previewOpen, setPreviewOpen] = useState(false);

  const [selectedBulletin, setSelectedBulletin] = useState(null);

  async function loadBulletins() {
    try {
      setLoading(true);

      const data = await getBulletins();

      setBulletins(data);
    } catch (error) {
      console.error(error);
      alert("No fue posible cargar los boletines.");
    } finally {
      setLoading(false);
    }
  }

  async function handleView(id) {
    try {
      const bulletin = await getCompleteBulletin(id);

      setSelectedBulletin(bulletin);

      setPreviewOpen(true);
    } catch (error) {
      console.error(error);

      alert("No fue posible abrir el boletín.");
    }
  }

  function handleClosePreview() {
    setPreviewOpen(false);

    setSelectedBulletin(null);
  }

  useEffect(() => {
    loadBulletins();
  }, []);

  const filteredBulletins = useMemo(() => {
    return bulletins.filter((bulletin) => {
      const matchesSearch =
        search === "" ||
        `${bulletin.first_name} ${bulletin.last_name}`
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        (bulletin.document_number || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus = status === "" || bulletin.status === status;

      const matchesNationality =
        nationality === "" || bulletin.nationality === nationality;

      return matchesSearch && matchesStatus && matchesNationality;
    });
  }, [bulletins, search, status, nationality]);

  return (
    <>
      <div className="space-y-6">
        <BulletinFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
          nationality={nationality}
          onNationalityChange={setNationality}
        />

        <BulletinTable
          bulletins={filteredBulletins}
          loading={loading}
          onView={handleView}
        />
      </div>

      <BulletinPreview
        open={previewOpen}
        bulletin={selectedBulletin}
        onClose={handleClosePreview}
        onDownload={async (bulletin, posterElement) => {
          try {
            await exportPosterJPG(
              posterElement,
              `${bulletin.first_name}-${bulletin.last_name}`,
            );
          } catch (error) {
            console.error(error);

            alert("No fue posible descargar el boletín.");
          }
        }}
        onEdit={(bulletin) => {
          console.log("Editar", bulletin);
        }}
      />
    </>
  );
}

export default BulletinHistory;
