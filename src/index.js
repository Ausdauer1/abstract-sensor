class Sensor {
    constructor(deviceId) {
        this.powerStatus = 'off';
        this.reportingInterval = 10000;
        this.deviceId = deviceId;
    }
    turn(onOff) {
        if (this.powerStatus === 'off') {
            this.powerStatus = onOff;
            this.status = 'idle';

            setTimeout(() => {
                this.status = 'sensingDistance';
            }, this.reportingInterval);

            setTimeout(() => {
                this.status = 'reportingData';
            }, this.reportingInterval + 500);

            setTimeout(() => {
                this.status = 'idle';
            }, this.reportingInterval + 1500);
        } else if (this.powerStatus === 'on' && onOff === 'on') {
            throw new Error('아이고야 틀렸뿟네 다시 해라잉');
        } else {
            this.powerStatus = onOff;
        }
    }
}
class IotServer {
    constructor() {
        this.sensor
    }

    start(newSensor) {
        this.sensor = newSensor;
    }

    publish(action) {
        if (this.sensor[0].powerStatus !== 'off') {
            if (action.actionId === 'CHANGE_REPORTING_INTERVAL') {
                this.sensor[0].reportingInterval = action.payload;
            }
        }
    }
}

module.exports = {
    Sensor,
    IotServer,
};
