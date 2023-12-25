document.addEventListener('DOMContentLoaded', function () {
    // ヘッダーの要素を取得
    var header = document.querySelector('header');
    // ヘッダーの高さを取得
    var headerHeight = header.offsetHeight;
    // ヘッダーの高さ分だけコンテンツを下に移動
    document.body.style.paddingTop = headerHeight + 'px' ;
});
