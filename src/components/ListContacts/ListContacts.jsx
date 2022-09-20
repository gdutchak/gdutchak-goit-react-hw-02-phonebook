import PropTypes, { shape } from 'prop-types';
import { Item, ButtonList } from './ListContacts.styled';

export const ListContacts = ({ contacts, filter, onDelete }) => (
    <ul>
        {contacts.map(({ name, number, id }) => {
            if (name.toLowerCase().includes(filter.toLowerCase())) {
                return <Item key={id}>{name}: {number}
                    <ButtonList type='ButtonList' onClick={() => onDelete(name)}>Delete</ButtonList></Item>
            }
        })}
    </ul>
)

ListContacts.propTypes = {
    contacts: PropTypes.arrayOf(shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    filter: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}