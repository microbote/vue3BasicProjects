<template>
  <h1>Pure CSS Tabs <span>Just CSS, No JS!</span></h1>
  <ul class="tabs" role="tablist">
    <li>
      <input type="radio" name="tabs" id="tab1" checked />
      <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0"
        >Description</label
      >
      <div
        id="tab-content1"
        class="tab-content"
        role="tabpanel"
        aria-labelledby="description"
        aria-hidden="false"
      >
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum."
        </p>
      </div>
    </li>

    <li>
      <input type="radio" name="tabs" id="tab2" />
      <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0"
        >Specification</label
      >
      <div
        id="tab-content2"
        class="tab-content"
        role="tabpanel"
        aria-labelledby="specification"
        aria-hidden="true"
      >
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?
        </p>
      </div>
    </li>
  </ul>

  <br style="clear: both" />

  <p class="link">See the <a href="https://codepen.io/wallaceerick/pen/IGxim">3D Box</a> demo!</p>
</template>

<style scoped type="css">
@import url('https://fonts.googleapis.com/css?family=Lato');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  padding: 20px;
  text-align: left;
  font-family: Lato;
  color: #fff;
  background: #9b59b6;
}
h1 {
  font-weight: normal;
  font-size: 40px;
  font-weight: normal;
  text-transform: uppercase;
  float: left;
  margin: 20px 0 100px 10px;
  span {
    font-size: 13px;
    display: block;
    padding-left: 4px;
  }
}
.tabs {
  width: 650px;
  float: none;
  list-style: none;
  position: relative;
  margin: 80px 0 0 10px;
  text-align: left;
  li {
    float: left;
    display: block;
  }
  input[type='radio'] {
    position: absolute;
    top: 0;
    left: -9999px;
  }
  label {
    display: block;
    padding: 14px 21px;
    border-radius: 2px 2px 0 0;
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
    background: #8e44ad;
    cursor: pointer;
    position: relative;
    top: 4px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: darken(#8e44ad, 10);
    }
  }
  .tab-content {
    z-index: 2;
    display: none;
    overflow: hidden;
    width: 100%;
    font-size: 17px;
    line-height: 25px;
    padding: 25px;
    position: absolute;
    top: 53px;
    left: 0;
    background: #2b0b38b8;
  }

  [id^='tab']:checked + label {
    top: 0;
    padding-top: 17px;
    background: #411154b8;
  }
  [id^='tab']:checked ~ [id^='tab-content'] {
    display: block;
  }
}
p.link {
  clear: both;
  margin: 380px 0 0 15px;
  a {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    margin: 0 5px;
    background-color: darken(#8e44ad, 15);
    transition: all 0.2s ease-in;
    &:hover {
      background-color: darken(#8e44ad, 20);
    }
  }
}
</style>
