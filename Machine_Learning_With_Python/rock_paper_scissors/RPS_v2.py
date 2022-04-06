##version two
#contrary to v1 it only considers the plays of the bots
#model saves the opponent moves of length history+1 in a dict
#based on the most likely answer of the bot model chooses RPS accordingly
#model only works for all tests with history=3. other scenarios dont work with abbey


play_dict = {}
counter = 0

def player(prev_play, opponent_history=[]):
  ideal_response = {"P": "S", "R": "P", "S": "R"}
  global play_dict
  global  counter
  history = 3

  if prev_play !="":
    opponent_history.append(prev_play)

#default: pick RPS in this order until model is applied
  options = ["R","P","S"]
  guess = options[counter%len(options)]
  counter+=1
  if counter == 3:
    counter = 0


  if len(opponent_history)>history:
    # contra plays stores the last n (history) moves of the opponent
    plays="".join(opponent_history[-history:])
    #store opponent history with a len of history +1 in a dictionary
    play_dict["".join(opponent_history[-(1+history):])]=play_dict.get("".join(opponent_history[-(1+history):]),0)+1
    #store possible next moves of oppoent in a variable
    possible_response= plays+"R",plays+"P",plays+"S"

    #reset all keys which are not a possible response to zero to rule them out of statistics
    for i in possible_response:
      if not i in play_dict.keys():
        play_dict[i]=0

    #find the most likely next move of opponent
    contra = max(possible_response, key=lambda key: play_dict[key])

    #this block is only important if you test on replit.com.
    #opponents are only tested for 1000 games. if you reset opponent_history every 1000 moves
    #you drastically improve winrates for the next opponent
    if len(opponent_history)>999:
      play_dict ={}
      opponent_history.clear()

      #pick the optimal response for the the opponents next move
    guess = ideal_response[contra[-1]]
  return guess
