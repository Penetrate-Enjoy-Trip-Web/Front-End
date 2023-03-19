
function openModal(data) {
	document.getElementById('modal1').style.display = 'block';
	location.href = data;
}

function closeModal() {
	document.getElementById('modal').style.display = 'none';
	location.href = "main.html"
}

function login(){
	const id = document.getElementById("id").value;
	sessionStorage.setItem("id",id);
	closeModal();
}

function checkId() { 
    alert("사용 가능한 아이디입니다.");
}

