(function() {
    let rs_css = document.createElement('style');
    rs_css.innerHTML = '.rs-box {position: fixed; bottom: 10px; right: 10px; z-index: 10;} .rs-close {position: absolute; top: 0px; right: 0px; color: #ffffff; padding:8px 16px; vertical-align: middle; overflow: hidden; text-align: center; cursor: pointer; white-space: nowrap;} .rs-close:hover {background-color: #ff0000;}'
    document.body.appendChild(rs_css);

    let rs_box = document.createElement('div');
    rs_box.className = 'rs-box';
    rs_box.id = 'rs-box';
    rs_box.innerHTML = '<iframe width=500 height=80 frameborder=0 style="border:0" name="qhuwk" src="https://cdn.battlemetrics.com/b/horizontal500x80px/636365.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"></iframe>';
    rs_box.innerHTML += '<div class="rs-close" onclick="(function(){document.body.removeChild(document.getElementById(\'rs-box\'));})();">&times;</div>';
    document.body.appendChild(rs_box);

    window.addEventListener('message',function(e){
        if (e.data.uid&&e.data.type==='sizeUpdate') {
            var i = document.querySelector('iframe[name="'+e.data.uid+'"]');
            i.style.width = e.data.payload.width;
            i.style.height = e.data.payload.height;
        }
    });
})();