window.onload = ()=>{
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
}

document.onkeypress = function(e) {
    // エンターキーはサイト全体で無視
    if (e.key === 'Enter') {
      return false;
    }
  }



let question_count = 0

const submit_check = () =>{
    if(question_count == 0){
        let input = document.getElementById('answer').value;
        // console.log(input)
        if(input == 975318642){
            alert('Correct!\nNext question!')
            document.getElementById('question').innerHTML="<code>(e, N) = (617, 391) <br> 暗号文:321 <br> 答え:平文</code>";
            document.getElementById('answer').value="";
            document.getElementById('second_hint').style.display="block"
            question_count ++;
        }else{
            alert('Incorrect...')
        }
    }else if(question_count == 1){    
        let input = document.getElementById('answer').value;
        // console.log(input)
        if(input == 321){
            alert('Correct!!\n適当に好きな数で問題作ってたら暗号文も平文も同じ数字になる組み合わせ見つけちゃいました..(by作成者)\nFinal Question!')
            document.getElementById('question').innerHTML = "<code>(e, N) = 617, 53599447444519718883454172244343524973556650714466888430899038253940709909027<br><br>暗号文:4551476846910292281274643385042264545329694854495747719165311460733824828038</code>";
            document.getElementById('answer').value="";
            document.getElementById('second_hint').style.display="none";
            document.getElementById('before_third_question').style.display="block"
            question_count ++;
        }else{
            alert('Incorrect...');
        }
    }else if(question_count == 2){
        let input = document.getElementById('answer').value;
        if(input == 42431124433542341211123154431513454215n){
            // nをつけるとBigintになるらしい．
            document.querySelector('#answer').desabled = "disabled";
            document.getElementById('answer').value="";
            document.querySelector('#answer').placeholder= "congratulations!";
            document.querySelector('#submit').disabled = "disabled";
            alert('Correct!!')
            document.getElementById('third_hint').style.display="none";
            document.getElementById('before_third_question').style.display="none";
            document.getElementById('bonus').style.display="block";
            document.getElementById('question').innerHTML = '<code>424311 2443 "3542341211123154" 431513454215...</code>'
        }else{
            alert('Incorrect...')
        }
}
}


const second_hint = () =>{
    alert('Do you know "Fermat Attack on RSA" ?');
}

const third_hint= ()=>{
    alert('Do you know "Common Modulus Attack" ?');
}

const third_question = () =>{
    alert('隠れていた文章を見つけた..!');

    document.getElementById('question').innerHTML="<code>    (e, N) = 617, 53599447444519718883454172244343524973556650714466888430899038253940709909027<br><br>暗号文:4551476846910292281274643385042264545329694854495747719165311460733824828038    <br>    <br>    (e, N) = 2017, 53599447444519718883454172244343524973556650714466888430899038253940709909027<br><br>暗号文:3214600753027948285593566460518957639288007440833625678102661334929803266776</code>";    
    document.getElementById('before_third_question').style.display="none";
    document.getElementById('third_hint').style.display="block";
}

const bonus = () =>{
    alert('ここまで遊んでくださり，ありがとうございます．\nこの数字，実は意味があるんです..\n(ポリュビオスの暗号表)');
}