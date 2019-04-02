using System;

public class Result
{
    Unit[] rawGPAs;
    double gpaFinal;
	public Result(Unit[] GPACs)
	{
     rawGPAs = GPACs;
    }

    public double getGPA()
    {
        double credit = 0;
        double total = 0;
        for (int count = 0; count < rawGPACs.length; count++)
        {
            if (rawGPACs[count].getScore() != 0)
            {
                credit += (double)(rawGPACs[count].getCredit());//Import Credit
                total += rawGPACs[count].getGPA();//Adds all the raw GPA
            }
        }

        gpaFinal = (total / credit).toFixed(2);
        return gpaFinal;
    }
    public string getRank()
    {
        string rank;
        if (gpaFinal <= 3) { rank = " Try harder!"; }
        else if (gpaFinal >= 3) { rank = " Sweet!"; }
        else { rank = "Error!"; }

        return rank;
    }
}

class Unit
{

    public Unit(string name,  double credit, bool type)
    {
        rawName = name;
        rawCredit = credit;
        rawIdentifier = type;
        rawScore = 0;
        convertType(rawIdentifier);
        rawLevel = "S";
        NLIBList = [0, 2.6, 3.0, 3.3, 3.6, 3.9, 4.2, 4.5];
        NLAPList = [0, 2.6, 3.0, 3.3, 3.6, 3.9, 4.2, 4.5]; //Credits for Language AP IN ORDER
        NLHPLUSList = [0, 2.25, 2.65, 2.95, 3.25, 3.55, 3.85, 4.15]; //Credits for Language S+ IN ORDER
        NLHList = [0, 2.4, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3]; //Credits for NonLanguage H IN ORDER
        NLSPLUSList = [0, 2.25, 2.65, 2.95, 3.25, 3.55, 3.85, 4.15]; //Credits for NonLanguage S+ IN ORDER
        NLSList = [0, 2.1, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0]; //Credits for NonLanguage S IN ORDER
        LAPList = [0, 2.6, 3.0, 3.3, 3.6, 3.9, 4.2, 4.5]; //Credits for Language AP IN ORDER
        LHPLUSList = [0, 2.5, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4]; //Credits for Language H+ IN ORDER
        LHList = [0, 2.4, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3]; //Credits for Language H IN ORDER
        LSPLUSList = [0, 2.2, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1]; //Credits for Language S+ IN ORDER
        LSList = [0, 2.1, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0]; //Credits for Language S IN ORDER
    }

    convertType(type)
    {
        if (rawIdentifier == 0)
        { //0 is Non-Language, 1 is Language
            rawType = false;
            rawTypename = "Non-Language";
        }
        else
        {
            rawType = true;
            rawTypename = "Language";
        }
    }

    setCredit(credit)
    {
        rawCredit = credit;
    }

    setType(type)
    {
        rawType = type;
    }

    setScore(score)
    {
        rawScore = score;
    }

    setLevel(level)
    {
        rawLevel = level;
    }

    getLevel()
    {
        return rawLevel;
    }

    getScore()
    {
        return rawScore;
    }

    getCredit()
    {
        return rawCredit;
    }

    getType()
    {
        return rawType;
    }

    //Data Importation Function
    getGPA()
    {
        if (rawType == true)
        {  //false is non-language, true is language
            return rawCredit * getL();
        }
        else
        {
            return rawCredit * getNL();
        }
    }

    //Subject Categorization Function
    getNL()
    {
        //console.log(Level);
        if (rawLevel == "AP")
        {
            return calGPA(NLAPList)
      }
        if (rawLevel == "H+")
        {
            return calGPA(NLHPLUSList)
  

    }
        if (rawLevel == "H")
        {
            return calGPA(NLHList)
  
    }
        if (rawLevel == "S+")
        {
            return calGPA(NLSPLUSList)
  
    }
        if (rawLevel == "S")
        {
            return calGPA(NLSList)
      }

    }

    getL()
    {
        //console.log(Level);
        if (rawLevel == "AP")
        {
            return calGPA(LAPList)
        }
        if (rawLevel == "H+")
        {
            return calGPA(LHPLUSList)
    
    }
        if (rawLevel == "H")
        {
            return calGPA(LHList)
    
    }
        if (rawLevel == "S+")
        {
            return calGPA(LSPLUSList)
    
    }
        if (rawLevel == "S")
        {
            return calGPA(LSList)
        }

    }

    calGPA(list)
    {
        //console.log(list);
        //console.log(listname);
        //console.log(data.[listname])
        //console.log("AP",Score)
        if (rawScore <= 59)
            gpa = list[0];
        if (rawScore > 59 && rawScore <= 67)
            gpa = list[1];
        if (rawScore > 67 && rawScore <= 72)
            gpa = list[2];
        if (rawScore > 72 && rawScore <= 77)
            gpa = list[3];
        if (rawScore > 77 && rawScore <= 82)
            gpa = list[4];
        if (rawScore > 82 && rawScore <= 87)
            gpa = list[5];
        if (rawScore > 87 && rawScore <= 92)
            gpa = list[6];
        if (rawScore > 92 && rawScore <= 100)
            gpa = list[7];
        //console.log(gpa)
        return gpa;
    }

    toString()
    {
        return ("Subject Name: " + rawName + " Subject Credit: " + rawCredit + " Subject Type: " + rawTypename + " Subject Score: " + rawScore + " Subject Level: " + rawLevel);
    }

}
