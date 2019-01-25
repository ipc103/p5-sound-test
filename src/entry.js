import 'p5/lib/addons/p5.sound';
import p5, { MonoSynth } from 'p5'


const run = (sk) => {
  const monoSynth = new p5.MonoSynth();
  const notes = []
  for (var i = "A".charCodeAt(); i <= "G".charCodeAt(); i++) {
    notes.push(String.fromCharCode(i))
  }
  let playing = false;

  sk.setup = () => {
    const canvas = sk.createCanvas(window.innerWidth, window.innerHeight);
  }

  sk.draw = () => {
    sk.background(sk.mouseX / 2, sk.mouseY /2);

    if (playing) {
      const pitch = Math.round(sk.mouseX / 100)
      const noteIndex = Math.round( (sk.mouseY / window.innerHeight) * notes.length)
      const note = notes[noteIndex]
      const tone = note + pitch
      monoSynth.triggerAttack(tone);
    }
  }

  sk.mousePressed = () => {
    playing = !playing
  }

  sk.mouseReleased = () => {
    monoSynth.triggerRelease();
  }
}

const P5 = new p5(run);
