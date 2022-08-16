import { YOUTUBE_API_KEY } from "../config/youtube";

// true: use youtube api.
// false: use mock data (data.json)
// Toggle the value depends on your situation.
const useYoutube = false;

function mapObjectToQueryStrings(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `&${prop}=${obj[prop]}`;
    }
  }
  return result;
}

export const searchYoutube = async (searchKeyword) => {
  if (useYoutube) {
    let YOUTUBE_URL = null;

    if (searchKeyword === "") {
      YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings({
        // pageToken: pageToken, 문제있음
        maxResults: 10,
        chart: "mostPopular",
        regionCode: "kr"
      }
      )}`;
    } else {
      YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings({
        q: searchKeyword,
        // pageToken: pageToken, 문제있음
        order: "viewCount",
        maxResults: 10,
      }
      )}`;
    }

    const res = await fetch(YOUTUBE_URL);
    const data = await res.json();

    return data;
  }

  // `data.json` is located in /public directory.
  const res = await fetch("/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();

  return data;
};
