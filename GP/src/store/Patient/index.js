export default {
    namespaced: true,
    state() {
        return {
            PatientPhase: 'PersonalInfo',
            PatientData: {},
        };
    },
    mutations: {
        changePhase(state , payload ){
            state.PatientPhase = payload.currentPhase;
        },
        FillData(state, payload){

            state.PatientData = { ...state.PatientData, ...payload};

        },




    } ,

    actions: {

        changePhase(context , payload){
                context.commit('changePhase' , payload )
            },

        FillData(context , payload){
            context.commit('FillData' , payload )
        },
    },
    getters: {
        PatientPhase(state) {
            return state.PatientPhase ;
        },
        PatientData(state){
            return state.PatientData ;
        },
    }
};
