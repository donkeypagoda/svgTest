// var numberOfSides = 6,
//     size = 20,
//     Xcenter = 25,
//     Ycenter = 25;
//
// cxt.beginPath();
// cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));
//
// for (var i = 1; i <= numberOfSides;i += 1) {
//     cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
// }
const hept = document.getElementById("heptagonPath")
function svgPoints(numbSides, Xcent, Ycent, size, tag){
  // let pointArr = []
  let points = ""
  for (let i = 0; i <= numbSides; i++){
    // pointArr[i].x = Xcent + size * Math.cos(i * 2 * Math.PI / numbSides)
    // pointArr[i].y = Ycent + size * Math.sin(i * 2 * Math.PI / numbSides)
    let x = Xcent + size * Math.cos(i * 2 * Math.PI / numbSides)
    let y = Ycent + size * Math.sin(i * 2 * Math.PI / numbSides)
    // pointArr.push({"x": x,
    //               "y": y
    //             })
    console.log(x);
    console.log(y);
    points = points + x + "," + y + " "


    // pointArr.push(Xcent + size * Math.cos(i * 2 * Math.PI / numbSides))
    // pointArr.push(Ycent + size * Math.sin(i * 2 * Math.PI / numbSides))
  }
  console.log(points);
  tag.setAttribute("points", points)
  console.log(hept);
  // console.log(pointArr);
  // return pointArr;
}
svgPoints(7, 25, 25, 25, hept);
