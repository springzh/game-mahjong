export const sortArray = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let nu = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = nu;
      }
    }
  }
  return arr;
};
export const randomArray = (arr) => {
  for (let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x) ;
  return arr;
};