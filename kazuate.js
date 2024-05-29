// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

function hantei() {

  let i = document.querySelector('input[name="shimei"]');
  let yoso = i.value;

  let s;

kaisu++;
  console.log(kaisu+"回目の予想:"+yoso);
  s=(kaisu+"回目の予想:"+yoso);
if(kaisu>=4){
    console.log("答えは"+kotae+"でした.すでにゲームは終わっています");
    s=("答えは"+kotae+"でした.すでにゲームは終わっています");
}
else if (kotae === Number(yoso)) {
    console.log("正解です．おめでとう!");
    s=("正解です．おめでとう!");
}
else if(kaisu===3){
    console.log("まちがい．残念でした答えは"+kotae+"です．");
    s=("まちがい．残念でした答えは"+kotae+"です．");
}
else {
    if(yoso>kotae){
    console.log("まちがい．答えはもっと小さいですよ");
    s=("まちがい．答えはもっと小さいですよ");
}
else{
    console.log("まちがい．答えはもっと大きいですよ");
    s=("まちがい．答えはもっと大きいですよ");
}

}
let a1=document.querySelector('span#kaisu');
a1.textContent=kaisu;
let a2=document.querySelector('span#answer');
a2.textContent=yoso;

let b1=document.querySelector('p#result');
b1.textContent=s;

}
let z = document.querySelector('button');
z.addEventListener('click', hantei);


