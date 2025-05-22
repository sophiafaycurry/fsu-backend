import { useParams } from "react-router-dom";

export default function SingleUser() {
  console.log(useParams());
  const { id } = useParams();

  return <h1>Single User Id: {id}</h1>;
}
