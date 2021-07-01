import { gql, useQuery } from "@apollo/client";

export const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default function Index() {
  const { loading, data } = useQuery(HELLO_QUERY);
  if (loading) {
    return <div>Loading!!</div>;
  }
  return <div>{data.hello}</div>;
}
