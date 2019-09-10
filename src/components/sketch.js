export default function sketch(p) {
  let r, g, b

  p.setup = function() {
    p.createCanvas(600, 15)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    // if (props.rotation !== null) {
    //   rotation = (props.rotation * Math.PI) / 180
    // }
  }

  p.draw = function() {
    r = p.noise(p.frameCount / 200, 2) * 255 + 75
    g = p.noise(p.frameCount / 300, 2) * 255 + 75
    b = p.noise(p.frameCount / 400, 2) * 255 + 75
    p.background(r, g, b)
  }
}
