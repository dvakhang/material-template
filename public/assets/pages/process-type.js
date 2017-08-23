window.app = new Vue({
    el: '#app',
    data: function () {
        return {
            processes: []
        }
    },

    methods: {
        onSelectProcessClick() {
            let paramValue = this.randomData(40);
            axios.post('/api/addProcess', {
                paramValue
            }).then(
                (response) => {
                    axios.get('/getprocesstype', {
                    })
                        .then((response) => {
                            this.processes = response.data;
                            this.processes = this.processes.map(function (process) {
                                return {
                                    id: process._id,
                                    processName: process.processName,
                                    stDt: moment(process.stDt).format("YYYY.MM.DD HH:mm"),
                                    endDt: moment(process.endDt).format("YYYY.MM.DD HH:mm"),
                                    leadTime: process.leadTime + " (day)",
                                    timeStamp: moment(process.timeStamp).format("YYYY.MM.DD HH:mm")
                                };
                            });
                        })
                })

        },
        randomDate(start, end, startHour, endHour) {
            var date = new Date(+start + Math.random() * (end - start));
            var hour = startHour + Math.random() * (endHour - startHour) | 0;
            date.setHours(hour);
            return date;
        },
        randomData(n) {
            let returnData = [];
            let stDtRandom = "";
            let endDtRandom = "";
            let leadTimeRandom = "";
            let processNameRandom = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A","A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"];
            for (var i = 0; i < n; i++) {
                stDtRandom = this.randomDate(new Date(2017, 08, 1), new Date(), 0, 23);
                endDtRandom = this.randomDate(new Date(2017, 08, 1), new Date(), 0, 23);
                while (stDtRandom > endDtRandom) {
                    stDtRandom = this.randomDate(new Date(2017, 08, 1), new Date(), 0, 23);
                }
                let date1 = new Date(stDtRandom);
                let date2 = new Date(endDtRandom);
                let timeDiff = Math.abs(date2.getTime() - date1.getTime());
                leadTimeRandom = this.round(timeDiff / (1000 * 3600 * 24),2);
                returnData.push({
                    processName: processNameRandom[i],
                    stDt: stDtRandom,
                    endDt: endDtRandom,
                    leadTime: leadTimeRandom
                });

            }
            return returnData;
        },
        round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }
    },
});

