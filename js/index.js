function processDelete(id, e){
    e.preventDefault();
    if(confirm('Are you sure?')){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function (){
            if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                alert('Delete success!');
                window.location.reload();
            }
        }
        xmlHttpRequest.open('DELETE', API_URL + `/${id}`);
        xmlHttpRequest.send();
    }
}

function loadData() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            var contentHtml = '';
            for (let i = 0; i < jsonResponse.length; i++) {
                contentHtml += `<tr>
                                    <td>${jsonResponse[i].id}</td>
                                    <td>${jsonResponse[i].name}</td>
                                    <td>${jsonResponse[i].wage}</td>                            
                                </tr>`;
            }
            document.getElementById('datacontent').innerHTML = contentHtml;
        }
    }
    xmlHttpRequest.open('GET', API_URL);
    xmlHttpRequest.send();
}

document.addEventListener('DOMContentLoaded', function (){
    loadData();
})