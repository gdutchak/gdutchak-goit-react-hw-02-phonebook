import PropTypes from 'prop-types';

export const Filter = ({ search, filter }) => (
    <label>Find contacts by name
        <input type="text" name='filter' onInput={search} value={filter} />
    </label>
)

Filter.propTypes = {
    search: PropTypes.func,
    filter: PropTypes.string,
}