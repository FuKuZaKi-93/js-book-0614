// ここに関数(function)を書く
// 注意：同じ名前の関数は、下に書いたものが優先される

// 以下は記入例。
// コメントに「どこに書いてあるコードか」が分かるように書く。（最低でもページ数を書く）

// リスト4.1 (p.79)
function sum() {
    var total = 0;
    for (var counter = 1; counter <= 10; counter++ ){
        total += counter;
    }
    window.alert(total);
}

// リスト4.2（p.81）
function sum(rangeTo){
    var total=0;
    for(var counter=1; counter<=rangeTo; counter++){
        total +=counter;
    }
    window.alert(total);
}

// リスト4.3（p.82）
function sum(rangeFrom,rangeTo){
    var total =0;
    for(var counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    window.alert(total);
}

// リスト4.4（p.84）
function sum(rangeFrom,rangeTo=10){
    var total=0;
    for(var counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    window.alert(total);
}

// 4-2-2（p.85）
function sum(rangeTo,rangeFrom=1){
    var total=0;
    for(var counter=rangeFrom; counter<=rangeTo; counter++){
        total+=counter;
    }
    window.alert(total);
}

// 4-2-3（p.85）
function sum(rangeFrom,rangeTo){
    var total =0;
    for (var counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    window.alert(total);
}

// p.87上
var hoge =5;
function testScope(){
    window.alert(hoge);
}

// p.87下
function sum (rangeFrom,rangeTo){
    let total=0;
    for(let counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    window.alert(total);
}

// p.88
function sum(rangeFrom,rangeTo){
    let total=0;
    for(let counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    window.alert(counter);
}

// 4-2-4(p.88)
function sum(rangeFrom,rangeTo,withDialog){
    var toal=0;
    for(var counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    if(withDialog){
        window.alert(total);
    }else{
        console.log(total);
        
    }
}

// p.91
var total=0;
function sum(rangeFrom,rangeTo){
    for(var counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
}

// p.92
function sum(rangeFrom,rangeTo){
    var total=0;
    for(var counter=rangeFrom; counter<=rangeTo; counter++){
        total += counter;
    }
    return total;
}

// p.93
function isNarrow(){
    return window.innerWidth<1000;
}
if(isNarrow()){
    window.alert('狭いです');
}else{
    window.alert('広いです');
}

// 4-3-2(p.99)
function calculateTaxIncluding(prices){
    var results=[];
    for (var index=0, length=prices.length; index<length; index++){
        results.push(prices[index]*1.08);
    }
    return results;
}