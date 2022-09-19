import PropTypes from 'prop-types';
import { ButtonList, Item } from './ItemListContacts.styled';

export const ItemListContacts = ({ name, number, id, filter, onDelete }) => {
    if (name.toLowerCase().includes(filter.toLowerCase())) {
        return <Item key={id}>{name}: {number}
            <ButtonList type='ButtonList' onClick={() => onDelete(name)}>Delete</ButtonList></Item>
    }
}

ItemListContacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string,
    filter: PropTypes.string,
    onDelete: PropTypes.func,
}