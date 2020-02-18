var router = require("express").Router();
var Event = require("../../models/event");

router.get('/', async (req, res) => {
    const events = await Event.all();
    res.json({ events: events });
});

router.post('/', async (req, res) => {
    const result = await Event.create(req.body);
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const preference = await Event.getById(req.params.id);
    res.json(preference);
});

router.put('/:id', async (req, res) => {
    const result = await Event.update(req.params.id, req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await Event.delete(req.params.id);
    res.json(result);
});

router.get('/:id/preferences', async (req, res) => {
    const result = await Event.preferences(req.params.id);
    res.json(result);
});

router.post('/:id/preferences', async (req, res) => {
    const result = await Event.addPreference(req.params.id, req.body);
    res.json(result);
});

module.exports = router;
