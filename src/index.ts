import { Subject, concat, concatMap, interval, map, mergeMap, of, range, tap, zipWith } from 'rxjs';

of(5)
  .pipe(
    mergeMap((value) => {
      return range(0, value).pipe(zipWith(interval(1000)));
    }),
    tap((value) => console.log(value)),
    map((values) => values[0])
  )
  .subscribe((value) => console.log(value));

const subject = new Subject<{ url: string; delay: number }>();

subject
  .pipe(
    concatMap((obj) => {
      return httpGet(obj.url, obj.delay);
    })
  )
  .subscribe((value) => console.log(value));

subject.next({ url: 'foo', delay: 500 });
subject.next({ url: 'bar', delay: 300 });
subject.next({ url: 'baz', delay: 100 });

function httpGet(url: string, delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const obj = { ResultData: url + ' -> resolved' };
      resolve(JSON.stringify(obj));
    }, delay);
  });
}
