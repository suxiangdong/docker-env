db = db.getSiblingDB('hellorf');
db.createUser(
{
    user: "hellorf",
    pwd: "123456",
    roles: [
      { role: "readWrite", db: "hellorf" }
    ]
});