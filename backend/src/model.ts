import * as dotenv from 'dotenv'
import { DATE, Sequelize } from 'sequelize'
import * as tedious from 'tedious'
import { initModels } from './models/init-models'
dotenv.config()

/**
 * See https://github.com/sequelize/sequelize/issues/7879
 */
DATE.prototype._stringify = function _stringify(date: any, options: any) {
  date = this._applyTimezone(date, options)
  return date.format('YYYY-MM-DD HH:mm:ss.SSS')
}

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  host: process.env.DBHOST,
  dialect: 'mssql',
  dialectModule: tedious,
  dialectOptions: {
    collation: 'Thai_CI_AS', // Set the appropriate collation
    ssl: {
      rejectUnauthorized: false
    }
  },
  logging: false
})

export const models = initModels(sequelize)

export default sequelize