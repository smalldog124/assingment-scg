<template>
  <div>
    <h3>
      X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z
      value
    </h3>
    <button id="getXYZ" @click="getXYZ">Anser</button>
    <div id="anser">
      X: {{ x }}
      <br />
      Y: {{ y }}
      <br />
      Z: {{ z }}
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FindXYZ",
  data() {
    return {
      x: null,
      y: null,
      z: null
    };
  },
  methods: {
    getXYZ() {
      var body = { missing_list: ["", "", 5, 9, 15, 23, ""] };
      axios.post("/api/doscg/getXYZ", body).then(res => {
        this.x = res.data.x;
        this.y = res.data.y;
        this.z = res.data.z;
      });
    }
  }
};
</script>
