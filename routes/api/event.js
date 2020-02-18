var router = require("express").Router();
var Event = require("../../models/event");

router.get('/', async (req, res) => {
    const events = await Event.findAll();
    res.json({ events: events });
});

router.post('/', async (req, res) => {
    const result = await Event.create(req.body);
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const preference = await Event.findAll({ where: { id: req.params.id } });
    res.json(preference);
});

router.put('/:id', async (req, res) => {
    const result = await Event.update(req.body, { where: { id: req.params.id } });
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await Event.delete({ where: { id: req.params.id } });
    res.json(result);
});

router.get('/:id/preferences', async (req, res) => {
    const result = await Event.preferences({ where: { id: req.params.id } });
    res.json(result);
});

router.post('/:id/preferences', async (req, res) => {
    const result = await Event.addPreference(req.body, { where: { id: req.params.id } });
    res.json(result);
});

module.exports = router;
