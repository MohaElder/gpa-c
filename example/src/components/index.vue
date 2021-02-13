<template>
  <div class="container">
    <h2 class="main-icon" is="sui-header" icon="calculator">
      GPA Calculator
      <sui-header-subheader> By MohaElder169 </sui-header-subheader>
      <a style="width: 100%" href="https://github.com/MohaElder/GPAC"
        ><img
          alt="GitHub User's stars"
          src="https://img.shields.io/github/stars/MohaElder?affiliations=OWNER&style=social"
      /></a>
    </h2>
    <sui-form @submit.prevent="onSubmit">
      <sui-form-field
        v-for="(subject, i) in subjects"
        :key="i"
        class="subject-field"
      >
        <label>{{ subject.name }}</label>
        <sui-form-fields fields="two">
          <sui-form-field>
            <input type="text" placeholder="Score..." v-model="subject.score" />
          </sui-form-field>
          <sui-form-field>
            <sui-dropdown
              placeholder="Level..."
              selection
              :options="subject.levels"
              v-model="subject.activeLevel"
            />
          </sui-form-field>
        </sui-form-fields>
      </sui-form-field>
      <sui-button positive size="large" type="submit">Submit</sui-button>
    </sui-form>
    <sui-statistic size="tiny" style="width: 100%" v-if="displayGpa != null">
      <sui-statistic-value>{{
        isNaN(displayGpa) ? "Unavailable" : displayGpa
      }}</sui-statistic-value>
      <sui-statistic-label>GPA</sui-statistic-label>
    </sui-statistic>
  </div>
</template>
<script>
import { GPAC, Level, Subject } from "../../js/G-PAC.js";

var credits_s = [0, 2.4, 2.8, 3.1, 3.4, 3.7, 4.1, 4.3];
var credits_s_plus = [0, 2.5, 2.8, 3.2, 3.5, 3.8, 4.2, 4.4];
var credits_h = [0, 2.6, 2.9, 3.3, 3.6, 3.9, 4.3, 4.5];
var bounds = [0, 60, 68, 73, 78, 83, 88, 93];

export default {
  name: "index",
  data() {
    return {
      displayGpa: null,
      subjects: [
        {
          name: "Chinese",
          activeLevel: null,
          score: null,
          extraCredit: 3,
          levels: [
            {
              text: "S",
              value: "S",
            },
            {
              text: "S+",
              value: "S+",
            },
            {
              text: "H",
              value: "H",
            },
          ],
        },
        {
          name: "English",
          activeLevel: null,
          score: null,
          extraCredit: 3,
          levels: [
            {
              text: "S",
              value: "S",
            },
            {
              text: "S+",
              value: "S+",
            },
            {
              text: "H",
              value: "H",
            },
          ],
        },
        {
          name: "Math",
          activeLevel: null,
          score: null,
          extraCredit: 3,
          levels: [
            {
              text: "S",
              value: "S",
            },
            {
              text: "S+",
              value: "S+",
            },
            {
              text: "H",
              value: "H",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.doJsonWay();
      //this.doClassicWay();
      return false; //return false to prevent form auto-submission
    },
    doJsonWay() {
      let subjects = JSON.parse(JSON.stringify(this.subjects));
      let scores = [];
      for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].levels.length; j++) {
          subjects[i].levels[j] = {
            name: subjects[i].levels[j].text,
            credits:
              subjects[i].levels[j].text == "S"
                ? credits_s
                : subjects[i].levels[j].text == "S+"
                ? credits_s_plus
                : credits_h,
            bounds: bounds,
          };
        }
        scores.push({
          subject: subjects[i].name,
          score: subjects[i].score,
          level: subjects[i].activeLevel,
        });
      }
      let gpac = new GPAC({ json: JSON.stringify(subjects) });
      this.displayGpa = gpac.getGpas(scores).toFixed(3);
    },
    doClassicWay() {
      let subjects = [];
      let levels = [];
      let scores = [];
      levels.push(new Level({ name: "S", credits: credits_s, bounds: bounds }));
      levels.push(
        new Level({ name: "S+", credits: credits_s_plus, bounds: bounds })
      );
      levels.push(new Level({ name: "H", credits: credits_h, bounds: bounds }));
      for (let i = 0; i < this.subjects.length; i++) {
        subjects.push(
          new Subject({
            name: this.subjects[i].name,
            levels: levels,
            extraCredit: this.subjects[i].extraCredit,
          })
        );
        scores.push({
          subject: this.subjects[i].name,
          score: this.subjects[i].score,
          level: this.subjects[i].activeLevel,
        });
      }
      let gpac = new GPAC({ subjects: subjects });
      this.displayGpa = gpac.getGpas(scores).toFixed(3);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.main-icon {
  width: 100%;
  margin-bottom: 15px;
}

.subject-field {
  margin-bottom: 10px;
}
</style>
