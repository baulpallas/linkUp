var router = require("express").Router();
var Preference = require("../../models/preferences");

router.get('/', async (req, res) => {
    const preferences = await Preference.all();
    res.json({ preferences: preferences }); 
});

router.post('/', async (req, res) => {
    const result = await Preference.create(req.body);
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const preference = await Preference.getById(req.params.id);
    res.json(preference);
});

router.put('/:id', async (req, res) => {
    const result = await Preference.update(req.params.id, req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await Preference.delete(req.params.id);
    res.json(result);
});

module.exports = router;
