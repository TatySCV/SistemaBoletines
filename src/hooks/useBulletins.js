import { useEffect, useState } from "react";

import { getBulletins } from "@/services/bulletins";

export function useBulletins() {
  const [bulletins, setBulletins] = useState([]);

  const [loading, setLoading] = useState(true);

  async function refresh() {
    try {
      setLoading(true);

      const data = await getBulletins();

      setBulletins(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    bulletins,
    loading,
    refresh,
  };
}