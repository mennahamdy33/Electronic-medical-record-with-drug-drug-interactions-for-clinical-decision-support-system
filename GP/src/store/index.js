import { createStore } from 'vuex';

const store = createStore({
    state() {
      return {
        SignupPhase: 'PersonalInformation',
        SignUpData: {},
      };
    },
    mutations: {
      changePhase(state , payload ){
        state.SignupPhase = payload.currentPhase;
    },
    FillData(state, payload){
       
        state.SignUpData = { ...state.SignUpData, ...payload};

      }
    } ,
  
    actions: {
      changePhase(context , payload){
        context.commit('changePhase' , payload )
      },

      FillData(context , payload){
        context.commit('FillData' , payload )
      }
    },
    getters: {
      SignupPhase(state) {
        return state.SignupPhase ;
      },
      SignUpData(state){
          return state.SignUpData ;
      }
    }
  });

export default store;