import { useState } from 'react';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit([name, number]);
    setName('');
    setNumber('');
  };
  const handleChange = e => {
    const valueOption = e.target.name;
    switch (valueOption) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <form className="phonebookAdd" onSubmit={handleSubmit}>
      <label className="phonebookAdd-label">
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          className="phonebookAdd-input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="phonebookAdd-label">
        Number
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          className="phonebookAdd-input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="TodoEditor__button">
        Add contact
      </button>
    </form>
  );
}
