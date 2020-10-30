import { useState, useEffect } from "react";
import { useRestservicePost } from "../services/RestService";

export const useGetOrders = () => {
  const [orderList, setOrderList] = useState([]);
  const [error, setError] = useState(null);
  const { post } = useRestservicePost();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const result = await post("orders/byStatus", { statusSet: "'SYS'" });
        console.log("RESULT", result);
        if (result.data && result.data.orderList) {
          setOrderList(result.data.orderList);
        }
      } catch (err) {
        setError(err);
      }
    };

    getOrders();
  }, []);

  return { orderList, error };
};
