import PropTypes from 'prop-types';
import { ItemListContacts } from 'components/ItemListContacts/ItemListContacts';

export const ListContacts = ({ contacts, filter, onDelete }) => (
    <ul>
        {contacts.map(({ name, number, id }) => <ItemListContacts name={name} number={number} filter={filter} onDelete={onDelete} key={id}></ItemListContacts>)}
    </ul>
)

ListContacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    filter: PropTypes.string,
    onDelete: PropTypes.func,
}