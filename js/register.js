function al(){
    var i = Math.floor(Math.random()*3);
    if(i === 0)
        alert("注册成功！");
    else if (i === 1)
        alert("注册失败，用户名已存在！");
    else
        alert("注册失败，服务器错误！")
}

function validate() {
    var i = Math.floor(Math.random()*10);
    var u = Math.floor(Math.random()*10);
    var m = Math.floor(Math.random()*10);
    var n = Math.floor(Math.random()*10);
    var validate = prompt("请输入验证码:\n "+i+u+m+n);
    if(validate != null && validate!== ""){
        al()
    }
}

function hasClass(obj,cls){  // 判断obj是否有此class
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj,cls){ //给 obj添加class
    if(!this.hasClass(obj,cls)){
        obj.className += " "+cls;
    }
}

function removeClass(obj,cls){ //移除obj对应的class
    if(hasClass(obj,cls)){
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg," ");
    }
}

const ele = {name: document.getElementById("name")};
const ele2 = {name: document.getElementById("password")};
const ele3 = {name: document.getElementById("confirm")};
const ele4 = {name: document.getElementById("tel")};

function checkName(name){  //验证name
     var num = /^[0-9]{6,100}/;
     var word = /^[A-Za-z]{6,100}/;
     var n = /[A-Za-z0-9]{6,100}$/;
     if(name === ""){
        addClass(ele.name,"borderRed"); //添加class，使输入框变红
        document.getElementById("wrong").style.display = "none";
        document.getElementById("titleNull").style.display = "inline-block"; //显示不得为空
        return false;
    } else if(!n.test(name) || num.test(name)|| word.test(name)) {
         removeClass(ele.name, "borderRed");
         document.getElementById("wrong").style.display = "inline";//显示格式错误
         document.getElementById("titleNull").style.display = "none";
     }
     else  if(n.test(name)){
         document.getElementById("titleNull").style.display = "none";
         document.getElementById("wrong").style.display = "none";
     }
}
ele.name.onfocus = function(){ //name失去焦点则检测
    checkName(ele.name.value);
};
ele.name.oninput = function () {
    checkName(ele.name.value)
};

function checkpassword(name){
    var n = /[A-Za-z0-9]{6,100}$/;
    if(name === ""){
        addClass(ele2.name,"borderRed"); //添加class，使输入框变红
        document.getElementById("wrong2").style.display = "none";
        document.getElementById("titleNull2").style.display = "inline-block"; //显示不得为空
        return false;
    } else if(name!=="" &&  !n.test(name) ) {
        removeClass(ele2.name, "borderRed");
        document.getElementById("wrong2").style.display = "inline";//显示格式错误
        document.getElementById("titleNull2").style.display = "none";
    }
    else  if(n.test(name) && name !== ele.name.value){
        document.getElementById("titleNull2").style.display = "none";
        document.getElementById("wrong2").style.display = "none";
        document.getElementById("w1").style.display = "none";
    }
    else if(name === ele.name.value){
        document.getElementById("w1").style.display = "inline";
        document.getElementById("titleNull2").style.display = "none";
        document.getElementById("wrong2").style.display = "none";
    }
}
ele2.name.onfocus = function(){
    checkpassword(ele2.name.value);
};
ele2.name.oninput = function(){
    checkpassword(ele2.name.value);
};

function checkconfirm(name){
    var n = ele2;
    if(name === ""){
        addClass(ele3.name,"borderRed"); //添加class，使输入框变红
        document.getElementById("wrong3").style.display = "none";
        document.getElementById("titleNull3").style.display = "inline-block"; //显示不得为空
        return false;
    } else if(name!=="" && name !== ele2.name.value ) {
        removeClass(ele3.name, "borderRed");
        document.getElementById("wrong3").style.display = "inline";//显示与密码不符
        document.getElementById("titleNull3").style.display = "none";
    }
    else  if(name === ele2.name.value ){
        document.getElementById("wrong3").style.display = "none";
        document.getElementById("titleNull3").style.display = "none";
    }
}
ele3.name.onfocus = function(){
    checkconfirm(ele3.name.value);
};
ele3.name.oninput = function(){
    checkconfirm(ele3.name.value);
};

function checktel(name){
    var n =/^[0-9]{11}$/;
    if(name === ""){
        addClass(ele4.name,"borderRed"); //添加class，使输入框变红
        document.getElementById("wrong4").style.display = "none";
        document.getElementById("titleNull4").style.display = "inline-block"; //显示不得为空
        return false;
    } else if(name!=="" && !n.test(name) ) {
        removeClass(ele4.name, "borderRed");
        document.getElementById("wrong4").style.display = "inline";//显示格式错误
        document.getElementById("titleNull4").style.display = "none";
    }
    else  if( n.test(name)){
        document.getElementById("titleNull4").style.display = "none";
        document.getElementById("wrong4").style.display = "none";
    }
}
ele4.name.onfocus = function(){
    checktel(ele4.name.value);
};
ele4.name.oninput = function(){
    checktel(ele4.name.value);
};