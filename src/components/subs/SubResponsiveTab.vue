<template>
  <h1>Responsive CSS Tabs</h1>
  <div class="tab_container">
    <input id="tab1" type="radio" name="tabs" checked />
    <label for="tab1"><i class="fa fa-code"></i><span>Code</span></label>

    <input id="tab2" type="radio" name="tabs" />
    <label for="tab2"><i class="fa fa-pencil-square-o"></i><span>About</span></label>

    <input id="tab3" type="radio" name="tabs" />
    <label for="tab3"><i class="fa fa-bar-chart-o"></i><span>Services</span></label>

    <input id="tab4" type="radio" name="tabs" />
    <label for="tab4"><i class="fa fa-folder-open-o"></i><span>Portfolio</span></label>

    <input id="tab5" type="radio" name="tabs" />
    <label for="tab5"><i class="fa fa-envelope-o"></i><span>Contact</span></label>

    <section id="content1" class="tab-content">
      <h3>Headline 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>

    <section id="content2" class="tab-content">
      <h3>Headline 2</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section id="content3" class="tab-content">
      <h3>Headline 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section id="content4" class="tab-content">
      <h3>Headline 4</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>

    <section id="content5" class="tab-content">
      <h3>Headline 5</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </div>

  <p class="no_wrap">And Of-course this paragrapgh with not wrap Tab</p>

  <p class="link">
    Just in case you want to go through the tutorial follow this link:
    <a href="http://www.sevensignature.com/blog/code/responsive-pure-css-tabs/"
      >Responsive Pure CSS Tabs</a
    >
  </p>
</template>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css');

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  content: ' ';
  display: table;
}

.clearfix:after {
  clear: both;
}

body {
  font-family: sans-serif;
  background: #f6f9fa;
}

h1 {
  color: #ccc;
  text-align: center;
}

a {
  color: #ccc;
  text-decoration: none;
  outline: none;
}

/*Fun begins*/
.tab_container {
  width: 90%;
  margin: 0 auto;
  padding-top: 70px;
  position: relative;
}

input,
section {
  clear: both;
  padding-top: 10px;
  display: none;
}

label {
  font-weight: 700;
  font-size: 18px;
  display: block;
  float: left;
  width: 20%;
  padding: 1.5em;
  color: #757575;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background: #f0f0f0;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4,
#tab5:checked ~ #content5 {
  display: block;
  padding: 20px;
  background: #fff;
  color: #999;
  border-bottom: 2px solid #f0f0f0;
}

.tab_container .tab-content p,
.tab_container .tab-content h3 {
  -webkit-animation: fadeInScale 0.7s ease-in-out;
  -moz-animation: fadeInScale 0.7s ease-in-out;
  animation: fadeInScale 0.7s ease-in-out;
}
.tab_container .tab-content h3 {
  text-align: center;
}

.tab_container [id^='tab']:checked + label {
  background: #fff;
  box-shadow: inset 0 3px #0ce;
}

.tab_container [id^='tab']:checked + label .fa {
  color: #0ce;
}

label .fa {
  font-size: 1.3em;
  margin: 0 0.4em 0 0;
}

/*Media query*/
@media only screen and (max-width: 900px) {
  label span {
    display: none;
  }

  .tab_container {
    width: 98%;
  }
}

/*Content Animation*/
@keyframes fadeInScale {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.no_wrap {
  text-align: center;
  color: #0ce;
}
.link {
  text-align: center;
}
</style>
