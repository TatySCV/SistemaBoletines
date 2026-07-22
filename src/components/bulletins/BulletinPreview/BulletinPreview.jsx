import { useEffect, useRef } from "react";

import BulletinPoster from "../BulletinPoster";
import PreviewHeader from "./PreviewHeader";
import { adaptBulletin } from "@/services/bulletins";

function BulletinPreview({
  open,
  bulletin,
  onClose,
  onDownload,
  onEdit,
}) {
  const exportRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!open || !bulletin) return null;

  const posterData =
    adaptBulletin(bulletin);

    console.log("BULLETIN:", bulletin);
console.log("POSTER DATA:", posterData);

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/70
      p-6
      backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
        flex
        h-[95vh]
        w-full
        max-w-7xl
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-2xl
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <PreviewHeader
          bulletin={bulletin}
          onClose={onClose}
          onDownload={() =>
            onDownload?.(
              bulletin,
              exportRef.current
            )
          }
          onEdit={() =>
            onEdit?.(bulletin)
          }
        />

        <div
          className="
          flex-1
          overflow-auto
          bg-slate-200
          p-8
          "
        >
          <div className="mx-auto w-fit">
            <BulletinPoster
              data={posterData}
            />
          </div>
        </div>
      </div>

      {/* EXPORT JPG OCULTO */}

      <div
        className="
        fixed
        -left-[9999px]
        top-0
        "
      >
        <BulletinPoster
          ref={exportRef}
          data={posterData}
          exportMode
        />
      </div>
    </div>
  );
}

export default BulletinPreview;