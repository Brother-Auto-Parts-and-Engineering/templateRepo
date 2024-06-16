// import { getModel } from '../modelUtilities'

export const exampleResolver = {
  Query: {
    example: async (_: any, args: any) => {
      // const models = await getModel()
      // const sqlData = await models.new_table.findAll()
      return [{
        id: 1,
        name: 'John Doe',
        age: 25
      }]
    }
  }
}