# G-PAC

G-PAC 快速可上手的动态GPA计算框架

G-PAC是一款基于JavaScript开发的轻量级GPA计算框架 
仅仅通过传递参数并且进行一些简单的设置即可客制化自己的GPA计算服务

# 简单地来说，你只需要通过更改一些参数就可以快速建立一个GPA计算器

# 快速上手：

下载G-PAC.js（其实下载任意一个js都可以，他们都只是数值做了变更）

更改以下参数

    var credits = 30;//Main Credit
    var SubjectList = new Array ("Chi","Eng","Math","Chem","Phy","Ele1","His","Ele2")//Subjects
    var CreditList = new Array ("3.0@1","5.5@1","5.5@0","3.0@0","3.0@0","3.0@0","4.0@0","3.0@0")//Subjects'credit and the mark of whether it is language or nonlanguage. 1 = Language, 0 = NonLanguage
    var NLHList = new Array(0,2.4,2.8,3.1,3.4,3.7,4.0,4.3) //Credits for NonLanguage H IN ORDER
    var NLSPlusList = new Array(0,2.25,2.65,2.95,3.25,3.55,3.85,4.15) //Credits for NonLanguage S+ IN ORDER
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

根据注释修改后，保存并在html文件中引用，对接，具体对接方式可以参照模板html文件。

保存，运行，Voila！
