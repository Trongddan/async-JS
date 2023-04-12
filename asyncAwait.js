// xử lý bất đồng bộ bằng cách sử dụng async await
const xinSdt = () => {
  const timthay = true;
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
  let chaypin = false;
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
const handong = async () => {
  try {
    const sdt = await xinSdt();
    const sac = await sacpin()
    console.log(" bắt đầu gọi cho Nam qua sô: ",sdt);
  } catch (error) {
    console.log(error);
  }
};
handong();
