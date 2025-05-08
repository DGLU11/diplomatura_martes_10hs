var pool = require('./bd');

async function insertNovedad(obj) {
  try {
    var query = "INSERT INTO novedades SET ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


async function getNovedades() {
  try {
    const rows = await pool.query('SELECT * FROM novedades');
      return rows;
  } catch (err) {
    throw err;
  }
}

async function deleteNovedadById(id) {
  try {
    var query = 'DELETE FROM novedades WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getNovedadById(id) {
  try {
    var query = 'SELECT * FROM novedades WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0]; 
  } catch (error) {
    throw error;
  }
}

async function modificarNovedadById(obj, id) {
  try {
    var query = 'UPDATE novedades SET ? WHERE id = ?';
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {getNovedades,deleteNovedadById, insertNovedad,getNovedadById,modificarNovedadById };

  