import { projects } from '../lib/data.js';

export default function handler(req, res) {
  res.status(200).json(projects);
}