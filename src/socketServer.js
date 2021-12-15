var net = require('net');
// 서버를 생성
let socketS = (socket) => {
    console.log(socket.address().address + " connected.");
    // client로 부터 오는 data를 화면에 출력
    socket.write("hello"+"\n[*Fin*]\n");

    socket.on('data', function(data){
        console.log('rcv:' + data);
        socket.write('반송'+data+"\n[*Fin*]\n");


    });


    //socket.write("aaaaaaaa\n"+"\n[*Fin*]\n");

    

    // client와 접속이 끊기는 메시지 출력 
    socket.on('close', function(){ 
        console.log('client disconnted.'); 
    });
    // client가 접속하면 화면에 출력해주는 메시지


};





module.exports={
    socketS,
}