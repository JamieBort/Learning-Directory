// See ./LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/SuppliedFiles/Section04JavaTutorialExpressionsStatementsCodeBlocksMethodsAndMore/Section29MoreOnMethodsAndAChallenge/Main.java

// Create a method called displayHighScorePosition
// it should a players name as a parameter, and a 2nd parameter as a position in the high score table
// You should display the players name along with a message like " managed to get into position " and the
// position they got and a further message " on the high score table".
//
// Create a 2nd method called calculateHighScorePosition
// it should be sent one argument only, the player score
// it should return an in
// the return data should be
// 1 if the score is >=1000
// 2 if the score is >=500 and < 1000
// 3 if the score is >=100 and < 500
// 4 in all other cases
// call both methods and display the results of the following
// a score of 1500, 900, 400 and 50
//

public class Section29MoreOnMethodsAndAChallenge {

    public static void displayHighScorePosition(String name, int position) {
        int theScore = calculateHighScorePosition(position);
        System.out.println("The players: " + name + " managed to get into position: " + theScore);
    }

    public static int calculateHighScorePosition(int score) {
        if (score >= 1000)
            return 1;    // 1 if the score is >=1000
        if (score >= 500 && score < 1000)
            return 2;    // 2 if the score is >=500 and < 1000
        if (score >= 100 && score < 500)
            return 3;    // 3 if the score is >=100 and < 500
        return 4;        // 4 in all other cases
    }

}