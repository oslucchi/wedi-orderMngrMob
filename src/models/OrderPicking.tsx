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
        const {
          data: { orderList: orderListFromResponse },
        } = await post("orders/byStatus", {
          statusSet: OrderStatus.Preparation,
        });
        console.log("RESULT", orderListFromResponse);
        orderListFromResponse && setOrderList(orderListFromResponse);
      } catch (err) {
        setError(err);
      }
    };

    getOrders();
  }, []);

  return { orderList, error };
};
