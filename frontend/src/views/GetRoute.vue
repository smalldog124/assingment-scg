<template>
  <div>
    <p>Route form SCG Head go to Central World</p>
    <form>
      <div>
        <label>
          Origin
          <input id="orgin" type="text" value="SCG Head"/>
        </label>
      </div>
      <div>
        <label>
          Destination
          <input id="destination" type="text" value="Central World" />
        </label>
      </div>
    </form>
    <button id="getRoute" @click="getRoute">GO</button>
    <div v-for="(item,index) in steps" :key="index">
      <p>STEP {{index+1}}</p>
      <div>{{item.html_instructions}} distance {{item.distance.text}} duration {{item.duration.text}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Getroute",
  data() {
    return {
      steps: []
    };
  },
  methods: {
    getRoute() {
      var body = {
        origin: "SCG",
        destination: "cental"
      };
      axios.post("/api/doscg/getRoute", body).then(res => {
        this.steps = res.data.routes[0].legs[0].steps;
      });
    }
  }
};
</script>