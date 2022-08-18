import React from "react";
import Input from "../shared/Input";
import PropTypes from "prop-types";

export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    />
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
