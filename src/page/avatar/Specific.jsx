import { useParams } from "react-router-dom";

function Specific() {
  const { id } = useParams();
  return <div>This page {id}</div>;
}

export default Specific;
