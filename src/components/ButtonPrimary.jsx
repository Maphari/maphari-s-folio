import PropsType from "prop-types";
import { Link } from "react-router-dom";

export const ButtonPrimary = ({ name, to, target, download  }) => {
  return <Link download={download} target={target} to={to} className={`btn-primary`}>{name}</Link>;
};

ButtonPrimary.propTypes = {
  name: PropsType.string.isRequired,
  style: PropsType.string.isRequired
}