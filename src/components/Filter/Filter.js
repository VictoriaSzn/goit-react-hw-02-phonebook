import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => (
    <label>Find contact by name
        <input
            type="text"
            value={value}
            onChange={(evt)=> onChangeFilter(evt.target.value)} />
    </label>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};