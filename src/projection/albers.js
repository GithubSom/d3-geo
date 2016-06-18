import conicEqualArea from "./conicEqualArea";

export default function() {
  return conicEqualArea()
      .rotate([96, 0])
      .center([-0.6, 38.7])
      .parallels([29.5, 45.5])
      .scale(1070);
}
