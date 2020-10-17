const orphanages = require('./database/fakedata.js');

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },

    createVolunteer(req, res) {
        return res.render('create-volunteer')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    orphanages(req, res) {
        return res.render('orphanages', { orphanages })
    }
    
};
