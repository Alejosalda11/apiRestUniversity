const EstadoEquipos = require("../models/EstadoEquipos");
module.exports = {
    
  /**==========================================================================================
   * Ruta para listar Estado de Equipo
   */
  async fetch(req, res) {
    const estado = await EstadoEquipos.find();
    res.json({ ok: true, data: { estado }, err: null });
  },
  /**========================================================================================================
   * Ruta que devuelve un Estado de Equipo
   */
  async getOne(req, res) {
    const { _id } = req.params;
    const estado = await EstadoEquipos.findOne({ _id });
    res.json({ ok: true, data: { estado }, err: null });
  },
  /**==========================================================================================
   * Ruta para crear Estado de Equipo
   */
  create(req, res) {
    const estado = new EstadoEquipos(req.body);
    estado.save((err, newEstado) => {
      if (err) {
        return res.status("400").json({ ok: false, data: null, err });
      }

      console.log("New Marca created", newEstado);
      res.status(200).json({ ok: true, data: { newEstado }, err: null });
    });
  },
  /**==========================================================================================
   * Ruta actualizar data de Estado de Equipo
   */
  async update(req, res) {
    const estado = req.body;
    // console.log('field', field)
    EstadoEquipos.findOneAndUpdate(
      { _id: estado._id },
      { $set: estado },
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
   * Ruta para borrar Estado de Equipo
   */
  async delete(req, res) {
    const { _id } = req.params;
    const deleted = await EstadoEquipos.findOneAndDelete({ _id });
    res.status(200).json({ ok: true, data: { deleted }, err: null });
  },
};
