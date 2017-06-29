const router = require('express').Router();
const Event = require('../../models/Event');

const auth = require('../auth');

/* GET event list. */
router.get('/', (req, res, next) => {
  Event.find({}, (err, events) => {
    if (err) return next(err);
    res.json(events);
  });
});

/* POST create / update event. */
router.post('/', auth.required, (req, res, next) => {
  if (!req.body) return res.sendStatus(404);
  const data = {
    title: req.body.title,
    description: req.body.description,
    date: {
      start: req.body.startDate,
      end: req.body.endDate
    },
    location: {
      address: {
        street: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      }
    },
    expireAt: req.body.endDate
  }

  if (req.body.url && req.body.text) {
    data.link = {
      url: req.body.url,
      text: req.body.text
    }
  }

  if (req.body.repeat) {
    data.date.repeat = req.body.repeat;
  }

  Event.findOneAndUpdate({ title: data.title }, data, { upsert: true, new: true }, (err, event) => {
    if (err) return next(err);
    return res.json({ message: 'OK', event });
  });
});

/* GET event. */
router.get('/:id', auth.required, (req, res, next) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) return next(err);
    return res.json({ message: 'OK', event });
  });
});

/* DELETE event. */
router.delete('/:id', auth.required, (req, res, next) => {
  Event.findByIdAndRemove(req.params.id, (err, event) => {
    if (err) return next(err);
    return res.json({ message: 'OK', event });
  });
});


module.exports = router;
