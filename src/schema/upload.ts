import { gql } from "apollo-boost";
export default gql(`query {
    upload {
      dir
      filename
      created_at
    }
  }`);