import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import { useState, useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import Header from "./Header";

import React from "react";
import LoadingSvg from "./LoadingSvg";

const GetPassangers = gql`
  query MyQuery {
    task_21_table_user {
      id
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

const GetPassangerById = gql`
  query MyQuery($id: Int) {
    task_21_table_user(where: { id: { _eq: $id } }) {
      id
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

const InsertPassenger = gql`
  mutation MyMutation($umur: Int!, $nama: String!, $Jenis_Kelamin: String!) {
    insert_task_21_table_user(
      objects: { Jenis_Kelamin: $Jenis_Kelamin, umur: $umur, nama: $nama }
    ) {
      affected_rows
    }
  }
`;

const DeletePassenger = gql`
  mutation MyMutation($id: Int!) {
    delete_task_21_table_user_by_pk(id: $id) {
      id
    }
  }
`;

const UpdatePassenger = gql`
  mutation MyMutation(
    $id: Int!
    $Jenis_Kelamin: String
    $nama: String
    $umur: Int
  ) {
    update_task_21_table_user_by_pk(
      pk_columns: { id: $id }
      _set: { Jenis_Kelamin: $Jenis_Kelamin, nama: $nama, umur: $umur }
    ) {
      id
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

export default function Home() {
  const [getPassengerList, { data, loading, error }] =
    useLazyQuery(GetPassangers);

  const [getPassenger, { loading: loadingSearch, error: errorSearch }] =
    useLazyQuery(GetPassangerById, {
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        setPassenger(data.task_21_table_user);
      },
    });

  const [insertPassenger, { loading: loadingInsert }] = useMutation(
    InsertPassenger,
    {
      refetchQueries: [GetPassangers],
      awaitRefetchQueries: true,
      onCompleted: (data) => {
        setPassenger(data.task_21_table_user);
      },
    }
  );

  const [deletePassenger, { loading: loadingDelete }] = useMutation(
    DeletePassenger,
    {
      refetchQueries: [GetPassangers],
      awaitRefetchQueries: true,
      onCompleted: (data) => {
        setPassenger(data.task_21_table_user);
      },
    }
  );

  const [updatePassenger, { loading: loadingUpdate }] = useMutation(
    UpdatePassenger,
    {
      refetchQueries: [GetPassangers],
      awaitRefetchQueries: true,
      onCompleted: (data) => {
        setPassenger(data.task_21_table_user);
      },
    }
  );

  const [userID, setUserID] = useState("");
  const [passenger, setPassenger] = useState();

  useEffect(() => {
    getPassengerList();
    if (data && typeof passenger === "undefined") {
      setPassenger(data.task_21_table_user);
    }
  }, [data, passenger, getPassengerList]);

  if (error || errorSearch) {
    console.log(error);
    console.log(errorSearch);
    return null;
  }

  if (
    loading ||
    loadingSearch ||
    loadingInsert ||
    loadingDelete ||
    loadingUpdate
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
      id: uuidv4(),
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
    getPassenger({
      variables: {
        id: userID,
      },
    });
  };

  const onGetAllData = () => {
    setPassenger(() => {
      getPassengerList();
      return data.task_21_table_user;
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
      <input value={userID} onChange={onChangeID}></input>
      <button onClick={onGetDataById}>Get Data By id</button>
      <button onClick={onGetAllData}>Get All Data </button>
      <ListPassenger
        passenger={passenger}
        hapusPengunjung={hapusPengunjung}
        editPengunjung={editPengunjung}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}
