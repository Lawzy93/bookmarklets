if (rs_timer_l == undefined) {
    let rs_timer;
    const rs_timer_l = 10*1000;
}

rs_addCss();
rs_addBox();

window.addEventListener('message',function(e){
    if (e.data.uid&&e.data.type==='sizeUpdate') {
        var i = document.querySelector('iframe[name="'+e.data.uid+'"]');
        i.style.width = e.data.payload.width;
        i.style.height = e.data.payload.height;
    }
});

function rs_addCss() {
    if (document.getElementById('rs_css') == undefined) {
        let rs_css = document.createElement('style');
        rs_css.id = 'rs_css';
        rs_css.innerHTML = '.rs-box {position: fixed; bottom: 10px; right: 10px; z-index: 10;}';
        rs_css.innerHTML += '\n' + '.rs-close {position: absolute; top: 0px; right: 0px; color: #ffffff; padding:8px 16px; vertical-align: middle; overflow: hidden; text-align: center; cursor: pointer; white-space: nowrap;}';
        rs_css.innerHTML += '\n' + '.rs-close:hover {background-color: #ff0000;}';
        document.body.appendChild(rs_css);
    }
}

function rs_addBox() {
    if (document.getElementById('rs_box') == undefined) {
        rs_createBox('rs_box');
    } else {
        rs_refreshBox();
    }
}

function rs_createBox() {
    let rs_box = document.createElement('div');
    rs_box.className = 'rs-box';
    rs_box.id = 'rs_box';
    rs_box.innerHTML = '<iframe frameborder=0 style="border:0" name="dykro" src="https://cdn.battlemetrics.com/b/standardVertical/636365.html?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&showPlayers=1&maxPlayersHeight=300"></iframe>';
    rs_box.innerHTML += '<div class="rs-close" onclick="rs_destroyBox(\'rs_box\');">&times;</div>';
    document.body.appendChild(rs_box);

    timer = setTimeout(rs_refreshBox, rs_timer_l);
}

function rs_destroyBox(id) {
    document.body.removeChild(document.getElementById(id));
    clearTimeout(timer);
}

function rs_refreshBox() {
    document.getElementById('rs_box').id = '_rs_box';
    rs_createBox();
    rs_destroyBox('_rs_box');

    clearTimeout(timer);
    timer = setTimeout(rs_refreshBox, rs_timer_l);
}