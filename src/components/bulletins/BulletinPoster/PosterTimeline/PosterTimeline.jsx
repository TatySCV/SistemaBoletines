import { FaClock } from "react-icons/fa";

import { formatPosterDate, upper } from "@/utils/formatters";

function PosterTimeline({ items = [] }) {
  return (
    <section
      className="
      overflow-hidden
      rounded-xl
      border
      "
    >
      <div
        className="
        bg-[#001b4d]
        text-white
        px-5
        py-3
        flex
        gap-2
        items-center
        font-black
        "
      >
        <FaClock />
        LÍNEA DE TIEMPO RELEVANTE
      </div>

      <div
        className="
        p-5
        space-y-5
        "
      >
        {items?.map((item, index) => (
          <div
            key={index}
            className="
                flex
                gap-4
                "
          >
            <div
              className="
                  flex
                  flex-col
                  items-center
                  "
            >
              <div
                className="
                    h-3
                    w-3
                    rounded-full
                    bg-blue-600
                    "
              />

              <div
                className="
                    flex-1
                    w-px
                    bg-blue-600
                    "
              />
            </div>

            <div>
              <p
                className="
                    text-blue-600
                    font-black
                    text-xs
                    "
              >
                {formatPosterDate(item.eventDate)}
              </p>

              <p
                className="
                    text-xs
                    leading-relaxed
                    "
              >
                {upper(item.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PosterTimeline;
