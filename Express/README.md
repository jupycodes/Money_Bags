[![Express | CI](https://github.com/JordanRoboGarden/Money_Bags/actions/workflows/express.js.yml/badge.svg)](https://github.com/JordanRoboGarden/Money_Bags/actions/workflows/express.js.yml)
to install 

npm install
npm start



#New setup
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all

npx sequelize-cli db:create --env "test"
npx sequelize-cli db:migrate --env "test"
npx cross-env NODE_ENV=test npx sequelize-cli db:seed:all

#test


npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string ,hash:string ,salt:string ,updated_by:int
