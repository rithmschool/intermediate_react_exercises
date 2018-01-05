# React Router Makeup App

The goal of the application is to use react router to create an online makeup store.  

## Mockups

__Mockup 1 - App Flow__

Below is a gif that shows the general flow of the app.  Notice that the root route redirects to `/brands/`.   Also, clicking on `ALMAY` changed the url to `/brands/almay` and shows only products for almay.  When a price button is clicked on, the product is added to the users cart.  You can then click on the cart icon to see your current shopping cart and your total


![makeup app demo](./makeup-app.gif)

__Mockup 2 - Makeup Details__

In the second gif you should take note of all of the details within a makeup product card.  It contains the product name, price, image, category,
colors available, and a description.  Clicking on a different brand will produce results only from that brand.

![makeup app show product details](./makeup-app-makeup-cards.gif)

## Technical Details

* Use react router to change the routes in the address bar.
* Make sure `/` redirects to `/brands`
* The makeup api details are at [https://makeup-api.herokuapp.com/](https://makeup-api.herokuapp.com/).  You can use the following array of brand names as default props to one of your components:

```
  brands: ["almay", "annabelle", "benefit", "covergirl",
           "dalish", "e.l.f.", "essie", "iman", "l'oreal",
           "marcelle", "maybelline", "milani", "mineral fusion", "misa",
           "mistura", "moov", "nyx", "orly", "pacifica", "physicians",
           "formula", "anada", "revlon", "salon",
           "sante", "sinful", "smashbox", "stila",
           "suncoat", "zorah"]
```
* Make sure that your navigation works as well.  The `Brands` nav should redirect to `/brands` and the shopping cart should redirect to `/cart`.  Also the `Mega Makeup Market` should redirect to `/brands`
* On a mac, to add emojis, use cntrl + command + space 🤠👍
