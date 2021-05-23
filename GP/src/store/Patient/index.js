export default {
    namespaced: true,
    state() {
        return {
            PatientPhase: 'PersonalInfo',
            PatientData: {},
            PatientID: ''
        };
    },
    mutations: {
        changePhase(state , payload ){
            state.PatientPhase = payload.currentPhase;
        },
        FillData(state, payload){

            state.PatientData = { ...state.PatientData, ...payload};

        },


        set_PatientID(state, payload){

            state.PatientID = payload;

        },


    } ,

    actions: {
        PatientPhase(context , payload){
            context.commit('changePhase' , payload )
        },

        FillData(context , payload){
            context.commit('FillData' , payload )
        },

        set_PatientID(context , payload){
            context.commit('set_PatientID' , payload )
        }
    },
    getters: {
        PatientPhase(state) {
            return state.PatientPhase ;
        },
        PatientData(state){
            return state.PatientData ;
        },
        set_PatientID(state){
            return state.set_PatientID ;
        },
    }
};
