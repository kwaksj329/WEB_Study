import { loginFlag } from './../../index.js';

/*
  1. JSON에 있는 모든 유저 정보를 가져오기
  2. 유저가 검색 input에 입력할때마다 해당 값으로 필터링을 해서 보여주기
  3. 보여준 유저에 대해 팔로우 가능
*/

const searchEvent = () => {
  const userBtn = document.getElementById('search');
  userBtn.addEventListener('click', ()=>alert("search"));
}

const searchUserInit = () => {
  searchEvent();
}

export default searchUserInit;
