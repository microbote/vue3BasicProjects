<template>
  <div class="abody">
    <h2>CSS3 Timeline</h2>
    <p>Please set the $vertical variable to false to see the horizontal version.</p>
    <ul id="timeline">
      <li class="work">
        <input class="radio" id="work5" name="works" type="radio" checked />
        <div class="relative">
          <label for="work5">Lorem ipsum dolor sit amet</label>
          <span class="date">12 May 2013</span>
          <span class="circle"></span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
            velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
            nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
            non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
            dicta qui est optio rerum.
          </p>
        </div>
      </li>
      <li class="work">
        <input class="radio" id="work4" name="works" type="radio" />
        <div class="relative">
          <label for="work4">Lorem ipsum dolor sit amet</label>
          <span class="date">11 May 2013</span>
          <span class="circle"></span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
            velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
            nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
            non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
            dicta qui est optio rerum.
          </p>
        </div>
      </li>
      <li class="work">
        <input class="radio" id="work3" name="works" type="radio" />
        <div class="relative">
          <label for="work3">Lorem ipsum dolor sit amet</label>
          <span class="date">10 May 2013</span>
          <span class="circle"></span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
            velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
            nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
            non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
            dicta qui est optio rerum.
          </p>
        </div>
      </li>
      <li class="work">
        <input class="radio" id="work2" name="works" type="radio" />
        <div class="relative">
          <label for="work2">Lorem ipsum dolor sit amet</label>
          <span class="date">09 May 2013</span>
          <span class="circle"></span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
            velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
            nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
            non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
            dicta qui est optio rerum.
          </p>
        </div>
      </li>
      <li class="work">
        <input class="radio" id="work1" name="works" type="radio" />
        <div class="relative">
          <label for="work1">Lorem ipsum dolor sit amet</label>
          <span class="date">08 May 2013</span>
          <span class="circle"></span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
            velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
            nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
            non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
            dicta qui est optio rerum.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>

/* -------------------------------------
 * For horizontal version, set the
 * $vertical variable to false
 * ------------------------------------- */
$vertical: true

/* -------------------------------------
 * General Style
 * ------------------------------------- */

// Colours
$bg: #48b379
$white: #eee9dc
$red: #f98262

@import url(https://fonts.googleapis.com/css?family=Noto+Sans)

.abody
  @if $vertical
    max-width: 1200px
    margin: 0 auto
  @else
    margin: 0
  padding: 0 5%
  font-size: 100%
  font-family: 'Noto Sans', sans-serif
  color: $white
  background: $bg

h2
  margin: 3em 0 0 0
  font-size: 1.5em
  letter-spacing: 2px
  text-transform: uppercase

/* -------------------------------------
 * timeline
 * ------------------------------------- */

#timeline
  list-style: none
  @if $vertical
    margin: 50px 0 30px 120px
    padding-left: 30px
    border-left: 8px solid $white
  @else
    margin: 120px 0 0
    padding: 0
    border-top: 8px solid $white
    display: table
    border-spacing: 30px 0
  li
    @if $vertical
      margin: 40px 0
      position: relative
    @else
      display: table-cell
      // for Firefox
      .relative
        position: relative
  p
    margin: 0 0 15px

.date
  @if $vertical
    margin-top: -10px
    top: 50%
    left: -158px
  @else
    text-align: center
    top: -55px
    left: 0
    right: 0
  font-size: 0.95em
  line-height: 20px
  position: absolute
.circle
  @if $vertical
    margin-top: -10px
    top: 50%
    left: -44px
  @else
    margin: 0 auto
    top: -14px
    left: 0
    right: 0
  width: 10px
  height: 10px
  background: $bg
  border: 5px solid $white
  border-radius: 50%
  display: block
  position: absolute

.content
  @if $vertical
    max-height: 20px
    padding: 50px 20px 0
    border-color: transparent
  @else
    width: 200px
    max-height: 0
    margin-top: 40px
    vertical-align: top
    padding: 50px 15px 15px
    transition: width 0.4s linear, max-height 0.4s linear
  border-width: 2px
  border-style: solid
  border-radius: 0.5em
  position: relative
  &:before, &:after
    content: ""
    width: 0
    height: 0
    border: solid transparent
    position: absolute
    pointer-events: none
    @if $vertical
      right: 100%
    @else
      bottom: 100%
  &:before
    @if $vertical
      border-right-color: inherit
      border-width: 20px
      top: 50%
      margin-top: -20px
    @else
      border-bottom-color: inherit
      border-width: 15px
      left: 50%
      margin-left: -15px
  &:after
    @if $vertical
      border-right-color: $bg
      border-width: 17px
      top: 50%
      margin-top: -17px
    @else
      border-bottom-color: $bg
      border-width: 12px
      left: 50%
      margin-left: -12px
  p
    max-height: 0
    color: transparent
    text-align: justify
    word-break: break-word
    hyphens: auto
    overflow: hidden

label
  font-size: 1.3em
  position: absolute
  z-index: 100
  cursor: pointer
  @if $vertical
    top: 20px
    transition: transform 0.2s linear
  @else
    width: 200px
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    display: block
    top: 60px
    left: 15px

.radio
  display: none
.radio:checked
  & + .relative
    label
      cursor: auto
      @if $vertical
        transform: translateX(42px)
      @else
        width: 400px
        transition: width 0.3s linear 0.2s
    .circle
      background: $red
  & ~ .content
    max-height: 180px
    border-color: $white
    @if $vertical
      margin-right: 20px
      transform: translateX(20px)
      transition: max-height 0.4s linear, border-color 0.5s linear, transform 0.2s linear
    @else
      width: 400px
    p
      max-height: 200px
      color: $white
      transition: color 0.3s linear 0.3s

/* -------------------------------------
 * mobile phones (vertical version only)
 * ------------------------------------- */
@if $vertical
  @media screen and (max-width: 767px)
    #timeline
      margin-left: 0
      padding-left: 0
      border-left: none
      li
        margin: 50px 0
    label
      width: 85%
      font-size: 1.1em
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
      display: block
      transform: translateX(18px)
    .content
      padding-top: 45px
      border-color: $white
      &:before, &:after
        border: solid transparent
        bottom: 100%
      &:before
        border-bottom-color: inherit
        border-width: 17px
        top: -16px
        left: 50px
        margin-left: -17px
      &:after
        border-bottom-color: $bg
        border-width: 20px
        top: -20px
        left: 50px
        margin-left: -20px
      p
        font-size: 0.9em
        line-height: 1.4
    .circle, .date
      display: none
</style>
