possible_moves(1,[3,8]).
possible_moves(2,[4,9]).
possible_moves(3,[1,8]).
possible_moves(4,[2,9]).
possible_moves(5,[7,10]).
possible_moves(6,[null]).
possible_moves(7,[5,10]).
possible_moves(8,[1,3,30,50]).
possible_moves(9,[2,4,20,50]).
possible_moves(10,[5,7,19,29,40]).
possible_moves(11,[13,18]).
possible_moves(12,[14,19]).
possible_moves(13,[11,18]).
possible_moves(14,[12,19]).
possible_moves(15,[17,20]).
possible_moves(16,[null]).
possible_moves(17,[15,20]).
possible_moves(18,[11,13,40,50]).
possible_moves(19,[12,14,10,50]).
possible_moves(20,[15,17,9,39,30]).
possible_moves(21,[23,28]).
possible_moves(22,[24,29]).
possible_moves(23,[21,28]).
possible_moves(24,[22,29]).
possible_moves(25,[27,30]).
possible_moves(26,[null]).
possible_moves(27,[25,30]).
possible_moves(28,[21,23,40,50]).
possible_moves(29,[22,24,10,50]).
possible_moves(30,[25,27,8,38,20]).
possible_moves(31,[33,38]).
possible_moves(32,[34,39]).
possible_moves(33,[31,38]).
possible_moves(34,[32,39]).
possible_moves(35,[37,40]).
possible_moves(36,[null]).
possible_moves(37,[35,40]).
possible_moves(38,[31,33,30,50]).
possible_moves(39,[32,34,20,50]).
possible_moves(40,[35,37,28,18,10]).
possible_moves(50,[8,9,18,19,28,29,28,39]).

color(1,blue).
color(2,blue).
color(3,blue).
color(4,blue).
color(5,blue).
color(6,blue).
color(7,blue).
color(8,blue).
color(9,blue).
color(10,blue).
color(11,yellow).
color(12,yellow).
color(13,yellow).
color(14,yellow).
color(15,yellow).
color(16,yellow).
color(17,yellow).
color(18,yellow).
color(19,yellow).
color(20,yellow).
color(21,green).
color(22,green).
color(23,green).
color(24,green).
color(25,green).
color(26,green).
color(27,green).
color(28,green).
color(29,green).
color(30,green).
color(31,red).
color(32,red).
color(33,red).
color(34,red).
color(35,red).
color(36,red).
color(37,red).
color(38,red).
color(39,red).
color(40,red).
color(50,center).

piece_color(p1,blue).
piece_color(p2,blue).
piece_color(p3,blue).
piece_color(p4,blue).
piece_color(p5,blue).
piece_color(p6,blue).
piece_color(p7,blue).
piece_color(p8,blue).
piece_color(p9,blue).

piece_color(p11,yellow).
piece_color(p12,yellow).
piece_color(p13,yellow).
piece_color(p14,yellow).
piece_color(p15,yellow).
piece_color(p16,yellow).
piece_color(p17,yellow).
piece_color(p18,yellow).
piece_color(p19,yellow).

piece_color(p21,green).
piece_color(p22,green).
piece_color(p23,green).
piece_color(p24,green).
piece_color(p25,green).
piece_color(p26,green).
piece_color(p27,green).
piece_color(p28,green).
piece_color(p29,green).

piece_color(p31,red).
piece_color(p32,red).
piece_color(p33,red).
piece_color(p34,red).
piece_color(p35,red).
piece_color(p36,red).
piece_color(p37,red).
piece_color(p38,red).
piece_color(p39,red).

adj_pos(1,[2,5]).
adj_pos(2,[1,3,5,6]).
adj_pos(3,[2,4,6,7]).
adj_pos(4,[3,7]).
adj_pos(5,[1,2,6,8]).
adj_pos(6,[1,2,3,4,5,7,8,9]).
adj_pos(7,[3,4,6,9]).
adj_pos(8,[5,6,9,10]).
adj_pos(9,[6,7,8,10]).
adj_pos(10,[8,9,20,30,50]).
adj_pos(11,[12,15]).
adj_pos(12,[11,13,15,16]).
adj_pos(13,[12,14,16,17]).
adj_pos(14,[13,17]).
adj_pos(15,[11,13,16,18]).
adj_pos(16,[11,12,13,14,15,17,18,19]).
adj_pos(17,[13,14,16,19]).
adj_pos(18,[15,16,19,20]).
adj_pos(19,[16,17,18,20]).
adj_pos(20,[18,19,10,40,50]).
adj_pos(21,[22,25]).
adj_pos(22,[21,23,25,26]).
adj_pos(23,[22,24,26,27]).
adj_pos(24,[23,27]).
adj_pos(25,[21,23,26,28]).
adj_pos(26,[21,22,23,24,25,27,28,29]).
adj_pos(27,[23,24,26,29]).
adj_pos(28,[25,26,29,30]).
adj_pos(29,[26,27,28,30]).
adj_pos(30,[28,29,10,40,50]).
adj_pos(31,[32,35]).
adj_pos(32,[31,33,35,36]).
adj_pos(33,[32,34,36,37]).
adj_pos(34,[33,37]).
adj_pos(35,[31,32,36,38]).
adj_pos(36,[31,32,33,34,35,37,38,39]).
adj_pos(37,[33,34,36,39]).
adj_pos(38,[35,36,39,40]).
adj_pos(39,[36,37,38,40]).
adj_pos(40,[38,39,20,30,50]).
adj_pos(50,[10,20,30,40]).

symbol(p1,'B1').
symbol(p2,'B2').
symbol(p3,'B3').
symbol(p4,'B4').
symbol(p5,'B5').
symbol(p6,'B6').
symbol(p7,'B7').
symbol(p8,'B8').
symbol(p9,'B9').

symbol(p11,'Y1').
symbol(p12,'Y2').
symbol(p13,'Y3').
symbol(p14,'Y4').
symbol(p15,'Y5').
symbol(p16,'Y6').
symbol(p17,'Y7').
symbol(p18,'Y8').
symbol(p19,'Y9').

symbol(p21,'G1').
symbol(p22,'G2').
symbol(p23,'G3').
symbol(p24,'G4').
symbol(p25,'G5').
symbol(p26,'G6').
symbol(p27,'G7').
symbol(p28,'G8').
symbol(p29,'G9').

symbol(p31,'R1').
symbol(p32,'R2').
symbol(p33,'R3').
symbol(p34,'R4').
symbol(p35,'R5').
symbol(p36,'R6').
symbol(p37,'R7').
symbol(p38,'R8').
symbol(p39,'R9').


symbol(1, '01').
symbol(2, '02').
symbol(3, '03').
symbol(4, '04').
symbol(5, '05').
symbol(6, '06').
symbol(7, '07').
symbol(8, '08').
symbol(9, '09').
symbol(10, '10').
symbol(11, '11').
symbol(12, '12').
symbol(13, '13').
symbol(14, '14').
symbol(15, '15').
symbol(16, '16').
symbol(17, '17').
symbol(18, '18').
symbol(19, '19').
symbol(20, '20').
symbol(21, '21').
symbol(22, '22').
symbol(23, '23').
symbol(24, '24').
symbol(25, '25').
symbol(26, '26').
symbol(27, '27').
symbol(28, '28').
symbol(29, '29').
symbol(30, '30').
symbol(31, '31').
symbol(32, '32').
symbol(33, '33').
symbol(34, '34').
symbol(35, '35').
symbol(36, '36').
symbol(37, '37').
symbol(38, '38').
symbol(39, '39').
symbol(40, '40').
symbol(50, '50').
