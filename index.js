// function gulab(){
//     //v=document.getElementById('root')
//     //const node =document.createTextNode('I love to go to church')
//     document.getElementById('root').append(love)
//     //love.appendChild(node);
//     //v.appendChild(love);
// }
const love = document.createElement('h1')
love.textContent='I love to go to church'
love.className = 'header'
console.log(love)

const element  = <h1 className = "mt-5">This is JSX.</h1>
console.log(element);
ReactDOM.render(element,document.querySelector('#root'))