import s from "./ContactForm.module.scss";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, onClick,  }) => (
  <li className={s.item}>
    <p className={s.itemTxt}>
      {name}: {number }
    </p>
    <button className={s.btnCont} type="button" onClick={onClick}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;

