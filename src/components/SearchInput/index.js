import React from "react";
import Input from "../shared/Input";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchInput({ handleSubmit }) {
  const [input, setInput] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Youtube 검색"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
