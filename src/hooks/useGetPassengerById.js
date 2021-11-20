import { useLazyQuery } from "@apollo/client";
import { GetPassengerByID } from "../graphql/query";

export default function useGetPassengerByID(state) {
  const [
    getPassengerByid,
    { data: dataById, loading: loadingById, error: errorById },
  ] = useLazyQuery(GetPassengerByID, {
    fetchPolicy: "network-only",
  });
  return { dataById, getPassengerByid, loadingById, errorById };
}
