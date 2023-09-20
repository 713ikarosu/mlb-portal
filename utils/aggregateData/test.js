const axios = require('axios');

axios
  .get(
    `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='493318'`
  )
  .then((response) => {
    console.log(response.data.player_info.queryResults.row);
  })
  .catch((error) => {
    console.log(error)
  });
// NOTE: Google検索APIから選手名英語で検索してwikipedia(日本語)を持ってくる
//       そこからタイトルである選手名（カタカナ）を取得？