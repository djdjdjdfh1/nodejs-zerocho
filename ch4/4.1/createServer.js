const http = require('http');

http.createServer((req, res) => {
  // 여기에 어떻게 응답할 지 적어줍니다.
  res.write('<h1>Hello Node!</h1>');
  res.write('<p>Hello Server!</p>');
  res.end('<p>Hello</p>');
}).listen(8080, () => {
  console.log('8080번 포트')
});
