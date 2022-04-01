import algoliasearch from "algoliasearch/lite";

const APPLICATION_ID = 'T9OUFXUSOB'
const SEARCH_API_KEY = 'f9591a309a17d71e481d2e0d9218409c'
const ALGOLIA_INDEX = 'products' 

const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX)

export default index