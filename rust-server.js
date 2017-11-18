(function() {
    let frame = document.createElement('div');
    frame.style = 'position: fixed; top: 10px; left: 10px; z-index: 10;';
    frame.innerHTML = '<iframe width=500 height=80 frameborder=0 style="border:0" name="qhuwk" src="https://cdn.battlemetrics.com/b/horizontal500x80px/636365.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"></iframe>';
    document.body.appendChild(frame);

    window.addEventListener('message',function(e){
        if (e.data.uid&&e.data.type==='sizeUpdate') {
            var i = document.querySelector('iframe[name="'+e.data.uid+'"]');
            i.style.width = e.data.payload.width;
            i.style.height = e.data.payload.height;
        }
    });
})();