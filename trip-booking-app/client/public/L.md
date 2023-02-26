### Simple Mern

- BUILD PROCESS - if I build either the frontend or backend entirely first befores starting the other I have spend additional time and maybe face some errors due to - hardcoded data in FE not matching BE models, Fetch request check for Db has to be done through something like insomnia/postman. Not all query get's written or useless queries get written. so Ideal is build basic of both then go route by route, screen by screen , feature by feature.
- THIS SYSTEM INVOLVES BUILDING THE ENTIRE FE FIRST THEN DATABINDING. (challenges : availibility of dummy data). For something like a dashboard it makes more sense to go route by route both FE & BE in parallel after initial setups.
- React vite setup
- add packages , yarn
- React-router-dom setup
- set up the template files for all pages/routes.
- breakkdown the UI into components and start building one component at a time. NO data integerations. Default some items to active/hover states.
- Start with the layout components (Navbar, Header, Footer, sidebar)
- Builing a component - laydown markdown with dummy data. Add class names. Finally style them. (mui, tailwind, scss -> this is the level of customisation available.)
- keep building compoents top to bottom and page to page. do the necessary form binding (to state management) and navigation event.
- when it comes to basics
  - BE means DB connections - auth and primary routes and controllers - middlewares utils
  - FE means Header footer nav - state management context - home and login page
  - Once this is done route by route and component by component building can go parallel.
- admin panel
  - change dashboard tiles & sidebar sections
  - forms & datagrid - configurations to match new data format.
  - custom hook or dedicated library which fetch based on routes has loading state built in.
  - reusing components for forms, datagrid

### CSS

- creating those on sectin border search menus, using parent-pos-relative child-pos-absolute and negative margins.
- box shadow generators
- (mui, tailwind, scss -> this is the level of customisation available.) - don't bother taking a course for them - UI builiding is going to be entirely design based. Even animations. If in interview then - just list down the damn high no of Figma plugins, no code site builders, builder.io, webflow, framer etc.
- building those "sidebar1 feed sidebar2" UI's seen in most SM apps now a days, using flex {flex1 flex3} this is for the search form and result list.
- height max content for those sidebar widgets.
- building a custom full screen slider.

### React

- using react-date-picker
- setting up a custom coutner (instead of using input type number) for adults,children,room - instead of using a library or anything. Disabling buttons and using custom cursor for negative values.
- to have different version of header - pass a prop (like isListPage) and associate a conditional css className with it. This could be done easily without a class name if using styled component or sass.
- use loading state in either global state or the Querying solution (axios,swr,react-query,rtq).
- creating custom select component (for rooms in admin section) - new array.from()

### react-router-dom

- passing state to navigate

### cloudinary

- for file storage.
- uploading single img and passing url for user registeration
- uploading multiple img and passing arr for hotel registeratioin
- api usuage to store in particular folder.

### Express

- How JWT auth works Buzz : cookies, headers, local & session storage, csrf, http only cookies, authenticated vs authorized
- creating utils for error handling.
- custom middlewares and using them.
- building routes and testing them out on insomnia.
- actually you can create all the routes and then extract out the token verification, user verification, admin identity into middlewares and then simply pass those middlewares into the route - this is much cleaner then repeating the verification code in each controller.
- using modules in node also means export default and no need for named routers.
- bcrypt js and creating http only cookies to be send as login tokens.
- while updating doc - using "set" and "new:true"
- queries vs params.

### Authentication

- cookie based , configuring the cookie properly - httponly, secure, samSite etc.
- configuring cors properly to allow cookie based auth

### mongoose

- connect vs connection
- updating a nested array with findByIdAndUpdate along with $push & $pull.
- countDocuments instead of filtering and taking the array length. This is what being performance oriented means.

### tips

- Dummy data - pexels for images. rapid api for json.

### GAP from real world / Improvements for portfolio project

- no registeratoin form
- Nav items in FE topbar and Admin SB are not functional
- Makes no sense business as a business model
- Doesn't need maps - cause this is MakeMyTrip clone not AirBnB or Realtor. Still a lot of features missing.
- UI could be bit more polished. currently it's almost trash. Both FE and Admin. Especially the admin dark mode.
- animated skeleton instead of loading text.
