import React from "react";
import Input from "../shared/Input";
import { useState } from "react";

export default function SearchInput({
  setSearchKeyword,
  setYoutubeData,
  setPageToken,
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchKeyword(input);
    setYoutubeData([]);
    setPageToken("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Youtube 검색"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
