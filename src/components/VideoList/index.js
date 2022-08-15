import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import { searchYoutube } from "../../api/youtube";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 200px 200px 200px;
  column-gap: 20px;
  row-gap: 20px;
`;

export default function VideoList({ searchKeyword }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const test = async () => {
      const res = await searchYoutube(searchKeyword);
      setItems(res.items[0]);
    }

    test();
  }, [])
  console.log(items);

  return (
    <Wrapper>
      {searchKeyword !== "" && (
        <VideoListEntry
          title={items.snippet.title}
          thumbnail={items.snippet.thumbnails.default.url}
          published={items.snippet.publishedAt}
          description={items.snippet.description}
        />
      )}
    </Wrapper>
  );
}
