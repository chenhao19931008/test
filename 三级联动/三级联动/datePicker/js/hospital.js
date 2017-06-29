var hospital = eval(hospital());
var model2 = null;
function hospital(){
    $.ajax({
        url:"/Ajax/hospitallist",
        dataType:'json',
        async:false,
        success:function(data){
            model2 = data;
        }
    });
    // console.log(model2);
    return model2;
}

var ksclass = eval(ksclass());
var model3 = null;
function ksclass(){
    $.ajax({
        url:"/Ajax/ksclasslist",
        dataType:'json',
        async:false,
        success:function(data){
            model3 = data;
        }
    });
    // console.log(model3);
    return model3;
}

var zhicheng = eval(zhicheng());
var model4 = null;
function zhicheng(){
    $.ajax({
        url:"/Ajax/zhichenglist",
        dataType:'json',
        async:false,
        success:function(data){
            model4 = data;
        }
    });
    // console.log(model4);
    return model4;
}