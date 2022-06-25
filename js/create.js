document.addEventListener('DOMContentLoaded', function () {
    var employeeForm = document.forms['employee-from'];
    var btnSubmit = employeeForm ['submit'];
    var textName = employeeForm['name'];
    var textWage = employeeForm['wage'];
    if (btnSubmit !== null && btnSubmit !== undefined) {
        btnSubmit.onclick = function (event) {
            if(employeeForm.checkValidity()){ // gọi đến hàm validate của form
                event.preventDefault(); // ngăn việc form bị submit đi.
                // get data from form.
                var objData = {
                    name: textName.value,
                    wage: textWage.value,
                }
                postData(objData);
            }
        }
    }
})

function postData(objData) {
    console.log(objData)
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {

            window.location.href = '/thi_springboot/index.html';
        }
    }
    xmlHttpRequest.open('POST', API_URL);
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/json'); // bắt buộc phải vị trí này
    xmlHttpRequest.send(JSON.stringify(objData));
}
