So this was my attempt at a fun assignment, on which I went a bit overboard. Unfortunatley, I did not manage to finsih this in time, due to some overengineering. This, even though the assignment stated not to, so i guess that's a bust. Therefor it lacks the requiered functionality. The filters for example, are there, but not filters are being applied to the data, this due to the lack of time. They also look kind of horrible for the same reason. 

With that said, my ambition was to develop as much myself as possible to give you solid assessment material. I wanted to seperate logic from presentation as much as possible.

I aimed to keep my reducers clean with no mutation of data. Mutation is the assignement of the middleware, in this case thunk. 

I also like to separate component presentaion and logic, in that way it's very easy to redisgn a whole component without having to cope-paste the logic part. 

I tried to write keep as much as the code in a reuseable state, using helpers, selectors and so on for DRY-principal.

I aimed for a normalized and well structured, easy to read redux state. 

things i tried to include:
 - fancy animations
 - No ui-framework
 - A modern design
 - Responsive design
 
 - sort by name and office
 - filter by office
 - filter by contact links
 - only render set of profiles with pagination
 
 - works in chrome, firefox and edge
 - unit testing ( did not even get started im afraid.. )

Thanks for taking time to look through it! 


Best regards, 
Kristofer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
