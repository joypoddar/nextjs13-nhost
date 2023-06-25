"use client";

import { gql, useQuery } from "@apollo/client";

const GET_MODULES = gql`
  query getModules {
    modules {
      title
    }
  }
`;

const Data = () => {
  const { loading, error, data } = useQuery(GET_MODULES);
  console.log(data);
  return <div>data - look at the console for the query result</div>;
};

export default Data;
