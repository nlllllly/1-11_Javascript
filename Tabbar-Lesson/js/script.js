$('#tab-contents .tab[id != "tab1"]').hide();

// tab-menuのaタグがクリックされたときにイベントを実施
$('#tab-menu a').on('click', function(event) {
    // まず、表示されているcontetns自体をhideする
    $("#tab-contents .tab").hide();
    // 次に、選択されているtab-menuのactiveクラスを取って選択されていない状態にする。
    $("#tab-menu .active").removeClass("active");
    // クリックされたtab-menuをactiveクラスを追加して表示させる
    $(this).addClass("active");
    // クリックされたtab-menuのhrefで指定されているidの属性（tab1~4のどれか）を取得して、そのtabをshowする
    $($(this).attr("href")).show();
    event.preventDefault();
});