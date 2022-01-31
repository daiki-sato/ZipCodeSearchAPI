let search = document.getElementById("search");

search.addEventListener(
  "click",
  () => {
    let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
    let error = document.getElementById("error");
    let input = document.getElementById("input");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");
    let address3 = document.getElementById("address3");
    let param = input.value.replace("-", ""); //入力された郵便番号から「-」を削除
    let url = api + param;

    $.ajax({
      url: url, // URLを指定
      type: "GET", // GET,POSTなどを指定
      // データを指定
      data: {
        results: "results",
      },
      dataType: "json", //data type scriptなどデータタイプの指定
      timeout: 10000, //タイムアウト時間
    })
    .done(function (data) {
        // 通信成功時のコールバック処理
        address1.value = data.results[0].address1;
        address2.value = data.results[0].address2;
        address3.value = data.results[0].address3;
      })
      .fail(function (data) {
        // 通信失敗時のコールバック処理
        console.log(data, "apiから取得したデータ");

        error.textContent = "郵便番号から住所が見つかりませんでした。";
        // error.textContent = data.message;
      })
      .always(function (data) {
        // 常に実行する処理
      });
  },
  false
);