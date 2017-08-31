window.app = new Vue({
    el: '#app',
    data: function () {
        return {
            
        }
    },
    mounted(){
        this.showpicture(1,2);
        this.showpicture(2,2);
    },
    methods: {
        showpicture(position, id){
            switch(position){
                case 1:
                    $("#imgLeft").append("<img src=\"/assets/img/notice-hole-result/golf532.jpg\">");
                    break;
                case 2:
                    $("#imgRight").append("<img src=\"/assets/img/notice-hole-result/golf342.jpg\">");
                    break;
            }
        }
    }
});