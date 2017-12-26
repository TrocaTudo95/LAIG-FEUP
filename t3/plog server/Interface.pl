show_piece(p(Piece, Position)):-
  Piece == 0 ->
  symbol(Position, Val),
  write(Val);
  symbol(Piece, Val),
  write(Val).

display_how_to_play:-
  write('\33\[2J'),
  write('HOW TO PLAY'), nl, nl,
  write('In Campo Bello each player tries to remove as many '), nl,
  write('of their own pieces from the board as possible. '), nl, nl,
  write('When it is your turn, you must choose one of your movers '), nl,
  write('and jump another mover with it.  '), nl,
  write('If the piece you jumped over was one of yours, '), nl,
  write('remove the jumped piece from the game. '), nl, nl,
  write('If the piece you jumped was one of your opponent\'s, '), nl,
  write('then you may remove any one of your movers on the board '), nl,
  write(' (including the one that did the jumping if you choose). '), nl, nl,
  write('At the end of the game, each player scores 1 point '), nl,
  write('for each of their movers outside their starting area '), nl,
  write('and 3 points for each mover that is in their starting area. '), nl, nl,
  write('The player with the fewest points wins! '), nl,
  nl, write('1 - Turn back to menu'),
  nl, write('2 - Quit'),
  nl, read(R),
  (R==1,
  main_menu);
  display_quit.

display_quit:-
  nl, nl, write('Bye bye... Hope to see you soon!'), nl, nl.

display_round(Round, 0):-
  write('\33\[2J'),
  write('ROUND '),
  write(Round), nl, nl, nl,
  write('It\'s your turn Player YELLOW_GREEN!'),
  nl.

display_round(Round, 1):-
  write('\33\[2J'),
  write('ROUND '),
  write(Round), nl, nl, nl,
  write('It\'s your turn Player BLUE_RED!'),
  nl.

display_players(Player1, Player2):-
  nl, write('Player BLUE_RED:'),
  nl,
  display_player(Player1),
  nl, nl, write('Player YELLOW_GREEN:'),
  nl,
  display_player(Player2),
  nl, nl.

display_player([S|E]):-
  write(' '),
  symbol(S, Symbol),
  write(Symbol),
  display_player(E).
display_player([]).


display_board(Board):-
  write('________________________________________________'),
  nl,
  write('|                                               |'),
  nl,
  write('|                                               |'),
  nl,
  write('|             '),
  display_elems_line_1_13(Board, 1).

display_board([]).

display_elems_line_1_13([S|E], Counter):-
  Counter =< 4,
  Counter1 is Counter+1,
  show_piece(S),
  write('    '),
  display_elems_line_1_13(E, Counter1).
display_elems_line_1_13(E, 5):-
  write('          |'),
  nl,
  write('|                                               |'),
  nl,
  display_line_2_12(E).

display_line_2_12(Board):-
  write('|                '),
  display_elems_line_2_12(Board, 1).
display_elems_line_2_12([S|E], Counter):-
  Counter =< 3,
  Counter1 is Counter+1,
  show_piece(S),
  write('    '),
  display_elems_line_2_12(E, Counter1).
display_elems_line_2_12(E, 4):-
  write('             |'),
  nl,
  write('|                                               |'),
  nl,
  display_line_3_11(E).

display_line_3_11(Board):-
  write('|                   '),
  display_elems_line_3_11(Board, 1).
display_elems_line_3_11([S|E],Counter):-
  Counter =< 2,
  Counter1 is Counter+1,
  show_piece(S),
  write('    '),
  display_elems_line_3_11(E, Counter1).
display_elems_line_3_11(E, 3):-
    write('                |'),
    nl,
    display_line_4_10(E).

display_line_4_10(Board):-
  write('|   '),
  display_elems_line_4_10(Board, 1).
display_elems_line_4_10([S|E], 1):-
  show_piece(S),
  display_elems_line_4_10_1(E).
display_elems_line_4_10_1([S|E]):-
  write('                                     '),
  show_piece(S),
  display_elems_line_4_10_1(E, 1).
display_elems_line_4_10_1(E, 1):-
  write('   |'),
  nl,
  display_line_5_9(E).

display_line_5_9(Board):-
  write('|        '),
  display_elems_line_5_9(Board, 0).
display_elems_line_5_9([S|E], 0):-
  show_piece(S),
  display_elems_line_5_9_1(E, 1).
display_elems_line_5_9_1([S|E], Counter):-
  Counter =< 2,
  Counter1 is Counter+1,
  write('            '),
  show_piece(S),
  display_elems_line_5_9_1(E, Counter1).
display_elems_line_5_9_1(E, 3):-
  write('         |'),
  nl,
  display_line_6_8(E).

display_line_6_8(Board):-
  write('|   '),
  display_elems_line_6_8(Board, 1).
display_elems_line_6_8([S|E], 1):-
  show_piece(S),
  write('         '),
  display_elems_line_6_8_1(E).
display_elems_line_6_8_1([S|E]):-
  show_piece(S),
  write('               '),
  display_elems_line_6_8_2(E).
display_elems_line_6_8_2([S|E]):-
  show_piece(S),
  write('         '),
  display_elems_line_6_8_3(E).
display_elems_line_6_8_3([S|E]):-
  show_piece(S),
  display_elems_line_6_8(E, 2).
display_elems_line_6_8(E, 2):-
  write('   |'),
  nl,
  display_line_7(E).

display_line_7(Board):-
  write('|        '),
  display_elems_line_7(Board,1).
display_elems_line_7([S|E], Counter):-
  Counter =< 2,
  Counter1 is Counter+1,
  show_piece(S),
  write('        '),
  display_elems_line_7_1(E, Counter1).
display_elems_line_7_1([S|E], Counter):-
  Counter =< 2,
  show_piece(S),
  write('  '),
  display_elems_line_7_2(E, Counter).
display_elems_line_7_2([S|E], Counter):-
  show_piece(S),
  write('  '),
  display_elems_line_7(E, Counter).
display_elems_line_7_1([S|E], 3):-
  show_piece(S),
  write('         |'),
  nl,
  display_line_8(E).

display_line_8(Board):-
  write('|   '),
  display_elems_line_8(Board, 1).
display_elems_line_8([S|E], 1):-
  show_piece(S),
  write('         '),
  display_elems_line_8_1(E).
display_elems_line_8_1([S|E]):-
  show_piece(S),
  write('               '),
  display_elems_line_8_2(E).
display_elems_line_8_2([S|E]):-
  show_piece(S),
  write('         '),
  display_elems_line_8_3(E).
display_elems_line_8_3([S|E]):-
  show_piece(S),
  display_elems_line_8(E, 2).
display_elems_line_8(E, 2):-
  write('   |'),
  nl,
  display_line_9(E).

display_line_9(Board):-
  write('|        '),
  display_elems_line_9(Board, 0).
display_elems_line_9([S|E], 0):-
  show_piece(S),
  display_elems_line_9_1(E, 1).
display_elems_line_9_1([S|E], Counter):-
  Counter =< 2,
  Counter1 is Counter+1,
  write('            '),
  show_piece(S),
  display_elems_line_9_1(E, Counter1).
display_elems_line_9_1(E, 3):-
  write('         |'),
  nl,
  display_line_10(E).

display_line_10(Board):-
  write('|   '),
  display_elems_line_10(Board, 1).
display_elems_line_10([S|E], 1):-
  show_piece(S),
  display_elems_line_10_1(E).
display_elems_line_10_1([S|E]):-
  write('                                     '),
  show_piece(S),
  display_elems_line_10_1(E, 1).
display_elems_line_10_1(E, 1):-
  write('   |'),
  nl,
  display_line_11(E).

display_line_11(Board):-
  write('|                   '),
  display_elems_line_11(Board, 1).
display_elems_line_11([S|E],Counter):-
  Counter =< 2,
  Counter1 is Counter+1,
  show_piece(S),
  write('    '),
  display_elems_line_11(E, Counter1).
display_elems_line_11(E, 3):-
  write('                |'),
  nl,
  display_line_12(E).

display_line_12(Board):-
  write('|                                               |'),
  nl,
  write('|                '),
  display_elems_line_12(Board, 1).
display_elems_line_12([S|E], Counter):-
  Counter =< 3,
  Counter1 is Counter+1,
  show_piece(S),
  write('    '),
  display_elems_line_12(E, Counter1).
display_elems_line_12(E, 4):-
  write('             |'),
  nl,
  write('|                                               |'),
  nl,
  write('|             '),
  display_elems_line_13(E, 1).

display_elems_line_13([S|E], Counter):-
  Counter =< 4,
  Counter1 is Counter+1,
  show_piece(S),
  write('    '),
  display_elems_line_13(E, Counter1).
display_elems_line_13(_, 5):-
  write('          |'),
  nl,
  write('|                                               |'),
  nl,
  display_line_end.

display_line_end:-
    write('|_______________________________________________|'), nl.
