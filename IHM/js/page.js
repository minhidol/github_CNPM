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
   '           <button type="button" class="btn btn-success" style="width:100px" id="confirm" onclick="return confirm()" disabled>Xác nhận</button>   '  + 
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

function page()
{
    location.href ="page_4.html";
}
function page5()
{
    location.href ="page_5.html";
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
            alert('Qúa trình kiểm tra hoàn tất ! Vui lòng nhấn xác nhận để thực hiện bước tiếp theo.'); 
            bar.style.display = 'none'; 
            document.getElementById('confirm').disabled = false; 
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

// var link = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7305199538746!2d106.66228201474868!3d10.755239892335908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efa87dc6d6d%3A0x4feb0a1e755b6d62!2zQuG7h25oIHZp4buHbiDEkOG6oWkgaOG7jWMgWSBkxrDhu6NjIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1598016828152!5m2!1svi!2s",
//             "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.707145314885!2d106.65754181474875!3d10.75703849233467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef1efebf7d7%3A0x9014ce53b8910a58!2zQuG7h25oIHZp4buHbiBDaOG7oyBS4bqreQ!5e0!3m2!1svi!2s!4v1598016858078!5m2!1svi!2s",
//             "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.767124574079!2d106.67772001474879!3d10.752422692337841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0229e6c5c5%3A0xc23ac2a87e65214c!2zQuG7h25oIHZp4buHbiBOaGnhu4d0IMSQ4bubaQ!5e0!3m2!1svi!2s!4v1598021148412!5m2!1svi!2s", 
//             "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3685932657854!2d106.70027551474904!3d10.783055692316996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f49837fb3b1%3A0x40292ba4f0715549!2zQuG7h25oIHZp4buHbiBOaGkgxJHhu5NuZyAtIEPhu5VuZyAz!5e0!3m2!1svi!2s!4v1598021252998!5m2!1svi!2s", 
//             "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7225382335705!2d106.65959281474883!3d10.755854092335518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef0359b2f71%3A0xb1228743c8a02efa!2zQuG7h25oIHZp4buHbiBIw7luZyBWxrDGoW5n!5e0!3m2!1svi!2s!4v1598021429100!5m2!1svi!2s"]; 
// const locations = document.querySelectorAll('.location'); 
// var map = document.getElementById("frame");
// for (var i = 0; i < 5; i++) {
//     locations[i].addEventListener('click', function() {
//         map.src = link[i]; 
//     })
// }