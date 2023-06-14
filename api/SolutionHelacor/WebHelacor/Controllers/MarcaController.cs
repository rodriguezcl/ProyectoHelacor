using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebHelacor.Controllers
{
    public class MarcaController : ApiController
    {
        // GET: api/Marca
        public List<Marca> Get()
        {
            List<Marca> olist = new List<Marca>();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                olist = db.Marca.ToList();
            }
            return olist;
        }

        // GET: api/Marca/5
        public Marca Get(int id)
        {
            Marca oMarca = new Marca();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                oMarca = db.Marca.Find(id);
            }
            return oMarca;
        }

        // POST: api/Marca
        public void Post([FromBody] Marca value)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                db.Marca.Add(value);
                db.SaveChanges();


            }
        }

        // PUT: api/Marca/5
        public void Put(int id, [FromBody] Marca value)
        {

            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Marca oMarca = db.Marca.Find(id);

                oMarca.nombremarca = value.nombremarca;



                db.Entry(oMarca).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }

        }

        // DELETE: api/Marca/5
        public void Delete(int id)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Marca oMarca = db.Marca.Find(id);
                db.Marca.Remove(oMarca);
                db.SaveChanges();
            }
        }
    }
}
