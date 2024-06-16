import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager'
import * as dotenv from 'dotenv'
import { Sequelize } from "sequelize"
import { initModels } from "./models/init-models"

dotenv.config()

const client = new SecretsManagerClient({
  region: 'ap-southeast-1'
})

async function getSecret() {
  let response
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: '<YOUR-SECRET-ID>',
        VersionStage: 'AWSCURRENT'
      })
    )
  } catch (error) {
    const data = {
      username: process.env.DBUSER,
      password: process.env.DBPASS,
      host: process.env.DBHOST
    }
    return JSON.stringify(data)
  }

  const secret = response.SecretString
  return secret
}

let sequelize: Sequelize
let models: ReturnType<typeof initModels>
export async function getSequelize() {
  try {
    if (!sequelize) {
      const username = process.env.DBUSER
      const password = process.env.DBPASS
      const host = process.env.DBHOST
      const database = process.env.DATABASE

      sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect: 'mysql',
        logging: false,
        timezone: '+07:00',
        define: {
          timestamps: false
        },
        query: {
          raw: true
        }
      })
    }

    return sequelize
  } catch (error) {
    console.error('Failed to connect to database:', error)
    throw error
  }
}

export async function getModel() {
  try {
    if (!sequelize) {
      await getSequelize()
    }
    if (!models) {
      models = initModels(sequelize)
    }
    return models
  } catch (error) {
    console.error('Failed to connect to database:', error)
    throw error
  }
}
