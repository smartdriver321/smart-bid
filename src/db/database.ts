import postgres from 'postgres'
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js'

import { env } from '@/env'
import * as schema from './schema'

declare global {
	// eslint-disable-next-line no-unused-vars
	var database: PostgresJsDatabase<typeof schema> | undefined
}

let database: PostgresJsDatabase<typeof schema>
let pg: ReturnType<typeof postgres>

if (env.NODE_ENV === 'production') {
	pg = postgres(env.DATABASE_URL)
	database = drizzle(pg, { schema })
} else {
	if (!global.database) {
		pg = postgres(env.DATABASE_URL)
		global.database = drizzle(pg, { schema })
	}
	database = global.database
}

export { database, pg }