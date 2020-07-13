$(function() {
    // メニュートリガーをクリックしたときにイベントを起こす
    $('.menu-trigger').on('click', function(event) {
        // メニュートリガーのactiveを追加するそのときには、id sp-manuはfadeする
        // （元々sp-manu自体がdisplay:noneになっているため、ここではややこしいけど、fadeするとnavが表示されることになってる。）
        $(this).toggleClass('active');
        $('#sp-menu').fadeToggle();
        event.preventDefault();
    });
});