using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebHelacor.Controllers
{
    public class PaisController : ApiController
    {
       // GET: api/Pais
        public List<Pais> Get()
        {
            List<Pais> olist = new List<Pais>();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                olist = db.Pais.ToList();
            }
            return olist;
        }

        // GET: api/Pais/5
        public Pais Get(int id)
        {
            Pais oPais = new Pais();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                oPais = db.Pais.Find(id);
            }
            return oPais;
        }

        // POST: api/Marca
        public void Post([FromBody] Pais value)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                db.Pais.Add(value);
                db.SaveChanges();


            }
        }

        // PUT: api/Pais/5
        public void Put(int id, [FromBody] Pais value)
        {

            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Pais oPais = db.Pais.Find(id);

                oPais.NombrePais = value.NombrePais;
                oPais.C_Postal = value.C_Postal;



                db.Entry(oPais).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }

        }

        // DELETE: api/Pais/5
        public void Delete(int id)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Pais oPais = db.Pais.Find(id);
                db.Pais.Remove(oPais);
                db.SaveChanges();
            }
        }
    }
}
