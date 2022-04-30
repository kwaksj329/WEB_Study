import { loginFlag, userId} from './../../index.js';

/*
  1. 유저 버튼이 눌리는 경우 현재 로그인이 안되어있다면 로그인/회원가입 모달 or 로그인/회원가입 페이지
  2. 회원가입 버튼을 누르는 경우 입력을 받아 JSON 파일에 추가로 저장해주는 로직 필요
  3. 로그인 버튼을 누르는 경우 입력값과 JSON 파일안의 값을 비교해서 로그인 여부를 확인
  4. 로그인이 완료되면 loginFlag와 userId값 업데이트
*/

const userBtnEvent = () => {
  const userBtn = document.getElementById('user');
  userBtn.addEventListener('click', ()=>alert("hi"));
}

const signInit = () => {
  userBtnEvent();
}

export default signInit;
