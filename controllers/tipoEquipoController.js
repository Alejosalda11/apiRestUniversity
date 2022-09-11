const TipoEquipo = require("../models/TipoEquipo");
module.exports = {
    
  /**==========================================================================================
   * Ruta para listar tipos
   */
  async fetch(req, res) {
    const tipo = await TipoEquipo.find();
    res.json({ ok: true, data: { tipo }, err: null });
  },
  /**========================================================================================================
   * Ruta que devuelve una tipo especifica
   */
  async getOne(req, res) {
    const { _id } = req.params;
    const tipo = await TipoEquipo.findOne({ _id });
    res.json({ ok: true, data: { tipo }, err: null });
  },
  /**==========================================================================================
   * Ruta para crear tipo
   */
  create(req, res) {
    const tipo = new TipoEquipo(req.body);
    tipo.save((err, newTipo) => {
      if (err) {
        return res.status("400").json({ ok: false, data: null, err });
      }

      console.log("New Marca created", newTipo);
      res.status(200).json({ ok: true, data: { newTipo }, err: null });
    });
  },
  /**==========================================================================================
   * Ruta actualizar data de tipo
   */
  async update(req, res) {
    const tipo = req.body;
    // console.log('field', field)
    TipoEquipo.findOneAndUpdate(
      { _id: tipo._id },
      { $set: tipo },
      { new: true },
      (err, updated) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        // console.log('updated field', updated)
        res.json({ ok: true, data: { updated }, err: null });
      }
    );
  },
  /**=========================================================================================================
   * Ruta para borrar tipo
   */
  async delete(req, res) {
    const { _id } = req.params;
    const deleted = await TipoEquipo.findOneAndDelete({ _id });
    res.status(200).json({ ok: true, data: { deleted }, err: null });
  },
};
