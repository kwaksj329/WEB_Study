import { loginFlag } from './../../index.js';

/*
  1. 로그인 여부를 확인하고 로그인이 안되어있다면 예외처리
  2. 게시물 작성 버튼을 누르면 게시물 작성 모달 or 게시물 작성 페이지로 이동
  3. 게시물 작성에는 게시물 제목과 내용만 있으면 됨
  4. 해당 input들을 받아 JSON에 저장
*/

const writeContentEvent = () => {
  const userBtn = document.getElementById('writeContent');
  userBtn.addEventListener('click', ()=>alert("writeContent"));
}

const writeContentInit = () => {
  writeContentEvent();
}

export default writeContentInit;
