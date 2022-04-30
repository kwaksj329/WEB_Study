import { loginFlag } from './../../index.js';
/*
  1. 로그인 했는지 확인
  2. 로그인이 됐다면 팔로우한 유저의 게시물 정보를 json 에서 가져와서 section에 넣어주기
  3. 로그인이 안됐다면 적절하게 예외처리
*/

const readContentEvent = () => {
  const data = [];

  const html = data.length == 0 ? `<p> 다른유저를 팔로우 하고 게시물을 확인하세요!</p> ` : `<p> ...게시물... </p>`
  document.querySelector('section').insertAdjacentHTML('beforeend', html);
}

const readContentInit = () => {
  readContentEvent();
}

export default readContentInit;