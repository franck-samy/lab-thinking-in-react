import productsList from '../data.json';

export function getAllProducts() {
  return new Promise((res) => {
    res(
      productsList.data.map((el) => {
        return {
          ...el,
          // id: v4(),
        };
      })
    );
  });
}
