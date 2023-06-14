using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebHelacor.Controllers
{
    public class PuestoController : ApiController
    {
        // GET: api/Puesto
        public List<Puesto> Get()
        {
            List<Puesto> oList = new List<Puesto>();
            using (HelacorLineadeTortaEntities db= new HelacorLineadeTortaEntities())
            {
                oList = db.Puesto.ToList();
            }
            return oList;
        }

        // GET: api/Puesto/5
        public Puesto Get(int id)
        {
            Puesto oPuesto = new Puesto();
            using(HelacorLineadeTortaEntities db= new HelacorLineadeTortaEntities())
            {
                oPuesto = db.Puesto.Find(id);
            }
            return oPuesto;
        }

        // POST: api/Puesto
        public void Post([FromBody]Puesto value)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                db.Puesto.Add(value);
                db.SaveChanges();


            }
        }

        // PUT: api/Puesto/5
        public void Put(int id, [FromBody] Puesto value)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Puesto oPuesto = db.Puesto.Find(id);
                oPuesto.Tipo_puesto = value.Tipo_puesto;
                oPuesto.Descripcion = value.Descripcion;

                db.Entry(oPuesto).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                


            }
        }

        // DELETE: api/Puesto/5
        public void Delete(int id)
        {
            using(HelacorLineadeTortaEntities db= new HelacorLineadeTortaEntities())
            {
                Puesto oPuesto = db.Puesto.Find(id);
                db.Puesto.Remove(oPuesto);
                db.SaveChanges();
            }
        }
    }
}
