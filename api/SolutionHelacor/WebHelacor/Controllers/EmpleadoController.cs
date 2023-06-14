using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebHelacor.Controllers
{
    public class EmpleadoController : ApiController
    {
        // GET: api/Empleado
        public List<Empleado> Get()
        {
            List<Empleado> olist = new List<Empleado>();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                olist = db.Empleado.ToList();
            }
            return olist;
        }

        // GET: api/Empleado/5
        public Empleado Get(int id)
        {
            Empleado oEmpleado = new Empleado();
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                oEmpleado = db.Empleado.Find(id);
            }
            return oEmpleado;
        }

        // POST: api/Empleado
        public void Post([FromBody] Empleado value)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                db.Empleado.Add(value);
                db.SaveChanges();


            }
        }

        // PUT: api/Empleado/5
        public void Put(int id, [FromBody] Empleado value)
        {

            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Empleado oEmpleado = db.Empleado.Find(id);

                oEmpleado.Apellido = value.Apellido;
                oEmpleado.Nombre = value.Nombre;
                oEmpleado.I_Identidad = value.I_Identidad;
                oEmpleado.Tipo_I_Identidad = value.Tipo_I_Identidad;
                oEmpleado.Telefono = value.Telefono;

                db.Entry(oEmpleado).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }

        }

        // DELETE: api/Empleado/5
        public void Delete(int id)
        {
            using (HelacorLineadeTortaEntities db = new HelacorLineadeTortaEntities())
            {
                Empleado oEmpleado = db.Empleado.Find(id);
                db.Empleado.Remove(oEmpleado);
                db.SaveChanges();
            }
        }
    }
}
