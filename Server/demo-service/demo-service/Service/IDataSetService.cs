using demo_service.DTO;
using demo_service.Entity;

namespace demo_service.Service
{
    public interface IDataSetService
    {
        public Task<DataSet> PostAsync(DataSetDTO dataSetModel);
        public Task<DataSet> PutAsync(DataSetDTO dataSetModel, Guid id);
        public Task<DataSet> DeleteAsync(Guid id);
        public Task<DataSet> GetById(Guid id);
        public Task<List<DataSet>> GetListAsync();
    }
}
