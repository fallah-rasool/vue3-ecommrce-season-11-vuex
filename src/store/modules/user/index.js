export default {

          namespaced :true,

        state : ()=> ({
                user:{name:"rasool", id:1},
                isLogged:true
           }),
           getters:{
                name: state => state.user.name
           }
          

}