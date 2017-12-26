main_menu:-
  write('\33\[2J'),
  nl,nl,
  write(' _____________________________________________________________________ '),nl,
  write('|                                                                     |'),nl,
  write('|                                                                     |'),nl,
  write('|                                                                     |'),nl,
  write('|      _____                                ____        _ _           |'),nl,
  write('|     / ____|                              |  _ \\      | | |          |'),nl,
  write('|    | |      __ _ _ __ ___  _ __    ___   | |_) | ___ | | | ___      |'),nl,
  write('|    | |     / _  |  _   _ \\|  _ \\  / _ \\  |  _ < / _ \\| | |/ _ \\     |'),nl,
  write('|    | |___ | (_| | | | | | | |_) || (_) | | |_) |  __/| | | (_) |    |'),nl,
  write('|     \\_____ \\ ___|_| |_| |_|  __/ \\ ___/  |____/ \\___ |_|_|\\___/     |'),nl,
  write('|                           | |                                       |'),nl,
  write('|                           |_|                                       |'),nl,
  write('|                                                                     |'),nl,
  write('|                         1 - Player vs Player                        |'),nl,
  write('|                         2 - Player vs CPU                           |'),nl,
  write('|                         3 - CPU vs CPU                              |'),nl,
  write('|                         4 - How To Play                             |'),nl,
  write('|                         5 - Exit Game                               |'),nl,
  write('|                                                                     |'),nl,
  write('|                                                                     |'),nl,
  write('|_____________________________________________________________________|'),nl,
  nl,nl,
  write('Please choose an option: '),
  read(R),
  R<6,
  menu(R).


menu(1):-
  initialize_board(Board),
  initialize_players(Player1, Player2),
  game(Board, Player1, Player2, 1).

menu(2):-
  initialize_board(Board),
  initialize_players(Player, Bot),
  write('Choose Bot Level:'), nl,
  write('0 - Easy'), nl,
  write('1 - Hard'), nl,
  read(Level),
  play_vs_bot(Board, Player, Bot, 1, 1, Level).


menu(3):-
  initialize_board(Board),
  initialize_players(Bot1, Bot2),
  write('Choose 1st Bot Level:'), nl,
  write('0 - Easy'), nl,
  write('1 - Hard'), nl,
  read(Level1), nl,
  write('Choose 2nd Bot Level:'), nl,
  write('0 - Easy'), nl,
  write('1 - Hard'), nl,
  read(Level2),
  displays(1, Bot1, Bot2, Board, 1),
  bot_vs_bot(Board, Bot1, Bot2, Level1, Level2, 1, 1).

menu(4):-
  display_how_to_play.

menu(5):-
  display_quit.
