import PropTypes from 'prop-types';
export default function Filter({ value, onChange }) {
  return (
    <label className="filter-label">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="filter-input"
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
