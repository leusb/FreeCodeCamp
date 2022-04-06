

#model stores the bots response to player moves in a dict and chooses the most frequent/likely response
#works ok but especially vs abbey win rate is only 56%

#global variables
player_history = []
play_dict = {}
counter = 0

def player(prev_play, opponent_history=[]):
  ideal_response = {"P": "S", "R": "P", "S": "R"}
  global player_history
  global play_dict
  global  counter

#storing opponents moves in a list
  if prev_play !="":
    opponent_history.append(prev_play)

#default: pick RPS in this order until model is applied
  options = ["R","P","S"]
  guess = options[counter%len(options)]
  counter+=1
  if counter == 3:
    counter = 0

#model begins to save history:
  if len(opponent_history)>5:
#see whats the response of the bot to the players moves [-6:-1]. you can vary number.
#best results seem to be achieved with this model for game history of 5-6 games
    contra_plays="".join(player_history[-6:-1])+opponent_history[-1]
#insert into a dictionary and count occurance of bots response
    play_dict[contra_plays]=play_dict.get(contra_plays,0)+1
#list of possible choices for the next round
    possible_answers = "".join(player_history[-5:])+"R","".join(player_history[-5:])+"P","".join(player_history[-5:])+"S"

#set all combinations in play_dict to zero if they dont occure in possible_answers
    for i in possible_answers:
      if not i in play_dict.keys():
        play_dict[i]=0

#look for the possible_answers in the dictionary and pick the one, which occured most frequently
    contra = max(possible_answers, key=lambda key: play_dict[key])

#counter the possible_answers
    guess = ideal_response[contra[-1]]


  player_history.append(guess)

#this line is for the test-scenario: resets the dict for every new bot (after 999 games in this case)
  if len(opponent_history)>999:
    play_dict ={}
    opponent_history.clear()

  return guess
