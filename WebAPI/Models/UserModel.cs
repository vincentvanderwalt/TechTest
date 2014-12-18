using System;

namespace WebAPI.Models
{
    public class UserModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}