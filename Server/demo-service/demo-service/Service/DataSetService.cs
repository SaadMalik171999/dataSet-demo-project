using demo_service.DTO;
using demo_service.Repository;
using System.Data;

namespace demo_service.Service
{
    public class DataSetService : IDataSetService
    {
        private readonly IDataSetRepository? _dataSetRepository;

        public DataSetService(IDataSetRepository dataSetRepository)
        {
            _dataSetRepository = dataSetRepository;
        }

        public async Task<Entity.DataSet> DeleteAsync(Guid id)
        {
            return await _dataSetRepository.DeleteAsync(id);
        }

        public async Task<Entity.DataSet> GetById(Guid id)
        {
            return await _dataSetRepository.GetById(id);
        }

        public async Task<List<Entity.DataSet>> GetListAsync()
        {
            return await _dataSetRepository?.GetListAsync();
        }

        public async Task<Entity.DataSet> PostAsync(DataSetDTO dataSetModel)
        {
            return await _dataSetRepository.PostAsync(dataSetModel);
        }

        public async Task<Entity.DataSet> PutAsync(DataSetDTO dataSetModel, Guid id)
        {
            return await _dataSetRepository.PutAsync(dataSetModel, id);
        }

    }
}
