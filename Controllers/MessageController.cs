using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ERP.Models;

namespace ERP.Controllers
{
    public class MessageController : Controller {
        public IActionResult SayHello(){
            //return Content ("<h1>Hello There</h1>");
            return View();
        }
    }
}