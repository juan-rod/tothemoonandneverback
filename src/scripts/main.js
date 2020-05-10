import setCanvas from './canvas'
console.log('setCanvas', setCanvas())

let wrapper = document.querySelector('.wrapper')
let artboard = document.querySelector('.artboard')

let getClientSize = (wrapper) => {
  return {
    width: wrapper.clientWidth,
    height: wrapper.clientHeight
  }
}
let getGridSize = ({ width, height }) => {
  return {
    columns : width / pixelSize,
    rows: height/ pixelSize
  }
}
// let setArtboardHeight = () => artboard.style.height = `${ rows * pixelSize }px`
let totalNumberOfDivs = () => columns * rows
let setGridFrame = () => {
  for (let index = 0; index < totalNumberOfDivs(); index++) {
    let spanElement = document.createElement('span')
    spanElement.addEventListener("click", handleClick)
    artboard.appendChild(spanElement)
  }
}
const starPositions = (length, max) => {
  return Array.from({length}, () => Math.floor(Math.random() * max))
}
let setStarElements = () => {
  let allSpans = document.querySelectorAll('span')
  // console.log('allSpans', allSpans)
  starPositions(50, totalNumberOfDivs()).forEach(star => {
    // console.log('star', star)
    allSpans[star].style.backgroundColor = 'white'
  })
}
function getMoonCenter () {
 
  let getSpanElements = document.querySelectorAll('span')
  console.log('getSpanElements.length', getSpanElements.length)
  let col = Math.round(colsHalf)
  let row = Math.round(rowsHalf)
  row = Math.round(row/2)
console.log('row', row)
console.log('col', col)
let centerSpan = document.querySelector('span')
centerSpan.style.backgroundColor = 'red'
centerSpan.style.gridColumn = `${col}/ ${col+1}`
centerSpan.style.gridRow = `${row}/ ${row+1}`

  return {col, row}
}
let getMoonPositions = () => {
  return {
    center: getMoonCenter()
  }
  // return getMoonCenter()
}
let handleClick = (e) => {
  console.log('handleClick e', e)
  let style = e.target.style
  console.log('style', style)
  style.backgroundColor = 'pink'
}
let clientSize = getClientSize(wrapper)
let pixelSize = 8
let { columns, rows } = getGridSize(clientSize)
columns = Math.round(columns)
// console.log('columns', columns)
rows = Math.round(rows)
console.log('rows', rows)
function css(el, styles) {
  for (var property in styles)
      el.style[property] = styles[property];
}


css(wrapper, { 'grid-template-columns': `repeat(${columns},1fr)`, 'grid-template-rows': `repeat(${rows},1fr)` });
let rowsHalf = rows/2
console.log('rowsHalf', rowsHalf)
let colsHalf = columns/2

// document.getElementById("theImg").onload = function setCanvas () {


// setArtboardHeight()
// setGridFrame()
// setStarElements()
// getMoonPositions()
// console.log('getMoonPositions(', getMoonPositions().center)
// let spanElement = document.querySelector('button')
// console.log('spanElement', spanElement)
// spanElement.addEventListener("click", handleClick);
// let pixelSize = 8


//  if i can get grid positions, i can use below code, maybe

// $(document).ready(function(){
//   $('.grid').on('click', 'div', function(e){
//         GetGridElementsPosition($(this).index()); //Pass in the index of the clicked div
//   //Relevant to its siblings, in other words if this is the 5th div in the div = grid
//   });
// });

// function GetGridElementsPosition(index){
//   //Get the css attribute grid-template-columns from the css of class grid
//   //split on whitespace and get the length, this will give you how many columns
//   const colCount = $('.grid').css('grid-template-columns').split(' ').length;

//   const rowPosition = Math.floor(index / colCount);
//   const colPosition = index % colCount;

//   //Return an object with properties row and column
//   return { row: rowPosition, column: colPosition } ;
// }


/// make stars sparkle. half of star array. randomize half of those and dim color by opacity.
// randomize that ^

// if i upload a photo, can i progmatically turn it into pixels?