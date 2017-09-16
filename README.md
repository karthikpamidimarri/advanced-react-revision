# advanced-react-revision

## Step1:-
Put all the code under lib directory<br>

 mkdir lib

This lib directory shared between under server and client. <br>


## Step2:
 mkdir public

 To server the static files and assets like images. <br>

## Step3:
  create touch lib/server.js <br>

  To configure express application <br>

## Step4:
  Make project as node project run the below command <br>

  yarn init <br>

  It will create package.json file and give entry point to lib/server.js<br>

## Step5:
  To watch server using pm2 <br>


To use pm2 run the below commands
For server ready run the command: yarn dev <br>
To check logs run : yarn pm2 logs <br>
To delete server : yarn pm2 delete server <br>



##Step 6:
  To run the test cases run yarn test <br>




