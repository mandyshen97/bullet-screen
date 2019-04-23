$(document).ready(function(){
    var width = $(".s_show").width();
    var height = $(".s_show").height();
    var getRandomColor = function(){
        return '#'+((Math.random() * 0xffffff << 0).toString(16));
    };

    var send = function(){
        var content = $(".s_txt").val(); // 获取文本框中的值
        $(".s_txt").val(""); // 将文本框置为空
        // jQuery 动态创建一个div节点，节点里面是获取到的文本框中的值
        var $spanNode = $('<div class="text">'+content+'</div>');
        var spanheight = height * Math.random(); 
        // 给新节点添加样式
        $spanNode.css({
            top: spanheight,
            color: getRandomColor()
        });
        // 将新节点添加到弹幕墙中
        $(".s_show").append($spanNode);
        // 给新节点添加动画
        $spanNode.animate({ left: "20px" },10000,function(){
            $(this).remove();
        });
    }

    $(".s_txt").keypress(function(event){
        // 如果在文本框处按下了 Enter 键，那么就触发 发射的 click事件
        if(event.keyCode == "13"){
            $(".s_sub").trigger("click");
        }
    });

    $(".s_sub").click(function(){
        send();
    });

    $(".s_del").click(function(){
        $(".s_show").empty();
    });
});