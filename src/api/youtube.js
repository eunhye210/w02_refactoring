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

export const searchYoutube = async (searchKeyword, pageToken) => {
  if (useYoutube) {
    let YOUTUBE_URL = null;
    const queryObject = {
      maxResults: 10,
      regionCode: "kr"
    };

    console.log("pagetoken", pageToken);
    if (!searchKeyword) {
      queryObject["chart"] = "mostPopular";

      if (!pageToken) {
        YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(queryObject
        )}`;
      } else {
        queryObject["pageToken"] = pageToken;
        YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(queryObject
        )}`;
      }

    } else {
      queryObject["q"] = searchKeyword;

      if (!pageToken) {
        YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(queryObject
        )}`;
      } else {
        queryObject["pageToken"] = pageToken;
        YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(queryObject
        )}`;
      }

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
