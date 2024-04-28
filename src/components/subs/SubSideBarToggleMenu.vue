<template>
  <div class="abody">
    <div class="header"></div>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
      <ul class="sidebarMenuInner">
        <li>Jelena Jovanovic <span>Web Developer</span></li>
        <li><a href="https://vanila.io" target="_blank">Company</a></li>
        <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
        <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
        <li>
          <a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank"
            >YouTube</a
          >
        </li>
        <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
      </ul>
    </div>
    <div id="center" class="main center">
      <div class="mainInner">
        <div>PURE CSS SIDEBAR TOGGLE MENU</div>
      </div>
      <div class="mainInner">
        <div>PURE CSS SIDEBAR TOGGLE MENU</div>
      </div>
      <div class="mainInner">
        <div>PURE CSS SIDEBAR TOGGLE MENU</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
abody {
  overflow-x: hidden;
  height: 100%;
}
abody {
  background: #fff;
  padding: 0;
  margin: 0;
  font-family: 'Varela Round', sans-serif;
}
.header {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background-color: #fc466b;
  position: relative;
  height: 60px !important;
  overflow: hidden;
  z-index: 1;
}
.main {
  margin: 0 auto;
  display: block;
  height: 100%;
  margin-top: 60px;
}
.mainInner {
  display: table;
  height: 100%;
  width: 100%;
  text-align: center;
}
.mainInner div {
  display: table-cell;
  vertical-align: middle;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.25px;
}
#sidebarMenu {
  height: 100%;
  position: relative;
  left: 0;
  width: 250px;
  margin-top: 0px;
  padding-top: 0px;
  transform: translateX(-250px);
  z-index: -1;
  transition:
    transform 250ms ease-in-out,
    z-index 300ms ease-in-out;
  background: linear-gradient(180deg, #fc466b 0%, #3f5efb 100%);
}
.sidebarMenuInner {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebarMenuInner li {
  list-style: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebarMenuInner li span {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}
.sidebarMenuInner li a {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
input[type='checkbox']:checked ~ #sidebarMenu {
  transform: translateX(0);
  z-index: 99;
}

input[type='checkbox'] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}
.sidebarIconToggle {
  display: block;
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  z-index: 99;
  top: -40px;
  left: 15px;
  height: 22px;
  width: 22px;
}
.spinner {
  display: block;
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  height: 3px;
  width: 22px;
  background-color: #fff;
}
.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}
.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
input[type='checkbox']:checked ~ .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}
input[type='checkbox']:checked ~ .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}
input[type='checkbox']:checked ~ .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}
</style>
