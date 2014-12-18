using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        public string GetTest()
        {
            return "TEst String";
        }

        [HttpPost]
        public JsonResult PostTest(string testString)
        {
            return Json(testString + " api");
        }
    }
}
