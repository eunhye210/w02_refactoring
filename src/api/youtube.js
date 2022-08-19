import { YOUTUBE_API_KEY } from "../config/youtube";

const useYoutube = true;

function mapObjectToQueryStrings(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `&${prop}=${obj[prop]}`;
    }
  }
  return result;
}

export const searchYoutube = async (searchKeyword, pageToken) => {
  if (useYoutube) {
    let YOUTUBE_URL = null;

    const queryObject = {
      maxResults: 10,
      regionCode: "kr",
    };

    if (pageToken) {
      queryObject.pageToken = pageToken;
    }

    if (!searchKeyword) {
      queryObject.chart = "mostPopular";
      YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(queryObject)}`;
    } else {
      queryObject.q = searchKeyword;
      YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(queryObject)}`;
    }

    const res = await fetch(YOUTUBE_URL);
    const data = await res.json();

    return data;
  }

  const res = await fetch("/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();

  return data;
};
