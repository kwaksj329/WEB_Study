import signInit from './src/Sign/index.js';
import searchUserInit from './src/SearchUser/index.js';
import writeContentInit from './src/WriteContent/index.js';
import readContentInit from './src/ReadContent/index.js';

export let loginFlag = false; // 현재 로그인이 되어있는지 확인을 위한 변수
export let userId = ''; // 현재 유저 아이디 :: 게시물 작성시에 필요할 것 같아서 넣어놨습니다 :)

signInit();
searchUserInit();
writeContentInit();
readContentInit();
