function Tab(node){
    this.node = node;
    this.init();
    this.bind();
}
Tab.prototype = {
    // constructor:Tab,
    init:function(){
        this.headerList = this.node.querySelectorAll('.tab-header>li');
        this.contentList = this.node.querySelectorAll('.tab-content>li');
    },
    bind:function(){
        var _this = this;
        this.headerList.forEach(function(btn){
            btn.onclick = function(e){
                var target = e.target;
                var index = [].indexOf.call(_this.headerList,target);
                _this.headerList.forEach(function(li){
                    li.classList.remove('active');
                });
                target.classList.add('active');
                _this.contentList.forEach(function(li){
                    li.classList.remove('active');
                });
                _this.contentList[index].classList.add('active');
            }
        });
    }
}
var tab1 = new Tab(document.querySelectorAll('.tab')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab')[1]);
var tab2 = new Tab(document.querySelectorAll('.tab')[2]);