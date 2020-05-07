const arr = [];
arr[0]="images/works/large/007003.jpg";
arr[1]="images/works/large/005040.jpg";
arr[2]="images/works/large/008010.jpg";

var i = 0;

function changeimage()
{
    const ima = document.getElementById("image");
    ima.src=arr[i];
    i++;
    if( i===3 )
        i=0;
    setTimeout("changeimage();stopdisappear();startappear();change()",2500)
}

var opacity = 1;

function change() {
    setTimeout("startdisappear()",2000);
    setTimeout(" stopappear()",3000)
}

function startdisappear() {
    opa = 1;
    s = setInterval("opacity -= 0.1;" +
        "document.getElementById(\"image\").style.opacity = opacity;",50)
}

function stopdisappear() {
    clearInterval(s);
    opa = 0;
}

function startappear() {
    opa = 0;
    t = setInterval("opacity += 0.1;" +
        "document.getElementById(\"image\").style.opacity = opacity;",50)
}

function stopappear() {
    clearInterval(t);
    document.getElementById("image").style.opacity = "1";
}
