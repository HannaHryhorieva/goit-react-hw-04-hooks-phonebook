import PropTypes from 'prop-types';
export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contacts-item">
          <span className="contacts-item-name">{name}:</span>
          <span className="contacts-item-name">{number}</span>
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
