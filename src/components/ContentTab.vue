<script setup lang="ts"></script>
<template>
  <div class="contentTab">
    <div class="tabHeader">
      <i>
        <slot name="icon"></slot>
      </i>
      <h3>
        <slot name="heading"></slot>
      </h3>
    </div>
    <div class="tabContent">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style type="css" scoped>
.contentTab {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tabHeader {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  justify-content: space-between;
  overflow: hidden;
}
.tabHeader > i {
  margin-left: 20px;
}
.tabHeader > h3 {
  margin-top: 10px;
  margin-right: 50px;
  font-size: 24px;
  align-items: center;
}
.tabContent {
  width: 100%;
  height: 100%;
  min-height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
