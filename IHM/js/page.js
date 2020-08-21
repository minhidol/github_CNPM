
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
   '    <div class="_button" style="margin-top:5%">    '  + 
   '           <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal" style="width:100px">Hủy</button>  '  + 
   '           <!-- Modal -->  '  + 
   '           <div class="modal fade" id="myModal" role="dialog">  '  + 
   '             <div class="modal-dialog">  '  + 
   '               '  + 
   '               <!-- Modal content-->  '  + 
   '               <div class="modal-content">  '  + 
   '                 <div class="modal-header">  '  + 
   '                   <button type="button" class="close" data-dismiss="modal">&times;</button>  '  + 
   '                 </div>  '  + 
   '                 <div class="modal-body">  '  + 
   '                   <p>Bạn có chắc chắn với quyết định của bạn không?</p>  '  + 
   '                 </div>  '  + 
   '                 <div class="modal-footer">  '  + 
   '                   <button type="button" class="btn btn-default" data-dismiss="modal">không</button>  '  + 
   '                   <button type="button" class="btn btn-default" data-dismiss="modal" onclick="return_pagehome()">có</button>  '  + 
   '                 </div>  '  + 
   '               </div>  '  + 
   '                 '  + 
   '             </div>  '  + 
   '           </div>  '  + 
   '           <button type="button" class="btn btn-success" style="width:100px" id="confirm" onclick="return confirm()">Xác nhận</button>   '  + 
   '       </div>   '  + 
   '            ' ; 
   var main = document.getElementById("main");
   main.innerHTML = html;
}

function confirm()
{
   
    var html = '';
    html =  '     <div class="column-4-6" style="margin-left:20%">  '  + 
    '                     <h4 class="status" style="font-size: 30px;">Tình trạng</h4>  '  + 
    '                     <p style="margin-left:3%;font-size:25px;color:red;font-weight: bold;">Nhiệt độ: 39°C</p>  '  + 
    '                     <h5 style="margin-left:3%;font-size: 20px;"><span style="text-align:center;">Triệu chứng nhiễm bệnh covid 19:</h5>  '  + 
    '                     <div class="column-3-6-1" style="margin-left:15px;margin-top:10px">  '  + 
    '                         <form>  '  + 
    '                               <input type="checkbox" id="check1" name="fruit-1" value="something">  '  + 
    '                               <label class="form-check-label" for="check1">Đau đầu</label>  '  + 
    '                               <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">  '  + 
    '                               <label class="form-check-label" for="check2">Đau họng</label>  '  + 
    '                               <input type="checkbox" class="form-check-input" id="check3" name="option2" value="something">  '  + 
    '                               <label class="form-check-label" for="check3">Tiêu chảy</label>  '  + 
    '                         </form>  '  + 
    '                     </div>  '  + 
    '                     <div class="column-3-6-2" style="margin-top:10px">  '  + 
    '                       <form>  '  + 
    '                         <input type="checkbox" id="check4" name="fruit-1" value="something" checked>  '  + 
    '                         <label class="form-check-label" for="check4">Khó thở</label>  '  + 
    '                         <input type="checkbox" class="form-check-input" id="check5" name="option2" value="something">  '  + 
    '                         <label class="form-check-label" for="check5">Mất khả năng nói hoặc cử động  </label>  '  + 
    '                         <input type="checkbox" class="form-check-input" id="check6" name="option2" value="something">  '  + 
    '                         <label class="form-check-label" for="check6">Mất vị giác hoặc khứu giác</label>  '  + 
    '                       </form>  '  + 
    '                     </div>  '  + 
    '                     <div id="2_button" style="margin-left: 75%;margin-top:23%">   '  + 
    '                         <button type="button" class="btn btn-success" style="width:100px;font-size:16px">Xác nhận</button>   '  + 
    '                                   </div>    '  + 
    '                </div>  ' ; 
    var main = document.getElementById("main");
    main.innerHTML = html;

}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })