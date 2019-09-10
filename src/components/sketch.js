export default function sketch(p) {
  let r, g, b, rOff, gOff, bOff

  p.setup = function() {
    p.createCanvas(600, 20)
    rOff = p.random(10)
    gOff = p.random(10)
    bOff = p.random(10)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    // if (props.rotation !== null) {
    //   rotation = (props.rotation * Math.PI) / 180
    // }
  }

  p.draw = function() {
    r = p.noise(rOff, p.frameCount / 200, 2) * 255 + 75
    g = p.noise(p.frameCount / 300, gOff, 1) * 255 + 75
    b = p.noise(p.frameCount / 400, 3, bOff) * 255 + 75
    p.background(r, g, b)
  }
}
