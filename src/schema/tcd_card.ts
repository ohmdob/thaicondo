import { gql } from "apollo-boost";
export default gql(`query tcd_cardQuery {
    tcd_card(where: {}) {
      id
      subheader
      classes
      columns
      contents
    }
  }
  `);