<template>
  <div class="profile">
    <img id="profile-image" alt="profile" src="../assets/profile.jpg" />
    <div>
      <h1>Panumars Seanto</h1>
      <p>Software Engineer</p>
      <div>
        I have more than 2 yers' experience building software for Bank industry
        and use Agile is development process(extreme programming + scrum).
        I spcialised in backend devilopment for complex scalable APIs.
        I write about software development on
        <a href="#">my GitHub</a>
      </div>
      <div>
        <h3>My Skills</h3>
        <div>
          <img
            id="golnag-logo"
            src="https://i.pinimg.com/236x/ca/1f/74/ca1f746d6f232f87fca4e4d94ef6f3ab--app-technology.jpg"
          />
          <h4>Golang</h4>
          <ul>
            <li>gin-gonic Framework</li>
            <li>sqlx Library</li>
            <li>mgo Library</li>
          </ul>
        </div>
        <div>
          <img
            id="docker-logo"
            src="https://network.cmu.ac.th/wiki/images/e/e6/Docker_facebook_share.png"
          />
          <h4>Docker</h4>
          <ul>
            <li>docker-compose</li>
            <li>dockerfile</li>
            <li>docker command</li>
          </ul>
        </div>
        <div>
          <img
            id="nodejs-logo"
            src="https://dd.engineering/blog/how-to-set-up-a-back-end-project-using-typescript-and-node-js/banner.jpg"
          />
          <h4>Node.js & Typscript</h4>
          <ul>
            <li>Express</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Email: panumars124@gmail.com</p>
        <p>
          Facebook:
          <a href="https://web.facebook.com/panumarss/">facebook.com/panumarss</a>
        </p>
        <p>
          Medium:
          <a href="https://medium.com/@panumars124">medium.com/@panumars124</a>
        </p>
        <p>Phone no: 088-3564267</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutme"
};
</script>

<style scoped>
#profile-image {
  border-radius: 20%;
  width: 10%;
}
</style>
