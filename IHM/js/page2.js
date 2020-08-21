var victim = [{name:"Nguyễn Nhật Minh", nhietdo:39},
{name:"Nguyễn Sang", nhietdo:36}];

function next()
{
    var name = document.getElementById("fullname");
    for(items of victim)
    {
        if(items.name == name.value)
        {
            var temp = JSON.stringify(items)
            localStorage.setItem("victim", temp)
        }
    }   
}