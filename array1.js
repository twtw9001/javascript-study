// ucFirstWord("kim han bit");
// Kim Han Bit 이 나오게 하세요

// ucFirstWord("yang jun mo")
// Yang Jun Mo 가 나오게 하세요

//   .split(" ")

//   [("kim", "han", "bit")]
//   [("yang", "jun", "mo")]

//   [("Yang", "Jun", "Mo")]
//   .join( " ");

let newName = [];

function ucFirstWord(userName) {
  let name1 = userName.split(" ");
  console.log(name1);

  for (let i = 0; i < name1.length; i++) {
    let name2 = name1[i][0].toUpperCase() + name1[i].slice(1);
    console.log(name2);
    newName.push(name2);
  }
}

ucFirstWord("kim han bit");
// ucFirstWord("yang jun mo");

console.log(newName.join(" "));
