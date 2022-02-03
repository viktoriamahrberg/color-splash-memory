# Color Splash Memory Game
A game for the little ones, to learn colors in a playful way. This memory game has four colours hidden below it's cards and by clicking on each card the user is supposed to find its corresponding match!

## UX (User and business owners goal)

### As a business owner:
* As a business owner I want to introduce an interactive game to the smaller ones that can learn to identify colors

### As a user:
* As a very young user I want to in an interactive way play a game to learn colors

## Features

The website is a one-page site with focus on the game itself. It is userfriendly and adapted to all sorts of devices. 

* Game is reset and starts as blank once a page is loaded.
* Timer: The timer is starting once the user starts to interact with the game, and ends when the memory game is solved, with all color matches being found.
* Moves: this section counts every move the user uses to find the pairs. One move is eaqual to two cards being showed.
* Result: At the end of the game the results section shows the final results of amounts of moves and the time which the game was completed on.
* Start-again button: Once clicked upon the game is reset and the user can start a new round, where the cards have been shuffled and randomly replocated.

## Technologies used

### HTML 
* The language to set the structure.

### CSS
* The language to style the page.

### Google Fonts
* As a font resource. 

### GitHub
* As a software hosting platform to store the project on in a remote location.

### Gitpod
* As a development hosting platform.

## Testing

### Functionality testing
* I used Google Developer tool *Inspector* throughout the development to imediately see the function of the site live and spot bugs. The *Console* has been very useful for Javascript. 

### Compatibility testing
* Site has been tested on devices between 1000px wide and down to 350px in Developer Tools, but mainly on my browser in MacBook Air 11'. 

## Issues found during site development

### Layout:
* Issues with the cards fitting and staying in the container has been a recurring problem on smaller devices. I should have set it up differently, in grids, from the beginning but tried to solve the issue with Media Queries for all devices down to 350px, by changing the size on the cards to fit into its game-container. 

* Images were loading very slowly although I resized them, so I used TINYPNG.com to compress them as well. 

### Javascript:
* My knowledge and understanding of Javascript was very weak in the beginning of this site development and I could not wrap my head around the logic of Javascript at all. I used tutorials on Youtube, lots of research on projects from other peers at Code Institue to even understand how to get started. 
I have had more issues than success building this site and although it is not as well structured and developed as I had wished for I am proud of my learning outcome and better understanding of the language. 

* Data-Image: I set up the card structure in HTML and with data-image attribute attached on each card, however they did not connect to Javascript by flipping. The issue I finally figured with one of the tutors at Code Institute was the placement of 'data-image', not being on the same div as ".memory-card". 
![data-image](assets/md-images/screenshots/data-image.png) 

* 






## Performance testing

I ran the site in Lighthouse to check its performance:
![lighthouse](assets/md-images/screenshots/lighthouse.png)

## Validation

I validated my codes and after a few adjustments at first it ran without any errors:

* [W3C CSS Validator](http://www.css-validator.org/) to validate CSS
* [Html Checker](https://validator.w3.org/) to test HTML

![css-validator](http://www.css-validator.org/)
## Deployment

## Credits

* Assistance and guidance from Code Institute Tutors, especially I would like thank Jo, Ger and John that have all helped me to improve my Javascript skills and actually understand what I was doing.

* Tutorial video from: 
    * [Code with Ania Kubów](https://www.youtube.com/watch?v=tjyDOHzKN0w)
    * [Learn Vanilla Javascript: Memory Game Tutorial by Marina Ferreira](https://www.youtube.com/watch?v=zYS4J9m3SsU&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=5)
* Code inspiration from fellow peers at Code Institute - Slack Forum

### Assets
* Images from [Pexels](https://www.pexels.com/)


### Code