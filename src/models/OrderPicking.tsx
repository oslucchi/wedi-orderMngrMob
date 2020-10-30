import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRestService } from "../services/RestService";
import { Order, OrderStatus } from "../types/orders";

export const useGetOrders = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [error, setError] = useState<AxiosError>();
  const { post } = useRestService();

  useEffect(() => {
    const getOrders = async () => {
      try {
        //destructure response for cleaner code
        const { data: { orderList } } = await post("orders/byStatus", { statusSet: OrderStatus.SYS });
        orderList && setOrderList(orderList);
      } catch (err) {
        setError(err);
      }
    };

    getOrders();
  }, []);

  return { orderList, error };
};
