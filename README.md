# postgres-sequelize
Postgresql sequelize and express api

- create a new Tutorial: create(object)
- find a Tutorial by id: findByPk(id)
- get all Tutorials: findAll()
- update a Tutorial by id: update(data, where: { id: id })
- remove a Tutorial: destroy(where: { id: id })
- remove all Tutorials: destroy(where: {})
- find all Tutorials by title: findAll({ where: { title: ... } })



#### Resources
> https://www.postgresqltutorial.com/


#### Addendum
add to .zshrc and source
ensure to use right version of postgres
`export PATH="/Library/PostgreSQL/16/bin:$PATH"`

#### CLI
$ sudo -u postgres psql # to run database user called postgres

command connects to a database under a specific user. After pressing Enter PostgreSQL will ask for the password of the user.
> psql -d database -U  user -W
