import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Specific() {
  const { id } = useParams();
  return (
    <div className="p-5">
      <Link to="/" className="btn ">
        Back
      </Link>

      <h3> This page {id}</h3>
    </div>
  );
}

export default Specific;
