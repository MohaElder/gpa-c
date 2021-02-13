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
  </div>
</template>
<script>
import { GPAC, Level, Subject } from "../../js/G-PAC.js";

var credits = [0, 2.4, 2.8, 3.1, 3.4, 3.7, 4.1, 4.3]
var bounds = [0, 60, 68, 73, 78, 83, 88, 93]
export default {
  name: "index",
  data() {
    return {
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
              value: 1,
            },
            {
              text: "S+",
              value: 2,
            },
            {
              text: "H",
              value: 3,
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
              value: 1,
            },
            {
              text: "S+",
              value: 2,
            },
            {
              text: "H",
              value: 3,
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      let subjects = this.subjects;
      for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].levels.length; j++) {
          subjects[i].levels[j] = subjects[i].levels[j].text
        }
        subjects[i].credits = credits
        subjects[i].bounds = bounds
      }
      let gpac = new GPAC({json:JSON.stringify(subjects)})
      return false;
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
