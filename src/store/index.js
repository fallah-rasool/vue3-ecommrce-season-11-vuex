import { createStore} from 'vuex'

const store = createStore({
        state(){
                return {
                        products:['m2','mk']
                }
        }
})

export default store;