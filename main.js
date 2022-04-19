// BÀI TẬP 01----------------------------
// - Đầu vào:
//     + Số có 3 chữ số
// - Xử lý:
//     + So sánh từng số với nhau. Số nào nhỏ nhất thì sẽ được xếp đầu tiên, Số nào nhỏ thứ hai thì sẽ được xếp ở vị trí thứ hai, Số nào lớn nhất thì sẽ được xếp ở vị trí cuối. 
// - Đầu ra:
//     + Show ra 3 vị trí 1, 2, 3

document.getElementById("btnEx01").onclick = function(){
   var ex01_num01 =  parseInt(document.getElementById("ex01_num01").value);
   var ex01_num02 =  parseInt(document.getElementById("ex01_num02").value);
   var ex01_num03 =  parseInt(document.getElementById("ex01_num03").value);

   if(ex01_num01 <= ex01_num02 && ex01_num01 <= ex01_num02){
    if(ex01_num02 <= ex01_num03){
        var ex01_slot01 = ex01_num01;
        var ex01_slot02 = ex01_num02;
        var ex01_slot03 = ex01_num03;
    }
    else{
        var ex01_slot01 = ex01_num01;
        var ex01_slot02 = ex01_num03;
        var ex01_slot03 = ex01_num02; 
    }
   }
   if(ex01_num02 <= ex01_num01 && ex01_num02 <= ex01_num03){
    if(ex01_num01 <= ex01_num03){
        var ex01_slot01 = ex01_num02;
        var ex01_slot02 = ex01_num01;
        var ex01_slot03 = ex01_num03;
    }
    else{
        var ex01_slot01 = ex01_num02;
        var ex01_slot02 = ex01_num03;
        var ex01_slot03 = ex01_num01; 
    }
   }
   if(ex01_num03 <= ex01_num01 && ex01_num03 <= ex01_num02){
    if(ex01_num01 <= ex01_num02){
        var ex01_slot01 = ex01_num03;
        var ex01_slot02 = ex01_num01;
        var ex01_slot03 = ex01_num02;
    }
    else{
        var ex01_slot01 = ex01_num03;
        var ex01_slot02 = ex01_num02;
        var ex01_slot03 = ex01_num01; 
    }
   }
   document.getElementById("ex01_result").innerHTML = "Thứ tự tăng dần: " + ex01_slot01 + " " + ex01_slot02 + " " + ex01_slot03;
   document.getElementById("ex01_result").classList.add("output");
}

// BÀI TẬP 02----------------------------
// - Đầu vào:
//     + Nhập vào một trong những ký tự b, B, m, M, a, A, e, E
// - Xử lý:
//     + Nếu đầu vào là b hoặc B thì kết quả là Chào Bố
//     + Nếu đầu vào là m hoặc M thì kết quả là Chào Mẹ
//     + Nếu đầu vào là a hoặc A thì kết quả là Chào Anh trai
//     + Nếu đầu vào là e hoặc E thì kết quả là Chào Em gái
// - Đầu ra:
//     + Show ra kết quả

document.getElementById("btnEx02").onclick = function(){
   var ex02_user = (document.getElementById("ex02_user").value).toUpperCase();
   console.log(ex02_user)
    
   if (ex02_user == "B"){
       document.getElementById("ex02_result").innerHTML = "Chào Bố";
       document.getElementById("ex02_result").classList.add("output");
   }
   else if (ex02_user == "M"){
    document.getElementById("ex02_result").innerHTML = "Chào Mẹ";
    document.getElementById("ex02_result").classList.add("output");
   }
   else if (ex02_user == "A"){
    document.getElementById("ex02_result").innerHTML = "Chào Anh trai";
    document.getElementById("ex02_result").classList.add("output");
   }
   else if (ex02_user == "E"){
    document.getElementById("ex02_result").innerHTML = "Chào Em gái";
    document.getElementById("ex02_result").classList.add("output");
   }
   else{
    document.getElementById("ex02_result").innerHTML = "Mình không biết bạn là ai!";
    document.getElementById("ex02_result").classList.add("output");   
   }
}

// BÀI TẬP 03----------------------------
// - Đầu vào:
//     + Nhập vào 3 số
// - Xử lý:
//     + Nếu số chia cho 2 dư 0 thì sẽ cộng biến đến số chẵn lên một
//     + Ngược lại biến đếm số lẽ lên một
// - Đầu ra:
//     + Tổng số lẻ
//     + Tổng số chẵn

document.getElementById("btnEx03").onclick = function(){
    var ex03_num01 =  parseInt(document.getElementById("ex03_num01").value);
    var ex03_num02 =  parseInt(document.getElementById("ex03_num02").value);
    var ex03_num03 =  parseInt(document.getElementById("ex03_num03").value);
    var ex03_odd = 0;
    var ex03_even = 0;
    (ex03_num01%2 ==0)?ex03_even+=1:ex03_odd+=1;
    (ex03_num02%2 ==0)?ex03_even+=1:ex03_odd+=1;
    (ex03_num03%2 ==0)?ex03_even+=1:ex03_odd+=1;

    document.getElementById("ex03_result").innerHTML = "Có "+ ex03_even + " số chẵn và "+ ex03_odd + " số lẻ";
    document.getElementById("ex03_result").classList.add("output");
 }

// BÀI TẬP 04----------------------------
// - Đầu vào:
//     + Nhập vào 3 cạnh của tam giác
// - Xử lý:
//     + Nếu có hai canh bằng nhau và 3 cạnh không bằng nhau thì kết quả là tam giác cân
//     + Nếu có ba canh bằng nhau thì kết quả là tam giác đều
//     + Nếu thỏa định lý Pytago thì kết quả là tam giác vuông
// - Đầu ra:
//     + Kết quả
document.getElementById("btnEx04").onclick = function(){
    var ex04_side01 =  parseInt(document.getElementById("ex04_side01").value);
    var ex04_side02 =  parseInt(document.getElementById("ex04_side02").value);
    var ex04_side03 =  parseInt(document.getElementById("ex04_side03").value);

    if (ex04_side01 <= 0 || ex04_side02 <= 0 || ex04_side03 <= 0){
        document.getElementById("ex04_result").innerHTML = "Bạn đang nhập sai"
        document.getElementById("ex04_result").classList.add("output");
    }
    else{
        if ((ex04_side01 == ex04_side02 && ex04_side01 != ex04_side03)||(ex04_side01 == ex04_side03 && ex04_side01 != ex04_side02)||(ex04_side02 == ex04_side03 && ex04_side02 != ex04_side01)){
            document.getElementById("ex04_result").innerHTML = "Tam giác này là tam giác cân";
            document.getElementById("ex04_result").classList.add("output");
        }
        else if (ex04_side01 == ex04_side02 && ex04_side01 == ex04_side03){
            document.getElementById("ex04_result").innerHTML = "Tam giác này là tam giác đều";
            document.getElementById("ex04_result").classList.add("output");
        }
        else if (ex04_side01 == Math.sqrt((ex04_side02 * ex04_side02)+ (ex04_side03 * ex04_side03)) || ex04_side02 == Math.sqrt((ex04_side01 * ex04_side01)+ (ex04_side03 * ex04_side03)) || ex04_side03 == Math.sqrt((ex04_side01 * ex04_side01)+ (ex04_side02 * ex04_side02))){
            document.getElementById("ex04_result").innerHTML = "Tam giác này là tam giác vuông";
            document.getElementById("ex04_result").classList.add("output");
        }
        else{
            document.getElementById("ex04_result").innerHTML = "Tam giác này là tam giác thường";
            document.getElementById("ex04_result").classList.add("output");
        }
    }

 }