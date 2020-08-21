var list_product = JSON.parse(localStorage.getItem('victim'))
var camera = document.getElementById("_button");
camera.onclick = function()
{
    console.log(list_product)
    var _camera = document.getElementById("camera")
    var warning = document.getElementById("warning");
   _camera.remove();
   warning.remove();
   var html ='';
   html =  '   <div class ="column-2-6" style="margin-left:35%;margin-top:7%" id="img">   '  + 
   '            <img src="images/avatar.jpg" id="users">  '+
   '               <div class="scanning">  '  + 
   '                   <div class="loading-bar-box">  '  + 
   '                        <div class="loading-bar" id="loading-bar"></div>  ' + 
   '                   </div>   ' +   
   '                   <button class="btn btn-primary scan-btn" onclick="Scanning()">Bắt đầu scan</button>    ' +
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
    if(list_product.nhietdo < 37)
    {
    html =  '    <div class="column-4-6" style="margin-left:0">  '  + 
    '                       <h4 class="status" style="font-size: 30px;">Tình trạng</h4> =  '  + 
    '                                       <p style="margin-left:3%;font-size:25px;color:red;font-weight: bold;">Nhiệt độ: '+ list_product.nhietdo +'°C</p>  '  + 
    '                                       <h5 style="margin-left:3%;font-size: 20px;"><span style="text-align:center;">Triệu chứng nhiễm bệnh covid 19:</h5>     '  + 
    '                                       <div class="column-3-6-1" style="margin-left:15px;margin-top:10px;margin-right:0px">   '  + 
    '                                           <form>   '  + 
    '                                                 <input type="checkbox" id="check1" name="fruit-1" value="something">    '  + 
    '                                                 <label class="form-check-label" for="check1" style="width:100%">Đau họng</label>   '  + 
    '                                               <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">    '  + 
    '                                                 <label class="form-check-label" for="check2"style="width:90.5%">Đau cổ</label>    '  + 
    '                                                 <input type="checkbox" class="form-check-input" id="check3" name="option2" value="something">    '  + 
    '                                                 <label class="form-check-label" for="check3"style="width:99.5%">Tiêu chảy</label>   '  + 
    '                                           </form>   '  + 
    '                                       </div>    '  + 
    '                                       <div class="column-3-6-2" style="margin-top:10px">   '  + 
    '                                         <form>   '  + 
    '                                           <input type="checkbox" id="check4" name="fruit-1" value="something" checked>    '  + 
    '                                           <label class="form-check-label" for="check4" style="width:50%">Khó thở</label>    '  + 
    '                                           <input type="checkbox" class="form-check-input" id="check5" name="option2" value="something">    '  + 
    '                                           <label class="form-check-label" for="check5" style="width:90%">Mất khả năng nói hoặc cử động  </label>    '  + 
    '                                           <input type="checkbox" class="form-check-input" id="check6" name="option2" value="something">     '  + 
    '                                           <label class="form-check-label" for="check6"style="width:81.5%">Mất vị giác hoặc khứu giác</label>     '  + 
    '                                         </form>     '  + 
    '                                       </div>      '  + 
    '                                       <div id="2_button" style="margin-left: 75%;margin-top:23%">    '  + 
    '                                         <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Xác nhận</button>  '  + 
    '     '  + 
    '                                          '  + 
    '                                         <div class="modal fade" id="myModal" role="dialog">  '  + 
    '                                           <div class="modal-dialog">  '  + 
    '                                              '  + 
    '                                             Modal content  '  + 
    '                                             <div class="modal-content">  '  + 
    '                                               <div class="modal-header">  '  + 
    '                                                 <h4 class="modal-title" style="color:rgb(93, 170, 93)">Lời khuyên</h4>  '  + 
    '                                                 <button type="button" class="close" data-dismiss="modal">&times;</button>  '  + 
    '                                               </div>  '  + 
    '                                               <div class="modal-body">  '  + 
    '                                                 <p>Bạn không có nguy cơ đi nhiễm covid, vui lòng nhấn <span style="color:rgb(93, 170, 93)">tiếp tục</span> để nghe lời khuyên của bác sĩ</p>  '  + 
    '                                               </div>  '  + 
    '                                               <div class="modal-footer">  '  + 
    '                                                 <button type="button" class="btn btn-default" data-dismiss="modal" onclick=" return page5()">Tiếp tục</button>  '  + 
    '                                               </div>  '  + 
    '                                             </div>  '  + 
    '                                               '  + 
    '                                           </div>  '  + 
    '                                         </div>  '  + 
    '                                       </div>        '  + 
    '                                  </div>     ' ; 
    }
    else {
        html =  '    <div class="column-4-6" style="margin-left:0">  '  + 
        '                       <h4 class="status" style="font-size: 30px;">Tình trạng</h4> =  '  + 
        '                                       <p style="margin-left:3%;font-size:25px;color:red;font-weight: bold;">Nhiệt độ: '+ list_product.nhietdo +'°C</p>  '  + 
        '                                       <h5 style="margin-left:3%;font-size: 20px;"><span style="text-align:center;">Triệu chứng nhiễm bệnh covid 19:</h5>     '  + 
        '                                       <div class="column-3-6-1" style="margin-left:15px;margin-top:10px;margin-right:0px">   '  + 
        '                                           <form>   '  + 
        '                                                 <input type="checkbox" id="check1" name="fruit-1" value="something">    '  + 
        '                                                 <label class="form-check-label" for="check1" style="width:100%">Đau họng</label>   '  + 
        '                                               <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">    '  + 
        '                                                 <label class="form-check-label" for="check2"style="width:90.5%">Đau cổ</label>    '  + 
        '                                                 <input type="checkbox" class="form-check-input" id="check3" name="option2" value="something">    '  + 
        '                                                 <label class="form-check-label" for="check3"style="width:99.5%">Tiêu chảy</label>   '  + 
        '                                           </form>   '  + 
        '                                       </div>    '  + 
        '                                       <div class="column-3-6-2" style="margin-top:10px">   '  + 
        '                                         <form>   '  + 
        '                                           <input type="checkbox" id="check4" name="fruit-1" value="something" checked>    '  + 
        '                                           <label class="form-check-label" for="check4" style="width:50%">Khó thở</label>    '  + 
        '                                           <input type="checkbox" class="form-check-input" id="check5" name="option2" value="something">    '  + 
        '                                           <label class="form-check-label" for="check5" style="width:90%">Mất khả năng nói hoặc cử động  </label>    '  + 
        '                                           <input type="checkbox" class="form-check-input" id="check6" name="option2" value="something">     '  + 
        '                                           <label class="form-check-label" for="check6"style="width:81.5%">Mất vị giác hoặc khứu giác</label>     '  + 
        '                                         </form>     '  + 
        '                                       </div>      '  + 
        '                                       <div id="2_button" style="margin-left: 75%;margin-top:23%">    '  + 
        '                                         <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Xác nhận</button>  '  + 
        '     '  + 
        '                                          '  + 
        '   <div class="modal fade" id="myModal" role="dialog">  '  + 
        '                                     <div class="modal-dialog">  '  + 
        '                                        '  + 
        '                                       <div class="modal-content">  '  + 
        '                                         <div class="modal-header">  '  + 
        '                                           <h4 class="modal-title" style="color:red">Cảnh báo</h4>  '  + 
        '                                           <button type="button" class="close" data-dismiss="modal">&times;</button>  '  + 
        '                                         </div>  '  + 
        '                                         <div class="modal-body">  '  + 
        '                                           <p>Bạn có nguy cơ bị nhiễm covid-19 rất cao. Chúng tôi sẽ có những biện pháp dành cho bạn.Vui lòng nhấn nút <span style="color:red">tiếp tục!</span></p>  '  + 
        '                                         </div>  '  + 
        '                                         <div class="modal-footer">  '  + 
        '                                           <button type="button" class="btn btn-default" data-dismiss="modal" onclick=" return page()">Tiếp tục</button>  '  + 
        '                                         </div>  '  + 
        '                                       </div>  '  + 
        '                                         '  + 
        '                                     </div>  '  + 
        '                                  </div>  ' ; 
    }
    var main = document.getElementById("main");
    main.innerHTML = html;

}

var width = 0;
var interval; 
function Scanning() {
    var scanning = document.querySelector('button.scan-btn'); 
    var bar = document.getElementById('loading-bar');
    var img = document.getElementById('users'); 
    img.src = 'images/avatar.jpg';
    bar.style.display = 'block';
    resetLoading(); 
    interval = setInterval(Load, 50); 
    function Load() {
        scanning.innerText = 'Scanning : ' + width + '%'; 
        if (width >= 101) {
            clearInterval(interval); 
            scanning.innerText = 'RESCAN'; 
            img.src = 'images/m.jpeg';
            alert('Qúa trình kiểm tra hoàn tất ! Vui lòng nhấn xác nhận để thực hiện bước tiếp theo.')
            bar.style.display = 'none'; 
        }
        else {
            width++; 
            bar.style.width = width + '%'; 
        }
    }
}

function resetLoading() {
    var bar = document.getElementById('loading-bar');
    width = 0;
    clearInterval(interval)
    bar.style.width = width + '%';
}