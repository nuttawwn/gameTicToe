const newLocal = "Tic Tac Toe game";
const head = document.getElementsByClassName("title")
head[0].innerHTML = "<h1>Tic Tac Toe game</h1>"

let cells =['','','','','','','','',''];
let currentplayer = 'X';
let result  = document.querySelector('.result');
let btns  = document.querySelectorAll('.btn');
let conds =
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const TicTacToe = (ele,index) =>{
    ele.value = currentplayer;
    ele.disabled = true;
    cells[index] = currentplayer
    currentplayer = currentplayer == 'X' ? 'O' : 'X'
    result.innerHTML = `Player ${currentplayer} Turn`
    for (let i=0; i < conds.length; i++)
    {
        let cond = conds[i];
        let a = cells[cond[0]]
        let b = cells[cond[1]]
        let c = cells[cond[2]]

        if( a == ''|| b == ''|| c == '')
        {
            continue;
        }
        if((a == b) && (b == c))
        {
            result.innerHTML = `Player ${a} Won 🎉`;
            btns.forEach((btn) => {
                btn.disabled = true
            })
            alert(`Player ${a} Won 🎉`)
        }
    }
}; 

function reset(){
    cells =['','','','','','','','',''];
    btns.forEach((btn)=>{
        btn.value = '';
    })
    currentplayer = 'X';
    result.innerHTML = `Player X Turn`
    btns.forEach((btn) => {
        btn.disabled = false
    });
}

document.querySelector('#reset').addEventListener('click',reset);
btns.forEach((btn,i) => {
    btn.addEventListener('click',()=>TicTacToe(btn,i));
});