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

  });

};
window.addEventListener('turbo:load', post);