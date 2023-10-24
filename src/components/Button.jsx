import { Link } from "react-router-dom";
export default function Button({ to, children, onClick }) {
  return (
    <Link onClick={onClick} to={to}>
      <button>{children}</button>
    </Link>
  );
}
