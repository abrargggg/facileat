import { request, gql } from 'graphql-request'
const HYGRAPH_URL='https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clt5wuwwd02oz07utrkik91nw/master'


const getCategories= async()=>{
  const query = gql`
  query mesCategories {
    categories {
      id
      name
    }
  }
  
  `
const result = await request(HYGRAPH_URL, query);
return result;
}

const getRestaurants= async()=>{
  const query = gql`
  query mesRestaurants {
    restaurants {
      adresse
      avis
      categorie {
        name
      }
      id
      image {
        url
      }
      name
      ouverture
      telephone
    }
  }
  
  `
const result = await request(HYGRAPH_URL, query);
return result;
}


const getRestaurantsDetails= async(nom)=>{
  const query = gql`
  query monRestaurant {
    restaurants(where: {name: "`+nom+`"}) {
      id
      name
      adresse
      avis
      ouverture
      categorie {
        name
        id
      }
      telephone
      image {
        url
      }
    }
  }
  
  `
const result = await request(HYGRAPH_URL, query);
return result;
}


export default{
    getCategories,
    getRestaurants,
    getRestaurantsDetails
}