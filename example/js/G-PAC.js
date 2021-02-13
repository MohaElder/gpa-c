/*

**@Author: MohaElder169
**@First Created: 2014/9/10

*/

export class GPAC {
  /**
   * GPAC is the main calculator class, you may use this class to calculate GPAs of your subjects
   * @date 2021-02-13
   * @param {Subject} subjects
   */
  constructor ({subjects, json = {}}) {
    if(json === {}){
      this.subjects = subjects
    }
    else{
      this.readJson(json)
    }
  }

  readJson(json){
    this.subjects = []
    let parsedSubjects = JSON.parse(json)
    parsedSubjects.forEach(subject => {
      this.subjects.push(new Subject({name:subject.name, credits:subject.credits,
        extraCredit:subject.extraCredit,bounds:subject.bounds}))
    });
    console.log(this.subjects)
  }

  // scores = [{subject: "English", score: 92, level: H, ...}]

  /**
   * getGpas takes in scores in dict format and calculates the gpa based on user inputs
   * e.g: ([{subject: "English", score: 92, level: H}, {subject: "Math", score: 88, level: S+}])
   * @date 2021-02-13
   * @param {any} scores
   * @returns {number} gpa
   */
  getGpas (scores) {
    var total = 0
    var divider = 0
    if (scores.length === this.subjects.length) {
      this.subjects.forEach(subject => {
        scores.forEach(score => {
          if (score.subject === subject.name) {
            total += (subject.extraCredit === 0 ? 1 : subject.extraCredit) * subject.getGpa(score)
            divider += subject.extraCredit
          }
        })
      })
      return total / (divider === 0 ? 1 : divider)
    }
    return -1
  }
}

export class Subject {
  /**
   * Subject class takes multiple parameters based on user's favor
   * @date 2021-02-13
   * @param {any} name name of the subject
   * @param {any} subject optional, takes a subject to inherit from
   * @param {any} levels optional, takes levels
   * @param {any} credits optional if you have levels, takes credits
   * @param {any} extraCredit optional
   * @param {any} bounds optional if you have customBoundRule
   * @param {any} customBoundRule optional
   */
  constructor ({name, subject = null, levels = [], credits = [], extraCredit = 0, bounds = [], customBoundRule = null}) {
    this.name = name
    this.levels = levels.length > 0 ? levels : subject === null ? [] : subject.levels
    this.credits = credits.length > 0 ? credits : subject === null ? [] : subject.credits
    this.extraCredit = extraCredit === 0 ? (subject === null ? 0 : subject.extraCredit) : extraCredit
    this.bounds = bounds.length > 0 ? bounds : subject === null ? [] : subject.bounds
    this.customBoundRule = customBoundRule === null ? customBoundRule : subject === null ? null : subject.customBoundRule
  }

  /**
   * gets gpa of the subjects with inputted score and calculates it based on user preferences.
   * @date 2021-02-13
   * @param {any} score
   * @returns {number} gpa
   */
  getGpa (score) {
    if (this.levels.length > 0) {
      this.levels.forEach(level => {
        if (score.level === level.name) {
          return level.getGpa()
        }
      })
    } else if (this.credits.length === this.bounds.length && this.customBoundRule === null) {
      for (let i = this.bounds.length - 1; i >= 0; i--) {
        if (score.score >= this.bounds[i]) {
          return this.credits[i]
        }
      }
    } else if (this.customBoundRule != null) {
      return this.customBoundRule(score)
    }
    return -1
  }
}

export class Level {
  /**
   * Level class is an optional class that helps with handling subjects with multiple levels
   * @date 2021-02-13
   * @param {any} name level name
   * @param {any} credits level's credits
   * @param {any} bounds optional when customBounds exists; level's bound
   * @param {any} customBounds optional
   */
  constructor ({name, credits = [], bounds = [], customBounds = null}) {
    this.name = name
    this.credits = credits
    this.bounds = bounds
    this.customBounds = customBounds
  }

  /**
   * gets gpa of the subjects with inputted score and calculates it based on user preferences.
   * @date 2021-02-13
   * @param {any} score
   * @returns {number} gpa
   */
  getGpa (score) {
    if (this.credits.length === this.bounds.length && this.customBoundRule === null) {
      for (let i = this.bounds.length - 1; i >= 0; i--) {
        if (score.score >= this.bounds[i]) {
          return this.credits[i]
        }
      }
    } else if (this.customBoundRule != null) {
      return this.customBoundRule(score)
    }
    return -1
  }
}
