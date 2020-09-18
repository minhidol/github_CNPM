function CheckValidName(inputTxt)
        {
            console.log(inputTxt);
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField");
            var input = document.getElementById("validationDefault01");
            if(inputTxt.value != '')
            {
                input.style.border = '1px solid #ccc';
                textField.textContent = ''
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
        }
        function CheckValidPhone(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_phone");
            var input = document.getElementById("validationDefault02");
            String.prototype.isNumber = function(){return /^\d+$/.test(this);}
            if(inputTxt.value != '')
            {
                if(inputTxt.value.length > 11)
                {
                    input.style.border = '1px solid red';
                    textField.textContent = '(*) Số ký tự phải luôn luôn < 12';
                    textField.style.color ='red';
                    textField.style.float = 'left';
                    textField.style.fontSize = '14px';
                    textField.style.fontWeight = '200';
                    textField.style.marginTop = '10px';
                }
                else if(inputTxt.value.length < 9)
                {

                    input.style.border = '1px solid red';
                    textField.textContent = '(*) Số điện thoại phải có ít nhất 9 chữ số';
                    textField.style.color ='red';
                    textField.style.float = 'left';
                    textField.style.fontSize = '14px';
                    textField.style.fontWeight = '200';
                    textField.style.marginTop = '10px';
                }
                else 
                {
                    if(inputTxt.value.isNumber() != true)
                    {
                        input.style.border = '1px solid red';
                        textField.textContent = '(*) Số điện thoại không được chứa chữ';
                        textField.style.color ='red';
                        textField.style.float = 'left';
                        textField.style.fontSize = '14px';
                        textField.style.fontWeight = '200';
                        textField.style.marginTop = '10px';
                    }
                    else {
                    input.style.border = '1px solid #ccc';
                    textField.textContent = '';
                    }
                }
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
        }
        function CheckValidAdress(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_Address");
            var input = document.getElementById("validationDefault03");
            if(inputTxt.value != '')
            {
                input.style.border = '1px solid #ccc';
                textField.textContent = ''
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
        }
        function CheckValidCMND(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_CMND");
            var input = document.getElementById("validationDefault04");
            String.prototype.isNumber = function(){return /^\d+$/.test(this);}
            if(inputTxt.value != '')
            {
                if(inputTxt.value.length > 9)
                {
                    input.style.border = '1px solid red';
                    textField.textContent = '(*) Số ký tự phải phải bằng 9';
                    textField.style.color ='red';
                    textField.style.float = 'left';
                    textField.style.fontSize = '14px';
                    textField.style.fontWeight = '200';
                    textField.style.marginTop = '10px';
                }
                else if(inputTxt.value.length < 9)
                {
                    input.style.border = '1px solid red';
                    textField.textContent = '(*) Số ký tự phải phải bằng 9';
                    textField.style.color ='red';
                    textField.style.float = 'left';
                    textField.style.fontSize = '14px';
                    textField.style.fontWeight = '200';
                    textField.style.marginTop = '10px';
                }
                else {
                    if(inputTxt.value.isNumber() != true)
                    {
                        input.style.border = '1px solid red';
                        textField.textContent = '(*) CMND không được chứa chữ';
                        textField.style.color ='red';
                        textField.style.float = 'left';
                        textField.style.fontSize = '14px';
                        textField.style.fontWeight = '200';
                        textField.style.marginTop = '10px';
                    }
                    else {
                    input.style.border = '1px solid #ccc';
                    textField.textContent = '';
                    }
                }
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
            
        }
        function CheckValidGenre()
        {
            var select = document.getElementById('billing_city')
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_Genre");
            if(select.value != '')
            {
                select.style.border = '1px solid #ccc';
                textField.textContent = '';
            }
            else
            {
                select.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
        }

        function CheckValid_Height(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_Height");
            var input = document.getElementById("validationDefault05");
            String.prototype.isNumber = function(){return /^\d+$/.test(this);}
            if(inputTxt.value != '')
            {
                
                    if(inputTxt.value.isNumber() != true)
                    {
                        input.style.border = '1px solid red';
                        textField.textContent = '(*) CMND không được chứa chữ';
                        textField.style.color ='red';
                        textField.style.float = 'left';
                        textField.style.fontSize = '14px';
                        textField.style.fontWeight = '200';
                        textField.style.marginTop = '10px';
                    }
                    else {
                    input.style.border = '1px solid #ccc';
                    textField.textContent = '';
                    }
                
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
            
        }

        function CheckValid_Weight(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_Weight");
            var input = document.getElementById("validationDefault06");
            String.prototype.isNumber = function(){return /^\d+$/.test(this);}
            if(inputTxt.value != '')
            {
                    if(inputTxt.value.isNumber() != true)
                    {
                        input.style.border = '1px solid red';
                        textField.textContent = '(*) CMND không được chứa chữ';
                        textField.style.color ='red';
                        textField.style.float = 'left';
                        textField.style.fontSize = '14px';
                        textField.style.fontWeight = '200';
                        textField.style.marginTop = '10px';
                    }
                    else {
                    input.style.border = '1px solid #ccc';
                    textField.textContent = '';
                    }

            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
            
        }
        function CheckValid_BenhLy(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_Benhly");
            var input = document.getElementById("validationDefault07");
            if(inputTxt.value != '')
            {
                input.style.border = '1px solid #ccc';
                textField.textContent = ''
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
        }
        function CheckValid_Img(inputTxt)
        {
            var regx = /^[0-9a-zA-Z]+$/;
            var textField = document.getElementById("textField_Img");
            var input = document.getElementById("validationDefault08");
            if(inputTxt.value != '')
            {
                input.style.border = '1px solid #ccc';
                textField.textContent = ''
            }
            else
            {
                input.style.border = '1px solid red';
                textField.style.float = 'left';
                textField.textContent = '(*) Vui lòng nhập thông tin';
                textField.style.color ='red';
                textField.style.fontSize = '14px';
                textField.style.fontWeight = '200';
                textField.style.marginTop = '10px';
            }
        }
        function Valid_Submit()
        {
            var valid_arr = []
            var name = document.getElementById("textField")
            valid_arr.push(name)
            var phone = document.getElementById("textField_phone")
            valid_arr.push(phone)
            var Address = document.getElementById("textField_Address")
            valid_arr.push(Address)
            var CMND = document.getElementById("textField_CMND")
            valid_arr.push(CMND)
            var genre = document.getElementById("textField_Genre")
            valid_arr.push(genre)
            var height = document.getElementById("textField_Height")
            valid_arr.push(height)
            var weight = document.getElementById("textField_Weight")
            valid_arr.push(weight)
            var benhly = document.getElementById("textField_Benhly")
            valid_arr.push(benhly)
            var img = document.getElementById("textField_Img")
            valid_arr.push(img)

            var input_arr = []
            var input_name = document.getElementById('validationDefault01')
            input_arr.push(input_name)
            var input_phone = document.getElementById('validationDefault02')
            input_arr.push(input_phone)
            var input_address = document.getElementById('validationDefault03')
            input_arr.push(input_address)
            var input_CMND = document.getElementById('validationDefault04')
            input_arr.push(input_CMND)
            var input_genre = document.getElementById('billing_city')
            input_arr.push(input_genre)
            var input_height = document.getElementById('validationDefault05')
            input_arr.push(input_height)
            var input_weight = document.getElementById('validationDefault06')
            input_arr.push(input_weight)
            var input_benhly = document.getElementById('validationDefault07')
            input_arr.push(input_benhly)
            var input_img = document.getElementById('validationDefault08')
            input_arr.push(input_img)
            var dem = 0;
            var dem1 = 0; 
            for(var i = 0; i < input_arr.length; i++)
            {
                if(input_arr[i].value == '')
                dem++;
            }
            for(var i = 0; i < valid_arr.length; i++)
            {
                if(valid_arr[i].innerHTML == '')
                dem1++;
            }
            var dem2 = 0;
            if(dem1 == 9 && dem == 0)
            {
                location.href = 'page_3.html'
            }
            else 
            {
                for(var i = 0; i < valid_arr.length; i++)
                {
                    if(input_arr[i].value == '')
                    {
                        input_arr[i].style.border = '1px solid red';
                        valid_arr[i].style.float = 'left';
                        valid_arr[i].textContent = '(*) Vui lòng nhập thông tin';
                        valid_arr[i].style.color ='red';
                        valid_arr[i].style.fontSize = '14px';
                        valid_arr[i].style.fontWeight = '200';
                        valid_arr[i].style.marginTop = '10px';
                    }
                }
            }
            
            
    }

