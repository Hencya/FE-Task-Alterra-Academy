import { gql } from "@apollo/client";

const GetPassengerList = gql`
  query MyQuery {
    task_21_table_user {
      id
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

const GetPassengerByID = gql`
  query MyQuery($id: Int) {
    task_21_table_user(where: { id: { _eq: $id } }) {
      id
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

export { GetPassengerList, GetPassengerByID };
