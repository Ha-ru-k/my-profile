// 1. HTMLの要素（オブジェクト）を取得する
// document.getElementById はDOM操作の基本です
const btn = document.getElementById('changeColorBtn');
const body = document.body;

// 2. ボタンにクリックイベント（リスナー）を設定する
btn.addEventListener('click', function(){
    // 3. bodyタグのクラスリストに 'dark-mode' があれば外し、なければつける
    // 状態管理（フラグなど）を自分で書かなくても toggle がやってくれます
    body.classList.toggle('dark-mode');

    //ログ出力（ブラウザの開発者ツールで見れる）
    console.log('ボタンが押されました！');
});