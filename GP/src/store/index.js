import { createStore } from 'vuex';

const store = createStore({
    state() {
      return {
        SignupPhase: 'PersonalInformation',
        SignUpData: {},
        user :{}
      };
    },
    mutations: {
      changePhase(state , payload ){
        state.SignupPhase = payload.currentPhase;
    },
    FillData(state, payload){
       
        state.SignUpData = { ...state.SignUpData, ...payload};

      },

    fill_userData(state, payload){
       
        state.user = payload;
        // console.log(state.user)
        // console.log(payload)

      },


    } ,
  
    actions: {
      changePhase(context , payload){
        context.commit('changePhase' , payload )
      },

      FillData(context , payload){
        context.commit('FillData' , payload )
      },

      fill_userData(context , payload){
        context.commit('fill_userData' , payload )
      }
    },
    getters: {
      SignupPhase(state) {
        return state.SignupPhase ;
      },
      SignUpData(state){
          return state.SignUpData ;
      },
      user(state){
        return state.user ;
      }
    }
  });

export default store;