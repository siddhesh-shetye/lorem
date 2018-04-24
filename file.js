/*function init(){

    var data;
    var searchdata;
    
    data = document.getElementById("para").innerHTML;
    
    searchdata = document.getElementById('searchbox').value;
    searchdata.addEventListener("click", senddata());
}*/

function senddata()
{    
    var data;
    var searchdata;
    var res;
    var temp = " ";

    data = document.getElementById("para").innerHTML;
    searchdata = document.getElementById('searchbox').value;

    if (searchdata.length > 0 && data.indexOf(searchdata) > -1)
    {
        res = data.split(searchdata);
        
        document.getElementById("demo").innerHTML = res;
        
        for (var i = 0; i < res.length - 1; i++)
        {
            temp = temp + res[i] + "<span>" + searchdata + "</span>";
        }
        
        temp = temp + res[res.length - 1];
        document.getElementById('para').innerHTML = temp;
    }
}

function resetData() {
    var data = document.getElementById("para").innerHTML;
    data.replace('<span>', '');
    data.replace('</span>', '');
}

function newData() {
    var newInput = document.getElementById("searchbox").value;

    document.getElementById("para").innerHTML = document.getElementById("para").innerHTML.replace(newInput, "<b>" + newInput + "</b>");
}