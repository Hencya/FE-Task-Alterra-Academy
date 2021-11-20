import { gql } from "@apollo/client";

const SubscriptionPassenger = gql`
  subscription MySubscription {
    task_21_table_user {
      id
      Jenis_Kelamin
      nama
      umur
    }
  }
`;

export { SubscriptionPassenger };
