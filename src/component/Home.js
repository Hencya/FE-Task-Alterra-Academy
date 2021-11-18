import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import { useState } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import Header from "./Header";

import React from "react";
import LoadingSvg from "./LoadingSvg";

const GetPassanger = gql`
  query MyQuery {
    task_21_table_user {
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

const GetUserById = gql`
  query MyQuery($id: Int) {
    task_21_table_user(where: { id: { _eq: $id } }) {
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

export default function Home() {
  //   const { data, loading, error } = useQuery(GetPassanger);
  const [getUser, { data, loading, error }] = useLazyQuery(GetUserById);
  const [userId, setUserId] = useState([]);
  const [list, setList] = useState([]);
  if (error) {
    console.log(error);
    return null;
  }

  if (loading) {
    return <LoadingSvg />;
  }

  const hapusPengunjung = (id) => {
    this.setState({
      data: [
        ...this.state.data.filter((item) => {
          return item.id !== id;
        }),
      ],
    });
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    this.setState({
      data: [...this.state.data, newData],
    });
  };

  const onGetData = () => {
    getUser({
      variables: {
        id: userId,
      },
    });
    setList(data?.task_21_table_user);
  };

  const onChangeUserId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };
  return (
    <div>
      <Header />
      {/* <ListPassenger data={data} hapusPengunjung={hapusPengunjung} /> */}
      <ListPassenger
        data={data}
        onChangeUserId={onChangeUserId}
        onGetData={onGetData}
        userId={userId}
        hapusPengunjung={hapusPengunjung}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}
