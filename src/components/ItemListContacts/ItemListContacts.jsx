import PropTypes from 'prop-types';

export const ItemListContacts = ({ name, number, id, filter, onDelete }) => {
    if (name.toLowerCase().includes(filter.toLowerCase())) {
        return <li key={id}>{name}: {number}
            <button type='button' onClick={() => onDelete(name)}>Delete</button></li>
    }
}

ItemListContacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string,
    filter: PropTypes.string,
    onDelete: PropTypes.func,
}