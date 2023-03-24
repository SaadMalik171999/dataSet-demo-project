using demo_service.ContextDB;
using demo_service.DTO;
using demo_service.Entity;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace demo_service.Repository
{
    public class DataSetRepository : IDataSetRepository
    {
        private readonly DemoDBContext _contextapp;

        public DataSetRepository(DemoDBContext contextapp)
        {
            _contextapp = contextapp;
        }
        public async Task<Entity.DataSet> DeleteAsync(Guid id)
        {
            var result = await _contextapp.DataSets.FirstOrDefaultAsync(x => x.Id == id);
            if (result != null)
            {
                _contextapp.DataSets.Remove(result);
                _contextapp.SaveChanges();
            }
            return result;
        }

        public async Task<Entity.DataSet> GetById(Guid id) => await _contextapp.DataSets.FirstOrDefaultAsync(x => x.Id == id);

        public async Task<List<Entity.DataSet>> GetListAsync()
        {
            return await _contextapp.DataSets.ToListAsync();
        }

        public async Task<Entity.DataSet> PostAsync(DataSetDTO dataSetModel)
        {
            try
            {
                Entity.DataSet dataSet = new Entity.DataSet();
                dataSet.Start = dataSetModel.Start;
                dataSet.End = dataSetModel.End;
                dataSet.Event = dataSetModel.Event;

                _contextapp.DataSets.Add(dataSet);
                _contextapp.SaveChanges();

                return dataSet;


            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }


        }

        public async Task<Entity.DataSet> PutAsync(DataSetDTO dataSetModel, Guid id)
        {
            var dataSetExist = await _contextapp.DataSets.FindAsync(id);

            if (dataSetExist != null)
            {
                dataSetExist.Start = dataSetModel.Start;
                dataSetExist.End = dataSetModel.End;
                dataSetExist.Event = dataSetModel.Event;


                _contextapp.DataSets.Update(dataSetExist);
                await _contextapp.SaveChangesAsync();

                return dataSetExist;

            }
            return dataSetExist;
        }
    }
}
