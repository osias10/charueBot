var util = require('util');
var {EventEmitter} = require('events');


var net = require('net');


class socketSer extends EventEmitter{
    constructor(){
        super();
        this._this = this;

        this.socketS = (socket) => {
            console.log(socket.address().address + " connected.");
            // client로 부터 오는 data를 화면에 출력
            socket.write("hello"+"\n[*Fin*]\n");
        
            socket.on('data', function(data){
                //console.log('rcv:' + data);
                //socket.write('반송'+data+"\n[*Fin*]\n");
                this.on('fromDiscord',function(){
                    console.log('');
                });
        
            });

        

    }
}


module.exports = socketSer;