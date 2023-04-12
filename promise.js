// closure
// function createrCounter() {
//   let counter = 0;
//   function increase() {
//     return ++counter;
//   }
//   return increase;
// }
// const counter1 = createrCounter();
// const counter2 = createrCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// xu ly bat dong bo sử dụng callback , promise , async/await
//1. call back
// let x;
// const callBack = (sdt) => {
//   x = sdt;
//   console.log(`sdt là : ${x}`);
// };

// const xinSdt = (callBack) => {
//   let sdt;
//   console.log("cho t xin sdt thằng Nam");
//   console.log("đang tìm sdt thằng Nam");
//   setTimeout(() => {
//     console.log("Tim được rồi");
//     sdt = 123456;
//     callBack(sdt);
//   }, 1000);
// };

// xinSdt(callBack);

// 2. sử dụng promise
let x;
const xinSdt = () => {
  const timthay = false;
  console.log(" cho t xin sdt thang nam");
  console.log(" dang tim sdt thang nam...");
  const batdautimkiem = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timthay) {
        console.log("tim thay roi");
        let sdt = 123456;
        resolve(sdt);
      } else {
        reject("khong tim duoc");
      }
    }, 1000);
  });
  return batdautimkiem;
};
const sacpin = () => {
  console.log("doi ty sac pin đã");
  let chaypin = true;
  const batdausacpin = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!chaypin) {
        console.log("sac thành công");
        resolve();
      } else {
        reject("chay pin hỏng dt rồi");
      }
    }, 1000);
  });
  return batdausacpin;
};
const goiChoNam = () => {
  console.log("dang goi cho Nam");
};
xinSdt()
  .then((res) => {
    console.log("sdt cua no la ", res);
    return sacpin();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
