function mypageUpdate() {
    alert('회원정보를 수정하시겠습니까?');
}

function mypageDelete() {
    alert('회원정보를 삭제하시겠습니까?');
}

let content = document.querySelector('#mypage-content');
let user = JSON.parse(window.sessionStorage.user);
//console.log(typeof user);
//console.log(user['name']);
//console.log(user);
content.innerHTML += `
    <div> ▶ 이름 : ${user.name}</div>
    <div> ▶ 아이디 : ${user.id}</div>
    <div> ▶ 이메일 : ${user.email}</div>
`;