import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handlerSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    event.target.reset();
  };

  return (
    <form
      className={`${css.contactForm} ${css.block}`}
      onSubmit={handlerSubmit}
    >
      <label className={css.block}>
        Name
        <input
          className={css.block}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.block}>
        Number
        <input
          className={css.block}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="Submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
