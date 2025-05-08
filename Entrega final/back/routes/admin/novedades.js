var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);

router.get('/', async function(req, res, next) {
  try {
    var novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedad => { 
      if (novedad.img_id) {
        const imagen = cloudinary.image(novedad.img_id, {
          width: 100,
          height: 100,
          crop: 'fill'
        });
        return { ...novedad, imagen };
      } else {
        return { ...novedad, imagen: '' };
      }
    });

    res.render('admin/novedades', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      novedades
    });

    } catch (error) {  
    console.log(error);
    res.render('admin/novedades', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      novedades: [],
      error: 'Error al obtener novedades'
    });
  }
});
    
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

    router.get('/eliminar/:id', async (req, res, next) => {
      try {
        var id = req.params.id;
        let novedad = await novedadesModel.getNovedadById(id);
      
        if (novedad) {
          if (novedad.img_id) {
            await destroy(novedad.img_id);
          }
          await novedadesModel.deleteNovedadById(id);
        }
        res.redirect('/admin/novedades');
      } catch (error) {
        console.log(error);
        res.redirect('/admin/novedades'); 
      }
    });
    
    router.get('/modificar/:id', async (req, res, next) => {
      let id = req.params.id;
      let novedad = await novedadesModel.getNovedadById(id);

      if (novedad.img_id) {
        const imagen = cloudinary.image(novedad.img_id, {
          width: 100,
          height: 100,
          crop: 'fill'
        });
        novedad.imagen = imagen;
      } else {
        novedad.imagen = '';
      }
      res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
      });
    });
     

      var destroy = util.promisify(cloudinary.uploader.destroy); 
    
               router.post('/modificar', async (req, res, next) => {
            try {
              let img_id = req.body.img_original;
              let borrar_img_vieja = false;

              if (req.body.img_delete === "1") {
                img_id = null;
                borrar_img_vieja = true;
              } else if (req.files && Object.keys(req.files).length > 0) {
                let imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
              }

          if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
          }

          var obj = {
            nombredelaobra: req.body.nombredelaobra,
            descripcion: req.body.descripcion,
            lugar: req.body.lugar,
            fechadeinicio: req.body.fechadeinicio,
            tipodeobra: req.body.tipodeobra,
            estado: req.body.estado,
            img_id
          };

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la obra',
      novedad: {
        id: req.body.id,
        nombredelaobra: req.body.nombredelaobra,
        descripcion: req.body.descripcion,
        lugar: req.body.lugar,
        fechadeinicio: req.body.fechadeinicio,
        tipodeobra: req.body.tipodeobra,
        estado: req.body.estado,
        img_id: req.body.img_original
      }
    });
  }
});

        router.post('/agregar', async (req, res, next) => {
          try {
            let img_id = '';
            if (req.files && Object.keys(req.files).length > 0) {
              let imagen = req.files.imagen;
              img_id = (await uploader(imagen.tempFilePath)).public_id;
            }

            if (req.body.nombredelaobra && req.body.descripcion && req.body.lugar &&
              req.body.fechadeinicio && req.body.tipodeobra && req.body.estado) {
          
                await novedadesModel.insertNovedad({
                  ...req.body,
                  img_id
                });
          
                res.redirect('/admin/novedades');
              } else {
                res.render('admin/agregar', {
                  layout: 'admin/layout',
                  error: true,
                  message: 'Todos los campos son requeridos'
                });
              }
            } catch (error) {
              console.log(error);
              res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'No se cargó la obra'
              });
            }
          });
          
          module.exports = router;
      