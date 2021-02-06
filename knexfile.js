// Update with your config settings.

module.exports = {

	// development: {
	//   client: 'sqlite3',
	//   connection: {
	// 	filename: './dev.sqlite3'
	//   }
	// },
  
	// staging: {
	//   client: 'postgresql',
	//   connection: {
	// 	database: 'my_db',
	// 	user:     'username',
	// 	password: 'password'
	//   },
	//   pool: {
	// 	min: 2,
	// 	max: 10
	//   },
	//   migrations: {
	// 	tableName: 'knex_migrations'
	//   }
	// },
  
	production: {
	  client: 'mysql',
	  connection: {
		  host: "0.0.0.0",
		  user: "bnardus",
		  password: "Broke978#",
		  database: "high_scores"
	  },
	  pool: {
		  min: 2,
		  max: 10
	  },
	  migrations: {
		  tableName: "knex_migrations"
	  }
	}
  
  };
  