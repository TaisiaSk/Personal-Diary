import PostsService from '../services/notes-service.js';

class NotesController {
  async create(req, res) {
    try {
      const { date, text } = req.body;

      if (!date || !text) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const note = await PostsService.create(req.body);
      return res.status(201).json(note);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async read(req, res) {
    try {
      const notes = await PostsService.read();
      return res.json(notes);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      await PostsService.delete(req.params.id);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    try {
      const text = req.body.text;

      if (!text) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const note = await PostsService.update(req.params.id, text);

      if (!note) {
        return res.status(404).json({ error: 'ID not found' });
      }

      return res.json(note);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new NotesController();
