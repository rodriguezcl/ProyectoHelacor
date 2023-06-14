using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebHelacor.Controllers
{
    public class ProductoController : ApiController
    {
        // GET: api/Producto
        public List<Producto> Get()
        {
            List<Producto> olist = new List<Producto>();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                olist = db.Producto.ToList();
            }
            return olist;
        }

        // GET: api/Producto/5
        public Producto Get(int id)
        {
            Producto oProducto = new Producto();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                oProducto = db.Producto.Find(id);
            }
            return oProducto;
        }

        // POST: api/Producto
        public void Post([FromBody] Producto value)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                db.Producto.Add(value);
                db.SaveChanges();


            }
        }

        // PUT: api/Producto/5
        public void Put(int id, [FromBody] Producto value)
        {
            
            using(HelacorLineadeTortaEntities db= new HelacorLineadeTortaEntities())
            {
                Producto oProducto = db.Producto.Find(id);

                oProducto.Descripcion = value.Descripcion;
                
                oProducto.Tipo = value.Tipo;
                oProducto.Unidad = value.Unidad;
                oProducto.Peso_Helado = value.Peso_Helado;
                oProducto.Peso_Total = value.Peso_Total;

                db.Entry(oProducto).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
            
        }

        // DELETE: api/Producto/5
        public void Delete(int id)
        {
            using(HelacorLineadeTortaEntities db=new HelacorLineadeTortaEntities())
            {
                Producto oProducto = db.Producto.Find(id);
                db.Producto.Remove(oProducto);
                db.SaveChanges();
            }
        }
    }
}
