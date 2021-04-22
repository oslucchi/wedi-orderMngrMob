import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRestService } from "../services/RestService";
import { Inventory } from "../types/inventory";

export const useGetContent = () => {
  const [contentList, setInventory] = useState<Inventory[]>([]);
  const [error, setError] = useState<AxiosError>();
  const { post } = useRestService();

  useEffect(() => {
    const getContent = async (locationCode: string) => {
      try {
        const {
          data: { contentList: contentListFromResponse },
        } = await post("orders/byStatus", {
          locationCode: locationCode,
        });
        console.log("RESULT", contentListFromResponse);
        contentListFromResponse && setInventory(contentListFromResponse);
      } catch (err) {
        setError(err);
      }
    };

    getContent();
  }, []);

  return { contentList, error };
};
