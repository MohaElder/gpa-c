                                
                               //[Developed by MohaElder169]//

//Initialize global variables. 
//CHANGE THESE VALUES TO CUSTOMIZE GPAC
    var credits = 30;//Main Credit
    var SubjectList = new Array ("Chi","Eng","Math","Chem","Phy","Ele1","His","Ele2")//Subjects
    var CreditList = new Array ("3.0@1","5.5@1","5.5@0","3.0@0","3.0@0","3.0@0","4.0@0","3.0@0")//Subjects'credit and the mark of whether it is language or nonlanguage. 1 = Language, 0 = NonLanguage
    var NLHList = new Array(0,2.4,2.8,3.1,3.4,3.7,4.0,4.3) //Credits for NonLanguage H IN ORDER
    var NLSPLUSList = new Array(0,2.25,2.65,2.95,3.25,3.55,3.85,4.15) //Credits for NonLanguage S+ IN ORDER
    var NLSList = new Array(0,2.1,2.5,2.8,3.1,3.4,3.7,4.0) //Credits for NonLanguage S IN ORDER
    var LAPList = new Array(0,2.4,2.8,3.1,3.4,3.7,4.1,4.3) //Credits for Language AP IN ORDER
    var LHPLUSList = new Array(0,2.5,2.9,3.2,3.5,3.8,4.1,4.4) //Credits for Language H+ IN ORDER
    var LHList = new Array(0,2.4,2.8,3.1,3.4,3.7,4.0,4.3) //Credits for Language H IN ORDER
    var LSPLUSList = new Array(0,2.2,2.6,2.9,3.2,3.5,3.8,4.1) //Credits for Language S+ IN ORDER
    var LSList = new Array(0,2.1,2.5,2.8,3.1,3.4,3.7,4.0) //Credits for Language S IN ORDER
    var N5List = new Array(2.3,2.7,3.0,3.3,3.6,3.9,4.2) //Credits for Chinese Nonnative5 IN ORDER
    var N4List = new Array(0,2.2,2.6,2.9,3.2,3.5,3.8,4.1) //Credits for Chinese Nonnative4 IN ORDER
    var N3List = new Array(0,2.2,2.6,2.9,3.2,3.5,3.8,4.1) //Credits for Chinese Nonnative3 IN ORDER
    var N2List = new Array(0,2.1,2.5,2.8,3.1,3.4,3.7,4.0) //Credits for Chinese Nonnative2 IN ORDER
    var N1List = new Array(0,2.1,2.5,2.8,3.1,3.4,3.7,4.0) //Credits for Chinese Nonnative1 IN ORDER

//StartUp Function    
function Run()
 {
   var total = 0;
   var rank = "";
   for (var count=0;count<SubjectList.length;count++)
   {      

        total += getGpa(SubjectList[count],count);//Adds all the raw GPA
   }
   var GPAFinal=total/credits;//Divides the Raw GPA with the credit.
   //GPA Satisfaction Evaluation
    if (GPAFinal <= 3 )
        {rank = " Try harder!";}
    else if (GPAFinal >=3)
        {rank = " Sweet!";}
    else
        {rank = "Error!";}
    //Present GPA
   document.getElementById("ResultArea").value = ("Your GPA is "+GPAFinal.toFixed(2)+","+rank);
}

//Data Importation Function
function getGpa(subject,count){
    var subScore = parseInt(document.getElementById(subject).value);//Import Score
    var level = subject+"Level";//Clarify Level's variable name
    var subLev = (document.getElementById(level).value);//Import Level
    var TempList = CreditList[count].split("@");//Decode CreditList
    var Credit = parseFloat(TempList[0]);//Import Credit
    var Validator = parseInt(TempList[1]);//Import Class Validator
    if (SubScore == 0)
    {
        
    }
    if (Validator == 1)//Validate the type of the subject
    {return Credit*getL(subLev,subScore);}
    else
    {return Credit*getNL(subLev,subScore);}      
}

//Subject Categorization Functions
function getNL(Level,Score){
    if(Level == "AP"){
        return NonLanguageAP(Score);
    }
    if(Level == "H"){
        return NonLanguageH(Score);
    }
    if(Level == "S2")
        return NonLanguageSPlus(Score);
    if(Level == "S1")
        return NonLanguageS(Score);
    }
function getL(Level,Score){
    if(Level == "AP"){
      return LanguageAP(Score);
    }
    if(Level == "H2"){
      return LanguageHPlus(Score);
    }
    if(Level == "H1")
      return LanguageH(Score);
    if(Level == "S2")
      return LanguageSPlus(Score);
    if(Level == "S1")
      return LanguageS(Score);
      if(Level == "N5")
        return LanguageN5(Score);
      if(Level == "N4")
        return LanguageN4(Score);
      if(Level == "N3")
        return LanguageN3(Score);
      if(Level == "N2")
        return LanguageN2(Score);
      if(Level == "N1")
        return LanguageN1(Score);
    }

//Score Comparison Functions
function NonLanguageAP(Score)
        {       
            var gpa = 0;
            if(Score<=59 )
                gpa = NLAPList[0];
            if(Score >59 && Score<=67)
                gpa = NLAPList[1];
            if(Score >67 && Score<=72)
                gpa = NLAPList[2];
            if(Score >72 && Score<=77)
                gpa = NLAPList[3];
            if(Score >77 && Score<=82)
                gpa = NLAPList[4];
            if(Score >82 && Score<=87)
                gpa = NLAPList[5];
            if(Score >87 && Score<=92)
                gpa = NLAPList[6];
            if(Score >92 && Score<=100)
                gpa = NLAPList[7];
            return gpa;
        }
function NonLanguageH(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = NLHList[0];
            if(Score >59 && Score<=67)
                gpa = NLHList[1];
            if(Score >67 && Score<=72)
                gpa = NLHList[2];
            if(Score >72 && Score<=77)
                gpa = NLHList[3];
            if(Score >77 && Score<=82)
                gpa = NLHList[4];
            if(Score >82 && Score<=87)
                gpa = NLHList[5];
            if(Score >87 && Score<=92)
                gpa = NLHList[6];
            if(Score >92 && Score<=100)
                gpa = NLHList[7];
            return gpa;
        }
function NonLanguageSPlus(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = NLSPlusList[0];
            if(Score >59 && Score<=67)
                gpa = NLSPlusList[1];
            if(Score >67 && Score<=72)
                gpa = NLSPlusList[2];
            if(Score >72 && Score<=77)
                gpa = NLSPlusList[3];
            if(Score >77 && Score<=82)
                gpa = NLSPlusList[4];
            if(Score >82 && Score<=87)
                gpa = NLSPlusList[5];
            if(Score >87 && Score<=92)
                gpa = NLSPlusList[6];
            if(Score >92 && Score<=100)
                gpa = NLSPlusList[7];
            return gpa;
        }
function NonLanguageS(Score)
      {
            var gpa = 0;
            if(Score<=59 )
                gpa = NLSList[0];
            if(Score >59 && Score<=67)
                gpa = NLSList[1];
            if(Score >67 && Score<=72)
                gpa = NLSList[2];
            if(Score >72 && Score<=77)
                gpa = NLSList[3];
            if(Score >77 && Score<=82)
                gpa = NLSList[4];
            if(Score >82 && Score<=87)
                gpa = NLSList[5];
            if(Score >87 && Score<=92)
                gpa = NLSList[6];
            if(Score >92 && Score<=100)
                gpa = NLSList[7];
            return gpa;
       }
function LanguageAP(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = LAPList[0];
            if(Score >59 && Score<=67)
                gpa = LAPList[1];
            if(Score >67 && Score<=72)
                gpa = LAPList[2];
            if(Score >72 && Score<=77)
                gpa = LAPList[3];
            if(Score >77 && Score<=82)
                gpa = LAPList[4];
            if(Score >82 && Score<=87)
                gpa = LAPList[5];
            if(Score >87 && Score<=92)
                gpa = LAPList[6];
            if(Score >92 && Score<=100)
                gpa = LAPList[7];
            return gpa;
        }
function LanguageHPlus(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = LAPList[0];
            if(Score >59 && Score<=67)
                gpa = LAPList[1];
            if(Score >67 && Score<=72)
                gpa = LAPList[2];
            if(Score >72 && Score<=77)
                gpa = LAPList[3];
            if(Score >77 && Score<=82)
                gpa = LAPList[4];
            if(Score >82 && Score<=87)
                gpa = LAPList[5];
            if(Score >87 && Score<=92)
                gpa = LAPList[6];
            if(Score >92 && Score<=100)
                gpa = LAPList[7];
            return gpa;
        }
function LanguageH(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = LHList[0];
            if(Score >59 && Score<=67)
                gpa = LHList[1];
            if(Score >67 && Score<=72)
                gpa = LHList[2];
            if(Score >72 && Score<=77)
                gpa = LHList[3];
            if(Score >77 && Score<=82)
                gpa = LHList[4];
            if(Score >82 && Score<=87)
                gpa = LHList[5];
            if(Score >87 && Score<=92)
                gpa = LHList[6];
            if(Score >92 && Score<=100)
                gpa = LHList[7];
            return gpa;
        }
function LanguageSPlus(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = LSPLUSList[0];
            if(Score >59 && Score<=67)
                gpa = LSPLUSList[1];
            if(Score >67 && Score<=72)
                gpa = LSPLUSList[2];
            if(Score >72 && Score<=77)
                gpa = LSPLUSList[3];
            if(Score >77 && Score<=82)
                gpa = LSPLUSList[4];
            if(Score >82 && Score<=87)
                gpa = LSPLUSList[5];
            if(Score >87 && Score<=92)
                gpa = LSPLUSList[6];
            if(Score >92 && Score<=100)
                gpa = LSPLUSList[7];
            return gpa;
        }
function LanguageS(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = LSList[0];
            if(Score >59 && Score<=67)
                gpa = LSList[1];
            if(Score >67 && Score<=72)
                gpa = LSList[2];
            if(Score >72 && Score<=77)
                gpa = LSList[3];
            if(Score >77 && Score<=82)
                gpa = LSList[4];
            if(Score >82 && Score<=87)
                gpa = LSList[5];
            if(Score >87 && Score<=92)
                gpa = LSList[6];
            if(Score >92 && Score<=100)
                gpa = LSList[7];
            return gpa;
        }
function LanguageN5(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = N5List[0];
            if(Score >59 && Score<=67)
                gpa = N5List[1];
            if(Score >67 && Score<=72)
                gpa = N5List[2];
            if(Score >72 && Score<=77)
                gpa = N5List[3];
            if(Score >77 && Score<=82)
                gpa = N5List[4];
            if(Score >82 && Score<=87)
                gpa = N5List[5];
            if(Score >87 && Score<=92)
                gpa = N5List[6];
            if(Score >92 && Score<=100)
                gpa = N5List[7];
            return gpa;
        }
function LanguageN4(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = N4List[0];
            if(Score >59 && Score<=67)
                gpa = N4List[1];
            if(Score >67 && Score<=72)
                gpa = N4List[2];
            if(Score >72 && Score<=77)
                gpa = N4List[3];
            if(Score >77 && Score<=82)
                gpa = N4List[4];
            if(Score >82 && Score<=87)
                gpa = N4List[5];
            if(Score >87 && Score<=92)
                gpa = N4List[6];
            if(Score >92 && Score<=100)
                gpa = N4List[7];
            return gpa;
        }
function LanguageN3(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = N3List[0];
            if(Score >59 && Score<=67)
                gpa = N3List[1];
            if(Score >67 && Score<=72)
                gpa = N3List[2];
            if(Score >72 && Score<=77)
                gpa = N3List[3];
            if(Score >77 && Score<=82)
                gpa = N3List[4];
            if(Score >82 && Score<=87)
                gpa = N3List[5];
            if(Score >87 && Score<=92)
                gpa = N3List[6];
            if(Score >92 && Score<=100)
                gpa = N3List[7];
            return gpa;
        }
function LanguageN2(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = N2List[0];
            if(Score >59 && Score<=67)
                gpa = N2List[1];
            if(Score >67 && Score<=72)
                gpa = N2List[2];
            if(Score >72 && Score<=77)
                gpa = N2List[3];
            if(Score >77 && Score<=82)
                gpa = N2List[4];
            if(Score >82 && Score<=87)
                gpa = N2List[5];
            if(Score >87 && Score<=92)
                gpa = N2List[6];
            if(Score >92 && Score<=100)
                gpa = N2List[7];
            return gpa;
        }
function LanguageN1(Score)
        {
            var gpa = 0;
            if(Score<=59 )
                gpa = N1List[0];
            if(Score >59 && Score<=67)
                gpa = N1List[1];
            if(Score >67 && Score<=72)
                gpa = N1List[2];
            if(Score >72 && Score<=77)
                gpa = N1List[3];
            if(Score >77 && Score<=82)
                gpa = N1List[4];
            if(Score >82 && Score<=87)
                gpa = N1List[5];
            if(Score >87 && Score<=92)
                gpa = N1List[6];
            if(Score >92 && Score<=100)
                gpa = N1List[7];
            return gpa;
        }

