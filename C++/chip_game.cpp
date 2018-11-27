#include <iostream>
#include <ctime>
#include <cstdlib>
using namespace std;

const int MAX_CHIPS = 100;
const float MAX_TURN = 0.5;

int main()
{
  //  var declarations
  bool player1Turn = true;
  bool gameOver = false;
  int chipsInPile = 0;
  int chipsTaken = 0;
  // an array
  string playerName[2];
  // ask player 1 name
  cout << "Player 1 name? \n:";
  cin >> playerName[0];
  // ask player 2 namecout << "Player 1 name? \n:";
  cout << "Player 2 name? \n:";
  cin >> playerName[1];

  // seeding the random number-gen
  srand(time(0));

  chipsInPile = (rand() % MAX_CHIPS) + 1;
  cout << "This round will start with " << chipsInPile << " chips in the pile \n";
  cout << "You can only take " << static_cast<int>(chipsInPile * MAX_TURN) << " from the pile." << endl;

  return 0;
}