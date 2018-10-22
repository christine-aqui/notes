import random
# print('rock')
# print('paper')
# print('scissors')

player1 = input('Player 1, make your move: ')
player_ai = random.randint(1,3)
if player_ai == 1:
    player_ai = 'rock'
elif player_ai == 2:
    player_ai = 'paper'
else:
    player_ai = 'scissors'
print("AI payer picked: {} ".format(player_ai))

if player1 == player_ai:
    print('its a tie')
elif player1 == 'rock':
    if player_ai == 'scissors':
        print("player 1 wins")
    elif  player_ai == 'paper':
        print('player 2 wins')
elif player1 == 'paper':
    if player_ai == 'rock':
        print('player 1 wins')
    elif player_ai == 'scissors':
        print('player 2 wins')
elif player1 == 'scissors':
    if player_ai == 'rock':
        print('player 2 wins')
    elif player_ai == 'paper':
        print('player 1 wins')
else: 
    print('something went wrong')
