let express = require('express'); // 노드로 웹서버 실행해주는 패키지
let app = express();
var ejs = require('ejs');
const session = require('express-session');
let router = require('./router/main')(app); //라우팅해주는 코드  main.js파일이 실행

let port = 3000;
let hostname = 'localhost'

app.set('views', __dirname + '/views'); //10-12 html, ejs파일이 프론쪽이라는 설정을 하는 부분  views/폴더 밑에 모두 있다고 하고 주로 html이나 ejs로 프론트를 개발한다는 것을 알려줍니다 실제 views폴더로 들어가보면 ejs와 html파일이 있는것을 볼 수 있을겁니다 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);//html free template 2019 검색해서 프리템플릿을 찾아보면 
app.use(express.static('public'));//js,css,image,font등과 같은 리소스 파일들을 모두 public폴더 아래에 둔다는 의미  소스 코드를 각 서랍속에 종류별로 정리하겠다는 의미로 보면 된다. html은 views css폴더, js폴더 image폴더 이렇게 구성한다고 보면된다 예를들면 public/css/style.css파일의 경우에 css는 모두 public폴더 밑에 있다고 13번에 선언을 했으니 views/login.ejs 파일의 7라인에 <link rel'stylesheet' href='/css/style.css' type='text/css' /> 에서 href='/css/style.css'가 됩니다

var server = app.listen(port, function () { //15-20번 까지가 웹 서버 구동입니다
    console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});
