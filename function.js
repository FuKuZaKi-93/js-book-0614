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
