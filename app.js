var express = require('express');
var Rx = require('rxjs/Rx');

var app = express();
var observable = Rx.Observable


//observable.of(1,2,3).map(function (x) { console.log(x); return x + '!!!'; });

observable.of('hello world')
    .subscribe(function(x) { console.log(x); });

var array = [1,2,3,4,5];

// Converts an array to an observable sequence
var source = Rx.Observable.from(array);

let values = [];

var subscription = source.subscribe(
    val => values.push(val),
    error => console.error('onError: %s',error),
    () => console.log('onCompleted'));


console.log(values);


Rx.Observable.create(function(observer) {
    observer.next("vue");
    observer.next("vuue");
    observer.complete("inutile");
    observer.next("pas vue");
}).subscribe(
    (e) => console.log("next: " + e)
    , (e) => console.log("error: " + e)
    , (e) => console.log("complete")
);



Rx.Observable.create(function(observer) {
    setTimeout(() => observer.next("aaa"), 700);
    setTimeout(() => observer.next("bbb"), 400);
    setTimeout(() => observer.next("ccc"), 300);
    setTimeout(() => observer.next("ddd"), 600);
    setTimeout(() => observer.next("eee"), 100);
    setTimeout(() => observer.next("fff"), 1100);
})
    .take(4)
    .subscribe(e => console.log(e));

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});
