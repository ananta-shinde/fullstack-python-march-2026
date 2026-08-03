import data from "./data.json";

export const getProducts=()=>{
      return data.products
}

export const getCategories=()=>{
      return data.subCategories
}

export const getProductById=()=>{
      return data.products[0];
}

