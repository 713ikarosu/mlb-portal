const axios = require('axios');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'output/player-data.csv',
  header: [
    { id: 'player_id', title: 'player_id' },
    { id: 'name_first', title: 'name_first' },
    { id: 'name_last', title: 'name_last' },
    { id: 'name_display_first_last', title: 'name_full' },
    { id: 'name_first_ja', title: 'name_first_ja' },
    { id: 'name_last_ja', title: 'name_last_ja' },
    { id: 'name_display_first_last_ja', title: 'name_full_ja' },
  ],
});

let playerId = 1;
const maxPlayerId = 100;

function getPlayerData() {
  if (playerId > maxPlayerId) {
    console.log('プレイヤー情報の取得が完了しました。');
    return;
  }
  axios
    .get(
      `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${playerId}'`
    )
    .then((response) => {
      const data = response.data;
      console.log(response.data);
      const playerInfo = data.player_info.queryResults.row;
      console.log(playerInfo);
      const csvData = [
        {
          player_id: playerInfo.player_id,
          name_first: playerInfo.name_first,
          name_last: playerInfo.name_last,
          name_display_first_last: playerInfo.name_display_first_last,
          // TODO: 以下を日本語（カタカナに変換）
          name_first_ja: playerInfo.name_first,
          name_last_ja: playerInfo.name_last,
          name_display_first_last_ja: playerInfo.name_display_first_last,
        },
      ];
      csvWriter
        .writeRecords(csvData)
        .then(() => console.log('CSVファイルが更新されました。'));
      playerId++;
      getPlayerData();
    })
    .catch((error) => {
      console.log(error);
      console.log(playerId);
    });
}

getPlayerData();