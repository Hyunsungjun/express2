var dbConfig = {
  host: 'localhost',
  port: 3000,
  user     : 'root',
  password : 'qwer1234',
  database : 'signin1'
};
 
module.exports = dbConfig; //이게 main.js로 전송시키는 코드인건가? 아니네 전역선언인거네 그래서 main.js에서 require로 임포트하고 정보를 불러들일수 있는것