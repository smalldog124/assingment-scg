<template>
  <div>
    <h3>If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value</h3>
    <button @click="getBC">Anser</button>
    <div id="anser">
      B: {{b}}
      <br />
      C: {{c}}
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FindBC",
  data() {
    return {
      b: null,
      c: null,
    };
  },
  methods: {
    getBC() {
      var body = {
        a: 21,
        ans_b: 23,
        ans_c: -21,
      };
      axios.post("http://localhost:3000/api/doscg/getBC", body).then((res) => {
        this.b = res.data.b;
        this.c = res.data.c;
      });
    },
  },
};
</script>