const Marcas = require("../models/Marcas");
module.exports = {
    
  /**==========================================================================================
   * Ruta para listar Marcas
   */
  async fetch(req, res) {
    const marca = await Marcas.find();
    res.json({ ok: true, data: { marca }, err: null });
  },
  /**========================================================================================================
   * Ruta que devuelve una Marca especifica
   */
  async getOne(req, res) {
    const { _id } = req.params;
    const marca = await Marcas.findOne({ _id });
    res.json({ ok: true, data: { marca }, err: null });
  },
  /**==========================================================================================
   * Ruta para crear Marca
   */
  create(req, res) {
    const marca = new Marcas(req.body);
    marca.save((err, newMarca) => {
      if (err) {
        return res.status("400").json({ ok: false, data: null, err });
      }

      console.log("New Marca created", newMarca);
      res.status(200).json({ ok: true, data: { newMarca }, err: null });
    });
  },
  /**==========================================================================================
   * Ruta actualizar data de Marca
   */
  async update(req, res) {
    const marca = req.body;
    // console.log('field', field)
    Marcas.findOneAndUpdate(
      { _id: marca._id },
      { $set: marca },
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
   * Ruta para borrar Marca
   */
  async delete(req, res) {
    const { _id } = req.params;
    const deleted = await Marcas.findOneAndDelete({ _id });
    res.status(200).json({ ok: true, data: { deleted }, err: null });
  },
};
