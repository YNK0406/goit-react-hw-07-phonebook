import { useEffect } from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import { connect, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts-operations";
import s from "./ContactForm.module.scss";

const ContactList = ({ contacts, onDeleteContact, isLoadind }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <>
      {isLoadind ? (
        <h1>Loading...</h1>
      ) : (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number }
              onClick={() => onDeleteContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // phone: PropTypes.string.isRequired,
    })
  ),
};

const getFilterList = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const filterList = getFilterList(items, filter);
  return { contacts: filterList };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
