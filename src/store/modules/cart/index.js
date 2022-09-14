
import {ADD_PRODUCT } from './types'

const items = JSON.parse(localStorage.getItem('cart'))?.items ?? []

export const namespaced = true

export const state =()=>({

        items
       
})


export const getters ={}

export const mutations ={

        [ADD_PRODUCT](state,item){

               // state.items.push({...item,quantity:1})

                const product = state.items.find(product => product.id === item.id)
               
                if(product) {
                        product.quantity++
                } else {
                        state.items.push({ ...item, quantity: 1 })
                }

        }
}

export const actions ={

    addItem({commit,state},payload){

        commit(ADD_PRODUCT,payload)

        localStorage.setItem('cart', JSON.stringify(state))
        

    }
}
