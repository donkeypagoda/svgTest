// const cicrle = document.getElementById("circlePath")
// const line = document.getElementById("linePath")
const tri = document.getElementById("trianglePath")
const square = document.getElementById("squarePath")
const pent = document.getElementById("pentagonPath")
const hex = document.getElementById("hexagonPath")
const hept = document.getElementById("heptagonPath")

function svgPoints(numbSides, Xcent, Ycent, size, tag){
  let pointArr = []
  let points = ""
  for (let i = 0; i <= numbSides; i++){
    let x = Xcent + size * Math.cos(i * 2 * Math.PI / numbSides)
    let y = Ycent + size * Math.sin(i * 2 * Math.PI / numbSides)
    pointArr.push({"x": x,
                  "y": y
                })
    points = points + x + "," + y + " "
  }
  tag.setAttribute("points", points)
  return pointArr;
}
svgPoints(3, 25, 25, 25, tri);
svgPoints(4, 25, 25, 25, square);
svgPoints(5, 25, 25, 25, pent);
svgPoints(6, 25, 25, 25, hex);
svgPoints(7, 25, 25, 25, hept);
