import { mapState } from 'vuex';

export default {
    computed:mapState(['lang']),
    watch:{
      lang(){
        this.getData()
      }
    },
}