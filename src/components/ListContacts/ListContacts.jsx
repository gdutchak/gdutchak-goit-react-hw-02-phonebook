import PropTypes, { shape } from 'prop-types';
import { Item, ButtonList } from './ListContacts.styled';

export const ListContacts = ({ onSearch, onDelete }) => (
    <ul>
        {onSearch.map(({ name, number, id }) => <Item key={id}>{name}: {number}
            <ButtonList type='ButtonList' onClick={() => onDelete(name)}>Delete</ButtonList></Item>)}
    </ul>
)


ListContacts.propTypes = {
    onSearch: PropTypes.arrayOf(shape).isRequired,
    onDelete: PropTypes.func.isRequired,
}
