using System;


class Program
{
    static void Main(string[] args)
    {
        //To get GPA, call Functions.GetGPA(double array, int array).
        //Double array is an array of scores, eg { 93, 88, 97, 100, 73, 79, 85 } must match length of Credits
        //Int arrat is an array of levels, see comments from line 17 to line 27, must match length of Credits
        Console.WriteLine(Convert.ToString(Functions.GetGPA(new double[] { 83, 97, 79, 93, 91, 100, 97 }, new int[] { 1, 1, 1, 2, 1, 1, 1 })));
        Console.ReadLine();
    }
}

class Functions
{
    public static double[,] NonLang = { { 4.5,  4.2,  3.9,  3.6,  3.3,  3.0,  2.6,  0 }, //IB/AP/AL Non-Language //Row 0
                                        { 4.3,  4.0,  3.7,  3.4,  3.1,  2.8,  2.4,  0 }, //H Non-Language 
                                        { 4.15, 3.85, 3.55, 3.25, 2.95, 2.65, 2.25, 0 }, //S+ Non-Language
                                        { 4.0,  3.7,  3.4,  3.1,  2.8,  2.5,  2.1,  0 } }; //S Non-Language //Row 3

    public static double[,] Lang = { { 4.5, 4.2, 3.9, 3.6, 3.3, 3.0, 2.6, 0 }, //IBA/IBB Chinese English AP English    //Row 0
                                        { 4.4, 4.1, 3.8, 3.5, 3.2, 2.9, 2.5, 0 }, //H+ Chinese English
                                        { 4.3, 4.0, 3.7, 3.4, 3.1, 2.8, 2.4, 0 }, //H Chinese English
                                        { 4.2, 3.9, 3.6, 3.3, 3.0, 2.7, 2.3, 0 }, //S/AP/VII/VI/V Chinese    //Not used for English
                                        { 4.1, 3.8, 3.5, 3.2, 2.9, 2.6, 2.2, 0 }, //IV/III Chinese    //S+ English
                                        { 4.0, 3.7, 3.4, 3.1, 2.8, 2.5, 2.1, 0 } }; //II/I Chinese    //Row 5

    public static double[,] Credits = { { 6.5, 6.0, 4.0, 3.0, 3.0, 3.0, 3.0 }, //Eng, Math, His, Chi, etc
                                        { 1,   0,   0,   1,   0,   0,   0 } }; //Lan, Lan, NL, etc, 1 = Lang, 0 = Non-Lang

    public static int Rank(double scores)
    {
        if (scores >= 92.5)
            return 0; //一档
        else if (scores >= 87.5)
            return 1; //二档, etc.
        else if (scores >= 82.5)
            return 2;
        else if (scores >= 77.5)
            return 3;
        else if (scores >= 72.5)
            return 4;
        else if (scores >= 67.5)
            return 5;
        else if (scores >= 59.5)
            return 6;
        else if (scores >= 0)
            return 7;
        else
            throw new System.ArgumentOutOfRangeException("Scores cannot be negative!"); //error, scores are negative
    }

    public static double GetRawGPA(int subject, int level, double score, bool lang) //find the GPA in the arrays given conditions
    {
        if (lang)
            return Lang[level, Rank(score)];
        else
            return NonLang[level, Rank(score)];
    }

    public static double GetGPA(double[] scores, int[] levels) //returns the 
    {
        if (levels.Length != Credits.GetLength(1) || scores.Length != Credits.GetLength(1))
            throw new System.FormatException("Wrong number of subjects!");
        double totalGrade = 0;
        double totalCredit = 0;
        for (int subject = 0; subject < levels.Length; subject++) //repeat for the number of lang subjects
        {
            totalGrade += GetRawGPA(subject, levels[subject], scores[subject], System.Convert.ToBoolean(Credits[1, subject])) * Credits[0, subject];
            totalCredit += Credits[0, subject];
        }
        return Math.Round((totalGrade / totalCredit), 3);
    }
}

