import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts(input : {
    $page : Int!
  }){
    getProducts(page : $page){
      error
      result
      products{
        id
        name
        price
        options{
          id
          name
          price
        }
      }
    }    
  }
`;

export interface GetProductsInput {
  page: number;
}

export interface CommonRes {
  error: string;
  result: boolean;
}

export interface GetProductsOutput {
  getProducts: GetProductsData;
}

export interface GetProductsData extends CommonRes {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  options: Option[];
}

export interface Option {
  id: number;
  name: string;
  price: number;
}
