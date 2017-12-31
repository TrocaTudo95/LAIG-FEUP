:-use_module(library(sockets)).
:-use_module(library(lists)).
:-use_module(library(codesio)).
:-include('CampoBello.pl').
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%                                        Server                                                   %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% To run, enter 'server.' on sicstus command line after consulting this file.
% You can test requests to this server by going to http://localhost:8081/<request>.
% Go to http://localhost:8081/quit to close server.

% Made by Luis Reis (ei12085@fe.up.pt) for LAIG course at FEUP.

port(8081).

% Server Entry Point
server :-
	port(Port),
	write('Opened Server'),nl,nl,
	socket_server_open(Port, Socket),
	server_loop(Socket),
	socket_server_close(Socket),
	write('Closed Server'),nl.

% Server Loop
% Uncomment writes for more information on incomming connections
server_loop(Socket) :-
	repeat,
	socket_server_accept(Socket, _Client, Stream, [type(text)]),
		% write('Accepted connection'), nl,
	    % Parse Request
		catch((
			read_request(Stream, Request),
			read_header(Stream)
		),_Exception,(
			% write('Error parsing request.'),nl,
			close_stream(Stream),
			fail
		)),

		% Generate Response
		handle_request(Request, MyReply, Status),
		format('Request: ~q~n',[Request]),
		format('Reply: ~q~n', [MyReply]),

		% Output Response
		format(Stream, 'HTTP/1.0 ~p~n', [Status]),
		format(Stream, 'Access-Control-Allow-Origin: *~n', []),
		format(Stream, 'Content-Type: text/plain~n~n', []),
		format(Stream, '~p', [MyReply]),

		% write('Finnished Connection'),nl,nl,
		close_stream(Stream),
	(Request = quit), !.

close_stream(Stream) :- flush_output(Stream), close(Stream).

% Handles parsed HTTP requests
% Returns 200 OK on successful aplication of parse_input on request
% Returns 400 Bad Request on syntax error (received from parser) or on failure of parse_input
handle_request(Request, MyReply, '200 OK') :- catch(parse_input(Request, MyReply),error(_,_),fail), !.
handle_request(syntax_error, 'Syntax Error', '400 Bad Request') :- !.
handle_request(_, 'Bad Request', '400 Bad Request').

% Reads first Line of HTTP Header and parses request
% Returns term parsed from Request-URI
% Returns syntax_error in case of failure in parsing
read_request(Stream, Request) :-
	read_line(Stream, LineCodes),
	print_header_line(LineCodes),

	% Parse Request
	atom_codes('GET /',Get),
	append(Get,RL,LineCodes),
	read_request_aux(RL,RL2),

	catch(read_from_codes(RL2, Request), error(syntax_error(_),_), fail), !.
read_request(_,syntax_error).

read_request_aux([32|_],[46]) :- !.
read_request_aux([C|Cs],[C|RCs]) :- read_request_aux(Cs, RCs).


% Reads and Ignores the rest of the lines of the HTTP Header
read_header(Stream) :-
	repeat,
	read_line(Stream, Line),
	print_header_line(Line),
	(Line = []; Line = end_of_file),!.

check_end_of_header([]) :- !, fail.
check_end_of_header(end_of_file) :- !,fail.
check_end_of_header(_).

% Function to Output Request Lines (uncomment the line bellow to see more information on received HTTP Requests)
% print_header_line(LineCodes) :- catch((atom_codes(Line,LineCodes),write(Line),nl),_,fail), !.
print_header_line(_).

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%                                       Commands                                                  %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Require your Prolog Files here

parse_input(handshake, handshake).
parse_input(test(C,N), Res) :- test(C,Res,N).
parse_input(quit, goodbye).

parse_input(init_board,Board):-
	initialize_board(Board).

	parse_input(init_players,Player1-Player2):-
		initialize_players(Player1, Player2).

	parse_input(possible_moves(Position),List):-
		possible_moves(Position,List).


a:-parse_input(make_move(p7,10,[p(p1,1),p(p2,2),p(p3,3),p(p4,4),p(p5,5),p(p6,6),p(p7,7),p(p8,8),p(p9,9),p(p11,11),p(p21,21),p(p15,15),p(0,10),p(p25,25),p(p12,12),p(p18,18),p(p28,28),p(p22,22),p(p16,16),p(0,20),p(0,50),p(0,30),p(p26,26),p(p13,13),p(p19,19),p(p29,29),p(p23,23),p(p17,17),p(0,40),p(p27,27),p(p14,14),p(p24,24),p(p38,38),p(p39,39),p(p35,35),p(p36,36),p(p37,37),p(p31,31),p(p32,32),p(p33,33),p(p34,34)],[p1,p2,p3,p4,p5,p6,p7,p8,p9,p31,p32,p33,p34,p35,p36,p37,p38,p39],[p11,p12,p13,p14,p15,p16,p17,p18,p19,p21,p22,p23,p24,p25,p26,p27,p28,p29]),A-B-C-D).

b:-parse_input(game_over([p(p1,1),p(p2,2),p(0,3),p(0,4),p(0,5),p(0,6),p(0,7),p(p3,8),p(p4,9),p(0,11),p(p21,21),p(0,15),p(0,10),p(0,25),p(p12,12),p(p11,18),p(0,28),p(0,22),p(0,16),p(0,20),p(p22,50),p(0,30),p(0,26),p(0,13),p(0,19),p(0,29),p(p23,23),p(p17,17),p(0,40),p(p27,27),p(p14,14),p(p24,24),p(0,38),p(p34,39),p(0,35),p(0,36),p(0,37),p(p31,31),p(0,32),p(p33,33),p(0,34)],[p1,p2,p3,p4,p31,p33,p34],[p11,p12,p14,p17,p21,p22,p23,p24,p27]),R).


	parse_input(make_move(Piece,FinalPosition,Board,Player1,Player2),NewBoard-NewPlayer1-NewPlayer2-CapturedPiece):-
		member(Piece, Player1),
		find_pos(Board, Piece, Pos),
		verify_empty_pos(FinalPosition,Board),
		verify_next_pos(Board,Piece,FinalPosition),
		get_piece_between(Board, Piece, FinalPosition, CapturedPiece, CapturedPiecePos),
		update_board(Board, Piece, FinalPosition, CapturedPiece, CapturedPiecePos, NewBoard),
		update_player(Player1, Player2, CapturedPiece, NewPlayer1, NewPlayer2).


		parse_input(game_over(Board,Player1,Player2),R):-
			((\+ isnt_game_over(Board,Player1);
		  \+ isnt_game_over(Board,Player2))-> R=1; R=0).


		parse_input(calculate_score(Board,Player1,Player2),Score1-Score2):-
			Score=0,
			calculate_score(Board, Player1, Score, Score1),
		 	Score3=0,
	    calculate_score(Board, Player2, Score3, Score2).

			parse_input(bot_move(Board,Player1,Player2,1),NewBoard-NewPlayer1-NewPlayer2-Piece-FinalPosition-CapturedPiece):-
				bot_play(Board,Player1,Player2,Player1,NewPlayer2,NewPlayer1,NewBoard,0,Piece,FinalPosition,CapturedPiece).

			parse_input(bot_move(Board,Player1,Player2,2),NewBoard-NewPlayer1-NewPlayer2-Piece-FinalPosition-CapturedPiece):-
				bot_play(Board,Player1,Player2,Player1,NewPlayer2,NewPlayer1,NewBoard,1,Piece,FinalPosition,CapturedPiece).



test(_,[],N) :- N =< 0.
test(A,[A|Bs],N) :- N1 is N-1, test(A,Bs,N1).
