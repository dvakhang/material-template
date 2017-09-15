window.app = new Vue({
    el: '#app',
    data: function () {
      return {
        waiting: false
      }
    },
    mounted() {

    },
    methods: {
        waitings(){
            this.waiting = true;
            if(info){
                this.waiting = false;
            }
        }
    }
  });
  