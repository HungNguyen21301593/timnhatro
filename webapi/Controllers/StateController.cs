using Microsoft.AspNetCore.Mvc;
using OpenQA.Selenium;
using core.Service;
using webapi.Service;
using Firebase.Database;
using System.Numerics;
using Firebase.Database.Query;
using Newtonsoft.Json;

namespace YourApiNamespace.Controllers
{
    [Route("api/state")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private const string FirebaseDatabaseUrl = "https://rs-agent-map-default-rtdb.asia-southeast1.firebasedatabase.app/"; 
        private readonly FirebaseClient firebaseClient;


        public StateController()
        {
            firebaseClient = new FirebaseClient(FirebaseDatabaseUrl);
        }


        [HttpPost()]
        public async Task<IActionResult> CreateNewState([FromBody] MapStateDto mapstate)
        {
            var result = await firebaseClient.Child("state").PostAsync(mapstate.StateJson);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStateById([FromRoute] string id)
        {
            var result = await firebaseClient.Child($"state/{id}").OnceAsJsonAsync();
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> CreateNewState([FromRoute] string id, [FromBody] MapStateDto mapstate)
        {
            await firebaseClient.Child($"state/{id}").PatchAsync(mapstate.StateJson);
            return Ok();
        }
    }
}
