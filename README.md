# ppdl-dtou-microblog
personal privacy data lab microblogging client and data terms of use engine


# install bower dependencies
bower install

# install npm dependencies
npm install

# running your own mongo instance

1. install mongo 
2. run : 

  mongod --replSet $HOSTNAME --dbpath <path to data dir>

3. start replication

echo $HOSTNAME
mongo
rs.initiate({_id: "<hostname>", members: [{_id: 0, host: "127.0.0.1:12345"}]})


