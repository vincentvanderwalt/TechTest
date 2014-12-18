using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;

namespace WebAPI
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        public void Configure(IApplicationBuilder app)
        {
            //app.Build(next => )

            app.Use(async (context, next) =>
                        {
                            context.Response.Headers.Append("Access-Control-Allow-Origin", "*");
                            context.Response.Headers.Add("Access-Control-Allow-Headers", new[] { "Content-Type, x-xsrf-token" });
                //context.Response.Headers.Add("Access-Control-Allow-Methods", new[] { "*" });
                await next();
                        });
            app.UseMvc();
        }
    }
}
