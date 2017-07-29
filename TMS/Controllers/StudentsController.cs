using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TMS.Controllers
{
    public class StudentsController : Controller
    {
        // GET: Students
        public ActionResult Create()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Create(Student student)
        {
            return View();
        }

        public JsonResult info()
        {
            var student = new Student();
            student.Id = 1;
            student.Name = "Jamil";

            var jsonItem = student;
            return Json(jsonItem, JsonRequestBehavior.AllowGet);
                

        }
       
    }

    public class Student
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int Id { get; set; }
    }
}