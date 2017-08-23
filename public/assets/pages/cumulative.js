window.app = new Vue({
    el: '#app',
    data: function () {
        return {
            cumulatives: []
        }
    },
    methods: {
        onShowResultClick() {
            axios.get('/getCumulative', {
            }).then((response) => {
                this.cumulatives = response.data.map(function (cumulative) {
                    return {
                        processName: cumulative.processName,
                        lowerBound: cumulative.lowerBound,
                        upperBound: cumulative.upperBound,
                        frequency: cumulative.frequency,
                        cumuFrequency: cumulative.cumuFrequency,
                        percentage: cumulative.percentage + '%',
                        level: cumulative.level + ' Level'
                    };
                })
            })
        },
    }

});