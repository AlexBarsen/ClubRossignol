# ClubRossignol

Club Rossingol is a location sitauted at the base of the slope in Poiana Brasov, Romania. Besides the restaurant the location also features a shop with winter specific merchandise, as well as a rental center with ski equipment during winter and bikes during the other seasons.

**Live Demo: https://clubrossignol.herokuapp.com/**

# Project Description

The purpose of the project was to build a Landing Page together with a Rental Application through which winter equipment and bikes could be rented.

While the Landing Page serves just for the presentation of the location the Rental Application application features the following functionality:

- **User Authentication:**

  - **account creation** with e-mail and password
  - **e-mail confirmation** after registration
  - **password reset**
  - **role based authentication**
    - _user_
    - _admin_

- **Renting Equipment:**

  - **adding** items to cart (features a form which has to be filled with the information of the person who is renting the equipment)
  - **editing** items in the cart (in case the data contains a mistake, the users have the option to edit it)
  - **deleting** items from the cart
  - **order placement** through the stripe API
  - **the cart** is stored in the database (upon signing out and relogging the items will be fetched from the database)

- **Dashboards:**

  - in the **_USER dashboard_** users can see their:
    - **account information**
    - **order history**
  - in the **_ADMIN dashboard_** the admin can:
    - view the **orders** which have been placed by the users
    - change the **status** of the order:
      - **_received_ &#8594; _prepared_ &#8594; _completed_**

- **Screenshots from the Application**:
<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FProject%20Images%2FLandingPage.png?alt=media&token=4389aeed-924a-4f59-9d68-85163a412778" alt="Landing Page" width="600" height="500" />
<img src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FProject%20Images%2FRentalApplication.png?alt=media&token=809925c4-8a09-480a-bec7-1c74ecd31ceb" alt="Rental Application" width="600" height="500" />
</p>

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FProject%20Images%2FRentalModal.png?alt=media&token=0a4ef09a-db2e-4f69-ad14-d7a82cf48d04" alt="Rental Modal" width="600" />
</p>

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FProject%20Images%2FUserDashboard.png?alt=media&token=bd99a704-2b9c-425a-923b-4c14081c7973" alt="User Dashboard" width="600" height="500" />
<img src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FProject%20Images%2FAdminDashboard.png?alt=media&token=5929bc09-d674-4d10-aed0-59475a3cc8a8" alt="Admin Dashboard" width="600" height="450" />
</p>

## Built with:

- [React.JS](https://reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Firebase + Firestore](https://firebase.google.com/) (**Firebase Storage** for storing images, **Firebase API** for user authentication and the **Firestore Database** for fetching/writing/creating/updating data used in the application)
- [Redux](https://redux.js.org/)
  - [React Redux](https://react-redux.js.org/) (state management and the handling of actions/dispacthes in the application)
  - [Redux Saga](https://redux-saga.js.org/) (handling of asynchronous functions like user authentication and fetching data from the firestore database)
- [i18next](https://www.i18next.com/)
  - [React-i18next](https://react.i18next.com/) (translations)
- [Stripe](https://stripe.com)
  - [React-Stripe](https://stripe.com/docs/stripe-js/react) (used for the implementation of the payment functionality)
- [React Toastify](https://www.npmjs.com/package/react-toastify) (push notfications)

## Future work and improvements:

- **better looking design** since at moment it is pretty basic (after improving my sass skills a little bit more)
  - fix bug where the view-port is incorrectly on IOS devices
- the implementation of **session based authentication** with something like JSON Web Token
  - at the moment when the user/admin is in the dashboard on page refresh he is redirected to the **_/rental_** Route, due to the fact that in the **portected/private Routes** the condition is checked before the user being fetched from firebase so it always redirects to /rental (session based authentication should solve this problem)
- **implement a better system for renting the equipments**, especially for the bikes, since the timeframe for the hourly rent can't be chosen
- **custom** **password reset** and **email confirmation** forms after clicking the link received on the e-maill
- **implementing tests** for the whole project to check if the components are rendred correctly and if the functions work as intended
