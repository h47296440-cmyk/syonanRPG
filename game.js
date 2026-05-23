// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// ゲーム画面のサイズ
canvas.width = 320;
canvas.height = 320;

// プレイヤーの初期設定
const player = {
    x: 160,
    y: 160,
    size: 20,
    speed: 5
};

// メインループ
function update() {
    // 画面クリア
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // キャラクターの描画
    ctx.fillStyle = '#0f0';
    ctx.fillRect(player.x, player.y, player.size, player.size);

    requestAnimationFrame(update);
}

// 実行開始
update();

console.log("RPGシステムが起動しました");
