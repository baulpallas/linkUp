var router = require("express").Router();
var Creator = require("../../models/creator");

router.get('/', async (req, res) => {
    const creators = await Creator.findAll();
    res.json({ creators: creators });
});

router.post('/', async (req, res) => {
    const result = await Creator.create(req.body);
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const creator = await Creator.findAll({ where: { id: req.params.id } });
    res.json(creator);
});

router.put('/:id', async (req, res) => {
    const result = await Creator.update(req.body, { where: { id: req.params.id } });
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await Creator.destroy({ where: { id: req.params.id } });
    res.json(result);
});

module.exports = router;
