import { getModel } from "../modelUtilities"

export const exampleResolver = {
  Query: {
    example: async (_: any, args: any) => {
      const models = await getModel()
      const sqlData = await models.new_table.findAll()
      return sqlData
    }
  }
}