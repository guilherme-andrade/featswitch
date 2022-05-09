Permission.destroy_all
Switch.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!(Permission.table_name)
ActiveRecord::Base.connection.reset_pk_sequence!(Switch.table_name)

switch1 = Switch.create(key: 'example')
switch2 = Switch.create(key: 'example2')
switch3 = Switch.create(key: 'example3')

permission = Permission.create(name: 'switch permission', switch: switch1)
