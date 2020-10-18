
import { gql } from "apollo-boost";

export const tcd_postAllQuery = gql(`query tcd_postAllQuery {
  tcd_post(limit: 100, order_by: {created_at: desc}) {
    id
    title
    project
    project_en
    keywords
    md
    commons
    units
    tcd_tag_post_ref{
      tag_data_ref {
        tagname
        color
      }
    }
  }
}`);
  
export const tcd_postQuery = gql(`query tcd_postQuery($title: String) {
  tcd_post(where: {title: {_eq: $title}}) {
      id
      title
      project
      project_en
      keywords
      md
      commons
      units
      map_title
      map_lat
      map_lng
      map_zoom
      tcd_card_id
      tcd_post_card {
        subheader
        classes
        columns
        contents
      }
    }
}`);
  