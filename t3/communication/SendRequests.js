MyGameBoard.prototype.getPrologRequest = function(requestString, onSuccess, onError, port)
{
  var requestPort = port || 8081;
  var request = new XMLHttpRequest();
  var game = this;
  request.open('GET', 'http://localhost:'+requestPort+'/'+requestString, true);

  request.onload = onSuccess.bind(this) || function(data){console.log("Request successful. Reply: " + data.target.response); return data.target.response;};
  request.onerror = onError || function(){console.log("Error waiting for response");};

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send();
};

MyGameBoard.prototype.init_board = function(){
  this.getPrologRequest('init_board', this.getBoard);
};

MyGameBoard.prototype.init_players =function(){
this.getPrologRequest('init_players', this.getPlayers);
};

MyGameboard.prototype.getBoard = function(data){
  let temp = data.target.response;
			  temp = temp.slice(3,temp.length -2);
			  this.prologBoard= temp.split("),p(");

};


MyGameBoard.prototype.getPlayers= function(data){
  let temp = data.target.response;
        temp = temp.slice(2,temp.length -2);
        let temparray= temp.split("],[");
        this.player1 = temparray[0].split(",");
        this.player2 = temparray[1].split(",");
}
