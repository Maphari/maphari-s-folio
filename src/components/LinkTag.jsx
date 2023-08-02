import { Link, useLocation } from "react-router-dom";
import PropsType from "prop-types";

export const LinkTag = ({ name, to, style }) => {
  const location = useLocation()
  return <Link to={to} className={`${location.pathname === "/about" ? "link-active" : "" } transition-all duration-700 ease-linear px-2 py-1  link ${style}`}>{name}</Link>;
};

LinkTag.propTypes = {
  name: PropsType.string.isRequired,
  to: PropsType.string.isRequired,
  style: PropsType.string.isRequired
};
