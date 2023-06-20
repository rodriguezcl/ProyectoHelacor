using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebHelacor.Controllers
{
    public class TurnoController : ApiController
    {
        // GET: api/Turno
        public List<Turno> Get()
        {
            List<Turno> oList = new List<Turno>();
            using(HelacorLineadeTortaEntities db= new HelacorLineadeTortaEntities())
            {
                oList = db.Turno.ToList();
            
            }
            return oList;
        }

        // GET: api/Turno/5
        public Turno Get(int id)
        {
            Turno oTurno = new Turno();
            using(HelacorLineadeTortaEntities db= new HelacorLineadeTortaEntities())
            {
                oTurno = db.Turno.Find(id);


            }
            return oTurno;
        }

        // POST: api/Turno
        public void Post([FromBody]Turno value)
        {
            Turno oTurno = new Turno();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                db.Turno.Add(value);
                db.SaveChanges();


            }
        }

        // PUT: api/Turno/5
        public void Put(int id, [FromBody]Turno value)
        {
            
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Turno oTurno = db.Turno.Find(id);
                oTurno.Descripcion = value.Descripcion;
                oTurno.Horario_Inicio = value.Horario_Inicio;
                oTurno.Horario_Fin = value.Horario_Fin;

                db.Entry(oTurno).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();


            }
        }

        // DELETE: api/Turno/5
        public void Delete(int id)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Turno oTurno = db.Turno.Find(id);
                db.Turno.Remove(oTurno);
                db.SaveChanges();
            }
        }
    }
}
