import { request, gql } from 'graphql-request'
const HYGRAPGH_URL ='https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clt5wuwwd02oz07utrkik91nw/master'

//apres gql le quert de higraph
const getRecettes= async()=>{
  const query = gql`
    query mesRecettes {
      recettes {
        id
        name
        preparation
        ingredient
        pret
        imagerecette {
          url
        }
      }
    }    
  `
//   ATTENTION A L'apostrophe
const result = await request(HYGRAPGH_URL, query);
return result
}


export default {
  getRecettes
    //si on veut rajouter des articles ou des categories, créer nouveau const + en dessous de getslider mettre virgule et cité celui quon ajoute
}