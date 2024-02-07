import React from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useParams } from "react-router-dom";

// interface MatchParams {
//   detailID: string;
// }
type MatchParams = {
	detailID : string,
	other : string
}

export const DetailPage: React.FC = () => {
//   console.log(props.history);
//   console.log(props.location);
//   console.log(props.match);
  var params = useParams<keyof MatchParams>();
  return <h1>Detail#{params.detailID} {params.other}</h1>;
};
