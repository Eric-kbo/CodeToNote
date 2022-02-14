const stun = require('stun');

stun.request('stun.l.google.com:19302', (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res)
        const { address } = res.getXorAddress();
        console.log('your ip', address);
    }
});