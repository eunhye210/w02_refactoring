import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import VideoInfos from "../Modal/videoInfo";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import { searchYoutube } from "../../api/youtube";

const Main = styled.main`
  margin-top: 110px;
`;


export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const test = async () => {
      const res = await searchYoutube(searchKeyword);
      //setPageToken(res.nextPageToken);
      setItems(res.items);
    };
    test();
  }, []);
  console.log(items[0]);

  return (
    <>
      <AppHeader
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        setItems={setItems}
      />
      <Main>
        <Container>
          <Routes>
            <Route path="/videos" element={<VideoList items={items} />} />
            <Route path="/videos/:videoId" element={<VideoInfos videoInfos={items} />} />
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}

// export default function App() {
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [pageToken, setPageToken] = useState("");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const test = async () => {
//       const res = await searchYoutube(searchKeyword);
//       //setPageToken(res.nextPageToken);
//       setItems(res.items);
//     };
//     test();
//   }, []);
//   console.log(items[0]);

//   return (
//     <>
//       <AppHeader
//         searchKeyword={searchKeyword}
//         setSearchKeyword={setSearchKeyword}
//         setItems={setItems}
//       />
//       <Main>
//         <Container>
//           <Routes>
//             <Route path="/videos" element={<VideoList items={items} />} />
//             <Route path="/videos/:videoId" element={<VideoInfos videoInfos={items} />} />
//             <Route path="/" element={<Navigate to="/videos" replace />} />
//           </Routes>
//         </Container>
//       </Main>
//     </>
//   );
// }
