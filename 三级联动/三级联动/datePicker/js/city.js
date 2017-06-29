var city = eval(city());
var model1 = null;
function city(){
    $.ajax({
        url:"/Ajax/addresslist",
        dataType:'json',
        async:false,
        success:function(data){
            model1 = data;
        }
    });
    // console.log(model1);
    return model1;
}