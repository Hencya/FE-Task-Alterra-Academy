import { gql } from "@apollo/client";

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

export { InsertPassenger, DeletePassenger, UpdatePassenger };
