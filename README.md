# GPA-C
gpa-c is a light weight GPA calculator framework based on JavaScript(ES6)

gpa-c works for all popular frontend framworks like React, Vue, Wechat Miniapp, and etc.

Feel free to visit other branches where you can see the author's previous version of the code.

## Installation
You can easily install G-PAC easily via npm:

`npm install gpa-c`

Or download G-PAC.js directly from `dist`
## Getting Started：
### First Step
Before we get started, you should know how gpa is being calculated, below is the common formula:

`Σ((score credit matching your score in x subject) * x subject extra credit)/Σ(x subject extra credit)`

However, rules are different around the world, so we have a `customBoundRule` to enable custom rules, which will be introduced later.

We strongly recommend you to download the example under `example` to check out how things work(feel free to just use that code to build your calculator!) We will dig into the example in the further section.

We have provided two ways and several handy helpers to easily create a gpa calculator.
```javascript
import {GPAC, Level, Subject} from 'gpa-c' //always import gpa-c at first
```
### Classic Way
```javascript
//let's create a subject
var chinese = new Subject({
            name: "Chinese",
            credits: [0, 1.25, 2.5, 3.5, 4],//credit for each score bound
            bounds: [0, 60, 78, 88, 95],//score bounds
            extraCredit: 5
            })

//Now we want to create Math, which is just like Chinese, except for name and extraCredit
//We can do it by using the inheritance feature:
var math = new Subject({
    name: "Math",
    subject: chinese,
    extraCredit:5.15
})//simpy add a 'subject:' to defind the subject to inherit from and passing unique parameters helps to create a new subject fast

var subjects =[chinese, math]//put both subjects in a list

//Now you want to get the scores ready, each score should be an self defined object that has subject, and score
var scores = []
scores.push({
          subject: "Chinese",
          score: 88,
        });
scores.push({
          subject: "Math",
          score: 90,
        });

//It's time to calculate the GPA.
var gpac = new GPAC({ subjects: subjects });//initiate gpac
return gpac.getGpas(scores);//That's it, voila!
```
### Json Way
There is also a more organized way, via json

```javascript
var subjects = [
  {
    name: "Chinese",
    credits: [0, 1.25, 2.5, 3.5, 4],//credit for each score bound
    bounds: [0, 60, 78, 88, 95],//score bounds
    extraCredit: 5
  },
  {
    name: "Math",
    credits: [0, 1.25, 2.5, 3.5, 4],//credit for each score bound
    bounds: [0, 60, 78, 88, 95],//score bounds
    extraCredit: 5.15
  }
]//this can either be a javascript object or a real json

var scores = [
  {
    subject: "Chinese",
    score: 90
  },
  {
    subject: "Math",
    score: 88
  }
]

var gpac = new GPAC({json: JSON.stringify(subjects)})//remember to stringnify the object if your json is in object form
return gpac.getGpas(scores)
```
## Features
### Inheritance
subjects can be created via inheritance
```javascript
var math = new Subject({subject: chinese, name: math})
```
supports argument override
### Level
Some schools have levels for each subjects(take my high school for instance), Level feature is supported in gpa-c
```javascript
var level_h = new Level({name: 'H', credits:[0, 1.25, 2.5, 3.5, 4], bounds: [0, 60, 78, 88, 95]})
var level_s = new Level({name: 'S', credits:[0, 1, 2.2, 3, 3.3], bounds: [0, 60, 78, 88, 95]})
var chinese = new Subject({name:'Chinese', levels = [level_s,level_h]}, extraCredit: 4)//if you have levels enabled, no need to pass credits and bounds into the subject because level handles them now
```
### customBoundRule
You may add custom functions as `customBoundRule` in both `Subject` and `Level`
A customBoundRule will override the default bound check function(score >= bounds[i])
```javascript
//e.g we want to determine credits by checking whether the student passes or not
var chinese = new Subject({
name: "Chinese",
credits:[0,4]
customBoundRule:(score)=>{
  if(score.score>=60){
    return credits[1]
  }
  return credits[0]
}
})
```
### Json Intepretation
GPAC() constructor supports json parameter and automatically generates Subject() objects in the GPAC() object.

**It supports level passing in**
```javascript
var subjects = [
  {
    name: "Chinese",
    levels:[
      {
        name: 'S'
        credits: [0, 1.25, 2.5, 3.5, 4],//credit for each score bound
        bounds: [0, 60, 78, 88, 95],//score bounds
      },
      {
        name: 'H'
        credits: [0, 2, 3, 3.8, 4],//credit for each score bound
        bounds: [0, 60, 78, 88, 95],//score bounds
      },
    ]
    extraCredit: 5
  },
  {
    name: "Math",
    levels:[
      {
        name: 'S'
        credits: [0, 1.25, 2.5, 3.5, 4],//credit for each score bound
        bounds: [0, 60, 78, 88, 95],//score bounds
      },
      {
        name: 'H'
        credits: [0, 2, 3, 3.8, 4],//credit for each score bound
        bounds: [0, 60, 78, 88, 95],//score bounds
      },
    ]
    extraCredit: 5.15
  }
]//this can either be a javascript object or a real json

var gpac = new GPAC({json: JSON.stringify(subjects)})//remember to stringnify the object if your json is in object form
```

However, the Json Interpreter currently does not support customBoundRule feature inside json. It will come via a later update.
## Stuff
I restarted this project at the beiginning of the 2021 Chinese New Year. It feels retro to work on this project since I started it in 2014(while I was in seventh grade)

Looking back to the original code, I feel that I have grown so much, and yet still having lot of things to learn. I wish this project could help others who's passionate about creating goodness for the world via technology. Maybe you are a middle school kid who is eager to create GPA Calculator or something cool like that. I wish that I could help you by showing you what I have done, what obstacles that I encountered. I wish you to learn from my failures and successes, and to exceed me.

That's it!
