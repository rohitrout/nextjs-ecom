"use server";

export const fetchProductsData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/");
  const json = await response.json();
  return json;
};

export const fetchProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await response.json();
  return json;
};
