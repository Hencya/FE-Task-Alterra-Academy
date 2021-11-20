// library
import { useEffect, useState } from "react";
// components
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
// assets
import LoadingSvg from "../assets/LoadingSvg";
// graphql
import useDeletePassenger from "../hooks/useDeletePassenger";
import useGetPassengerById from "../hooks/useGetPassengerById";
import useGetPassengerList from "../hooks/useGetPassengerList";
import useInsertPassenger from "../hooks/useInsertPassenger";
import useUpdatePassenger from "../hooks/useUpdatePassenger";
import useSubscribePassenger from "../hooks/useSubscribePassenger";

export default function Home() {
  const [userID, setUserID] = useState("");
  const [passenger, setPassenger] = useState();

  const {
    data,
    loading: loadingGetAll,
    error: errorGetAll,
    subscribePassenger,
  } = useGetPassengerList();
  const { dataById, getPassengerByid, loadingById, errorById } =
    useGetPassengerById();
  const { insertPassenger, loadingInsert } = useInsertPassenger();
  const { deletePassenger, loadingDelete } = useDeletePassenger();
  const { updatePassenger, loadingUpdate } = useUpdatePassenger();
  const { dataSubs, loadingSubs, errorSubs } = useSubscribePassenger();

  useEffect(() => {
    if (!loadingGetAll && !dataById && userID === "") {
      subscribePassenger();
      setPassenger(dataSubs?.task_21_table_user);
    }
    if (dataById && userID !== "") {
      setPassenger(dataById?.task_21_table_user);
    }
  }, [subscribePassenger, loadingGetAll, dataSubs, dataById, userID]);

  if (errorGetAll || errorById || errorSubs) {
    console.log(errorGetAll);
    console.log(errorById);
    console.log(errorSubs);
    return null;
  }

  if (
    loadingGetAll ||
    loadingById ||
    loadingInsert ||
    loadingDelete ||
    loadingUpdate ||
    loadingSubs
  ) {
    return <LoadingSvg />;
  }

  const hapusPengunjung = (id) => {
    deletePassenger({
      variables: {
        id,
      },
    });
    return data?.task_21_table_user;
  };

  const editPengunjung = (id, newData) => {
    updatePassenger({
      variables: {
        id,
        nama: newData.nama,
        umur: newData.umur,
        Jenis_Kelamin: newData.Jenis_Kelamin,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    const newPassenger = {
      ...newUser,
    };
    insertPassenger({
      variables: {
        nama: newPassenger.nama,
        umur: newPassenger.umur,
        Jenis_Kelamin: newPassenger.Jenis_Kelamin,
      },
    });
    return data?.task_21_table_user;
  };

  const onGetDataById = () => {
    getPassengerByid({
      variables: {
        id: userID,
      },
    });
  };

  const onGetAllData = () => {
    getPassengerByid({
      variables: {
        id: 0,
      },
    });
  };

  const onChangeID = (e) => {
    if (e.target) {
      setUserID(e.target.value);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <input value={userID} onChange={onChangeID}></input>
        <button onClick={onGetDataById}>Get Data By UserId</button>
        <button onClick={onGetAllData}>Get Data All Data</button>
      </div>

      <ListPassenger
        passenger={passenger}
        hapusPengunjung={hapusPengunjung}
        editPengunjung={editPengunjung}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}
