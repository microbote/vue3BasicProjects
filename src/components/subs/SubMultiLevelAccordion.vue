<template>
  <div class="abody">
    <section class="container">
      <h1>CSS Accordions</h1>
      <h3>Because we can.</h3>

      <div class="ac">
        <input class="ac-input" id="ac-1" name="ac-1" type="checkbox" />
        <label class="ac-label" for="ac-1">Item 1</label>

        <article class="ac-text">
          <div class="ac-sub">
            <input class="ac-input" id="ac-2" name="ac-2" type="checkbox" />
            <label class="ac-label" for="ac-2">I love jelly donuts</label>
            <article class="ac-sub-text">
              <p>
                But not only is the sea such a foe to man who is an alien to it, but it is also a
                fiend to its own off-spring; worse than the Persian host who murdered his own
                guests; sparing not the creatures which itself hath spawned. Like a savage tigress
                that tossing in the jungle overlays her own cubs, so the sea dashes even the
                mightiest whales against the rocks, and leaves them there side by side with the
                split wrecks of ships. No mercy, no power but its own controls it. Panting and
                snorting like a mad battle steed that has lost its rider, the masterless ocean
                overruns the globe.
              </p>

              <p>
                Consider the subtleness of the sea; how its most dreaded creatures glide under
                water, unapparent for the most part, and treacherously hidden beneath the loveliest
                tints of azure. Consider also the devilish brilliance and beauty of many of its most
                remorseless tribes, as the dainty embellished shape of many species of sharks.
                Consider, once more, the universal cannibalism of the sea; all whose creatures prey
                upon each other, carrying on eternal war since the world began.
              </p>
            </article>
          </div>

          <div class="ac-sub">
            <input class="ac-input" id="ac-3" name="ac-3" type="checkbox" />
            <label class="ac-label" for="ac-3">They are so delicious</label>
            <article class="ac-sub-text">
              <p>
                My younger brother was in London when the Martians fell at Woking. He was a medical
                student working for an imminent examination, and he heard nothing of the arrival
                until Saturday morning. The morning papers on Saturday contained, in addition to
                lengthy special articles on the planet Mars, on life in the planets, and so forth, a
                brief and vaguely worded telegram, all the more striking for its brevity.
              </p>

              <p>
                The Martians, alarmed by the approach of a crowd, had killed a number of people with
                a quick-firing gun, so the story ran. The telegram concluded with the words:
                "Formidable as they seem to be, the Martians have not moved from the pit into which
                they have fallen, and, indeed, seem incapable of doing so. Probably this is due to
                the relative strength of the earth's gravitational energy." On that last text their
                leader-writer expanded very comfortingly.
              </p>
            </article>
          </div>
        </article>
        <!--/ac-text-->
      </div>
      <!--/ac-->

      <div class="ac">
        <input class="ac-input" id="ac-4" name="ac-4" type="checkbox" />
        <label class="ac-label" for="ac-4">Item 2</label>

        <article class="ac-text">
          <div class="ac-sub">
            <input class="ac-input" id="ac-5" name="ac-5" type="checkbox" />
            <label class="ac-label" for="ac-5">I also love regular donuts</label>
            <article class="ac-sub-text">
              <p>
                But not only is the sea such a foe to man who is an alien to it, but it is also a
                fiend to its own off-spring; worse than the Persian host who murdered his own
                guests; sparing not the creatures which itself hath spawned. Like a savage tigress
                that tossing in the jungle overlays her own cubs, so the sea dashes even the
                mightiest whales against the rocks, and leaves them there side by side with the
                split wrecks of ships. No mercy, no power but its own controls it. Panting and
                snorting like a mad battle steed that has lost its rider, the masterless ocean
                overruns the globe.
              </p>

              <p>
                Consider the subtleness of the sea; how its most dreaded creatures glide under
                water, unapparent for the most part, and treacherously hidden beneath the loveliest
                tints of azure. Consider also the devilish brilliance and beauty of many of its most
                remorseless tribes, as the dainty embellished shape of many species of sharks.
                Consider, once more, the universal cannibalism of the sea; all whose creatures prey
                upon each other, carrying on eternal war since the world began.
              </p>
            </article>
          </div>

          <div class="ac-sub">
            <input class="ac-input" id="ac-6" name="ac-6" type="checkbox" />
            <label class="ac-label" for="ac-6">They are also delicious</label>
            <article class="ac-sub-text">
              <p>
                My younger brother was in London when the Martians fell at Woking. He was a medical
                student working for an imminent examination, and he heard nothing of the arrival
                until Saturday morning. The morning papers on Saturday contained, in addition to
                lengthy special articles on the planet Mars, on life in the planets, and so forth, a
                brief and vaguely worded telegram, all the more striking for its brevity.
              </p>

              <p>
                The Martians, alarmed by the approach of a crowd, had killed a number of people with
                a quick-firing gun, so the story ran. The telegram concluded with the words:
                "Formidable as they seem to be, the Martians have not moved from the pit into which
                they have fallen, and, indeed, seem incapable of doing so. Probably this is due to
                the relative strength of the earth's gravitational energy." On that last text their
                leader-writer expanded very comfortingly.
              </p>
            </article>
          </div>
        </article>
        <!--/ac-text-->
      </div>
      <!--/ac-->
    </section>
  </div>
</template>

<style lang="scss">
// only for presentation purposes
h1 {
  padding-bottom: 0;
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
  font-weight: 300;
}
.abody {
  width: 100%;
  background-color: white;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
}

.container {
  max-width: 40em;
  margin: 10px auto;
}

// main level

.ac-label {
  font-weight: 700;
  position: relative;
  padding: 0.5em 1em;
  margin-bottom: 0.5em;
  display: block;
  cursor: pointer;
  background-color: whiteSmoke;
  transition: background-color 0.15s ease-in-out;
}

.ac-input:checked + label,
.ac-label:hover {
  background-color: #999;
}

.ac-label:after,
.ac-input:checked + .ac-label:after {
  content: '+';
  position: absolute;
  display: block;
  right: 0;
  top: 0;
  width: 2em;
  height: 100%;
  line-height: 2.25em;
  text-align: center;
  background-color: #e5e5e5;
  transition: background-color 0.15s ease-in-out;
}

.ac-label:hover:after,
.ac-input:checked + .ac-label:after {
  background-color: #b5b5b5;
}

.ac-input:checked + .ac-label:after {
  content: '-';
}

.ac-input {
  display: none;
}

// the magic

.ac-text,
.ac-sub-text {
  opacity: 0;
  height: 0;
  margin-bottom: 0.5em;
  transition: opacity 0.5s ease-in-out;
  overflow: hidden;
}

.ac-input:checked ~ .ac-text,
.ac-sub .ac-input:checked ~ .ac-sub-text {
  opacity: 1;
  height: auto;
}

// sub-level

.ac-sub .ac-label {
  background: none;
  font-weight: 600;
  padding: 0.5em 2em;
  margin-bottom: 0;
}

.ac-sub .ac-label:checked {
  background: none;
  border-bottom: 1px solid whitesmoke;
}

.ac-sub .ac-label:after,
.ac-sub .ac-input:checked + .ac-label:after {
  left: 0;
  background: none;
}

.ac-sub .ac-input:checked + label,
.ac-sub .ac-label:hover {
  background: none;
}

.ac-sub-text {
  padding: 0 1em 0 2em;
}
</style>
