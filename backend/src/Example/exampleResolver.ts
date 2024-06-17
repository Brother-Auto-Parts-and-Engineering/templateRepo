import { equal } from "assert"
import { getModel } from "../modelUtilities"

export const exampleResolver = {
  Query: {
    example: async (_: any, args: any) => {
      const models = await getModel()
      const sqlData = await models.users.findAll({
        attributes: [
          "id",
          "username",
          "firstname",
          "lastname"
        ]
      })
     
      return sqlData
    }
  }
}