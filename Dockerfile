FROM node:12

run mkdir /myApp

Copy . /myApp 

WORKDIR /myApp

run npm i 

CMD [ "npm" , "start" ]

