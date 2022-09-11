
import { SET_PRODUCTS_MUTATIONS } from './type'
import axios from 'axios'

export default {

        async getProducts({commit,dispatch},{text,id}){

                const { data} = await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json')

                commit(SET_PRODUCTS_MUTATIONS,data)

                dispatch('log', {text,id})
                console.log('getProducts :',text)
        
               
        },

        log(ctx,payload){
                console.log('fun log:', payload)
                console.log('actions logged')
        }
        
}