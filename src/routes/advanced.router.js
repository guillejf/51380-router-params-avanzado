import express from 'express';
import { validateDato } from '../utils.js';

export const advancedRouter = express.Router();

advancedRouter.param('dato', async (req, res, next, dato) => {
  if (!validateDato(dato)) {
    return res.status(400).send('che, ingresa las cosas bien');
  } else {
    //req.body
    //req.paramas
    //req.query

    req.dato = 'COD-GUILLE-/#' + dato;
    next();
  }
  /* req.word = word;
  next(); */
});

advancedRouter.get('/:dato', (req, res) => {
  return res.send(req.dato);
});

advancedRouter.put('/:dato', (req, res) => {
  return res.send(req.dato);
});

advancedRouter.post('/:dato', (req, res) => {
  return res.send(req.dato);
});

advancedRouter.delete('/:dato', (req, res) => {
  return res.send(req.dato);
});
