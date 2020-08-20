
var camera = document.getElementById("_button");

camera.onclick = function()
{
    var _camera = document.getElementById("camera")
    var warning = document.getElementById("warning");
   _camera.remove();
   warning.remove();
   var html ='';
   html =  '   <div class ="column-2-6" style="margin-left:35%;margin-top:7%" id="img">   '  + 
   '            <img src="images/m.jpeg" id="users">  '+
   '               <div class="scanning">  '  + 
   '                   <h5>Trạng thái scanning:</h5>  '  + 
   '                   <h4>100%</h4>  '  + 
   '               </div>  '  + 
   '               <div class="_button" style="margin-top:5%">  '  + 
   '                   <button type="button" class="btn btn-danger" style="width:100px">Hủy</button>  '  + 
   '                   <button type="button" class="btn btn-success" style="width:100px" id="confirm" onclick="return confirm()">Xác nhận</button>  '  + 
   '               </div>  '  + 
   '          </div>  ' ; 
   var main = document.getElementById("main");
   main.innerHTML = html;
}

function confirm()
{
   
    var html = '';
    html =  '     <div class="column-4-6" style="margin-left:20%">  '  + 
    '               <h4 class="status" style="font-size: 30px;">Tình trạng</h4>  '  + 
    '               <p style="margin-left:3%;font-size:20px;">Nhiệt độ: 39°C</p>  '  + 
    '     '  + 
    '               <h5 style="margin-left:3%;font-size: 20px;"><span style="text-align:center">Triệu chứng nhiễm bệnh covid 19:</h5>  '  + 
    '                <div class="column-3-6-1">  '  + 
    '                       <div class="checkbox">  '  + 
    '                   <label>  '  + 
    '               <input type="checkbox" value="">  '  + 
    '               <span class="cr" ><i class="cr-icon glyphicon glyphicon-ok"></i></span>  '  + 
    '                   Đau đầu  '  + 
    '             </label>  '  + 
    '           </div>  '  + 
    '           <div class="checkbox" style="margin-top:10px">  '  + 
    '             <label>  '  + 
    '               <input type="checkbox" value="" checked>  '  + 
    '               <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>  '  + 
    '                   Đau họng  '  + 
    '             </label>  '  + 
    '           </div>  '  + 
    '           <div class="checkbox" style="margin-top:10px">  '  + 
    '               <label>  '  + 
    '                 <input type="checkbox" value="" checked>  '  + 
    '                 <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>  '  + 
    '                     Tiêu chảy  '  + 
    '               </label>  '  + 
    '             </div>  '  + 
    '           </div>  '  + 
    '       <div class="column-3-6-2">  '  + 
    '           <div class="checkbox" style="margin-top:10px">  '  + 
    '             <label>  '  + 
    '               <input type="checkbox" value="">  '  + 
    '               <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>  '  + 
    '                   Khó thở  '  + 
    '             </label>  '  + 
    '           </div>  '  + 
    '           <div class= "checkbox" style="margin-top:10px">  '  + 
    '             <label>  '  + 
    '               <input type="checkbox" value="" checked>  '  + 
    '               <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>  '  + 
    '                   Mất khả năng nói hoặc cử động  '  + 
    '             </label>  '  + 
    '           </div>  '  + 
    '           <div class="checkbox" style="margin-top:10px">  '  + 
    '               <label>  '  + 
    '                 <input type="checkbox" value="" checked>  '  + 
    '                 <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>  '  + 
    '                   Mất vị giác hoặc khứu giác  '  + 
    '               </label>  '  + 
    '             </div>  '  + 
    '       </div><br>  '  + 
    '       <div id="2_button" style="margin-left: 60%;margin-top:20%">  '  + 
    '       <button type="button" class="btn btn-success" style="width:100px;font-size:16px">Xác nhận</button>  '  + 
    '           </div>  '  + 
    '   </div>          '  + 
    '  </div>    ' ; 
    var main = document.getElementById("main");
    main.innerHTML = html;

}
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })