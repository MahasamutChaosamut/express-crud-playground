console.log('A sync start');
setTimeout(() => console.log('B timeout'), 0);
Promise.resolve().then(() => console.log('C promise'));
process.nextTick(() => console.log('D nextTick'));
(async () => {
  console.log('E async fn');
  await null;
  console.log('F after await');
})();
console.log('G sync end');
