/* data -이름으로 값 찾기 */
const els = document.querySelectorAll('div');
els.forEach(el=>{
  console.log(el.dataset.fruitName);
})