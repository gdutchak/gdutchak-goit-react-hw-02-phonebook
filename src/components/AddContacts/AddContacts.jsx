import PropTypes from 'prop-types';

export const AddContacts = ({ submit, contactName, valueName, contactNumber, valueNum }) => (
    <form onSubmit={submit}>

        <label> Name
            <input type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required onInput={contactName} value={valueName} />
        </label>
        <label>Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required onInput={contactNumber} value={valueNum}
            />
        </label>
        <button type="submit">Add contact</button>
    </form>)

AddContacts.propTypes = {
    submit: PropTypes.func,
    contactName: PropTypes.func,
    valueName: PropTypes.string.isRequired,
    contactNumber: PropTypes.func,
    valueNum: PropTypes.string.isRequired,
}