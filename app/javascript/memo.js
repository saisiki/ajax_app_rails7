const buildHTML = (XHR) => {
      const item = XHR.response.post;
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      return html;
};

function post (){
  // リクエストを送信する処理
  const form = document.getElementById("form");
  // form.addEventListener("submit", () => {
  form.addEventListener("submit", (e) => {  
    //eはイベントオブジェクトといい、イベント発生時の情報を持ったオブジェクトです。今回だと、「投稿ボタンをクリックした」という情報を持ったオブジェクト.どんな文字列を指定してもOKです。今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。
    e.preventDefault();   
    //デフォルトで設定されているイベント（今回は、「ブラウザからのリクエスト」）をキャンセルするためにpreventDefault()メソッドを使用
    const formData = new FormData(form);
    // FormDataとは、フォームに入力された値を取得できるオブジェクトのことです。
// new FormData(フォームの要素);のように記述することでオブジェクトを生成し、引数にフォームの要素を渡すことで、そのフォームに入力された値を取得できます。
    const XHR = new XMLHttpRequest();
    // XMLHttpRequestとは、JavaScriptを用いてサーバーとHTTP通信を行うときに利用するオブジェクト変数名のXHRはXMLHttpRequestの略です。
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
//コントローラーからレスポンスの受信に成功したときの処理を記述しましょう。
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;  //nullでこれ以下の処理は行わない
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";


    };

  });

};
window.addEventListener('turbo:load', post);