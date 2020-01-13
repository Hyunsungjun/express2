const crypto = require('crypto'); //비번이 입력되면 암호화하기 위해 임포트
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session); //2-3줄라인은 세션유지
const bodyParser = require('body-parser'); //프론트에서 서버로 get이나 post할때 파라미터를 받기위해 사용
const mysql = require('mysql'); //5-8 디비 관련
var dbConfig = require('./dbconfig');
var conn = mysql.createConnection(dbOptions);
conn.connect();