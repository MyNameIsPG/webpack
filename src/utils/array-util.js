/** 一维数组转二维数组 */
const arrTrans = (num, arr) => {
  const iconsArr = [];
  arr.forEach((item, index) => {
    const page = Math.floor(index / num);
    if (!iconsArr[page]) {
      iconsArr[page] = [];
    }
    iconsArr[page].push(item);
  });
  return iconsArr;
};

export default {
  arrTrans
}