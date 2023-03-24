using demo_service.DTO;
using demo_service.Entity;
using demo_service.Service;
using Microsoft.AspNetCore.Mvc;

namespace demo_service.Controllers
{
    [Route("api/dataset")]
    [ApiController]
    public class DataSetController : ControllerBase
    {
        private readonly IDataSetService _dataSetService;
        public DataSetController(IDataSetService dataSetService)
        {
            _dataSetService = dataSetService;
        }

        [HttpGet]
        public async Task<ActionResult<DataSet>> GetListAsync()
        {
            try
            {
                return Ok(await _dataSetService.GetListAsync());

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(Guid id)
        {
            try
            {
                return Ok(await _dataSetService.GetById(id));

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync([FromBody] DataSetDTO dataSetModel)
        {
            try
            {
                if (dataSetModel == null)
                    return BadRequest();
                var result = await _dataSetService.PostAsync(dataSetModel);
                return Ok(result);

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync([FromBody] DataSetDTO dataSetModel, Guid id)
        {
            try
            {
                return Ok(await _dataSetService.PutAsync(dataSetModel, id));

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(Guid id)
        {
            try
            {
                return Ok(await _dataSetService.DeleteAsync(id));

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }
    }
}
