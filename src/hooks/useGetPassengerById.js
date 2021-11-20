import { useLazyQuery } from "@apollo/client";
import { GetPassengerByID } from "../graphql/query";

export default function useGetPassengerByID(state) {
  const [
    getPassenger,
    { data: dataById, loading: loadingSearch, error: errorSearch },
  ] = useLazyQuery(GetPassengerByID, {
    fetchPolicy: "network-only",
  });
  return { dataById, getPassenger, loadingSearch, errorSearch };
}
