"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.of)(5)
    .pipe((0, rxjs_1.mergeMap)((value) => {
    return (0, rxjs_1.range)(0, value).pipe((0, rxjs_1.zipWith)((0, rxjs_1.interval)(1000)));
}), (0, rxjs_1.tap)((value) => console.log(value)), (0, rxjs_1.map)((values) => values[0]))
    .subscribe((value) => console.log(value));
const subject = new rxjs_1.Subject();
subject.pipe((0, rxjs_1.concatMap)((obj) => {
    return httpGet(obj.url, obj.delay);
}));
subject.next({ url: 'foo', delay: 500 });
subject.next({ url: 'bar', delay: 300 });
subject.next({ url: 'baz', delay: 100 });
function httpGet(url, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = { ResultData: url + ' -> resolved' };
            resolve(JSON.stringify(obj));
        }, delay);
    });
}
//# sourceMappingURL=index.js.map