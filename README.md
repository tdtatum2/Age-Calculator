# Frontend Mentor - Age calculator component solution

This is a solution to the [Age calculator component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshots

![](./src/assets/desktop.png)
![](./src/assets/mobile.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/tdtatum2/Age-Calculator)
- Live Site URL: [GitHub Pages](https://tdtatum2.github.io/Age-Calculator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This challenged really exposed a few of my weaknesses as a JavaScript developer.

- I did not fully understand the usage of setCustomValidity in regards to form validation and how to properly "reset" the CustomValidity field of an element. I got caught up because my form would always be invalid after a single invalid input, even if the following inputs were expected to be valid. I found that it happened because I was setting the CustomValidity inside of the submit function.

- I struggled to figure out how to find the difference between two dates, but some research into JavaScript Date objects helped me figure that out.

- I was initially going to animate the result numbers, as outlined in the bonus section of this challenge, but I ran into issues because the ```html span``` inside of my h1 element would need to be positioned absolutely in order to incorporate the animation I wanted, which caused a number of issues.

### Continued development

- I want to learn more about animations and best practices for structuring html in a way that elements can easily be animated.
- I want to continue learning about powerful JavaScript objects, libraries, and functions.

### Useful resources

- [My Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - A useful CSS Reset template by Josh W Comeau recommended to me by Kamlesh Rajesh Yadav in a comment on my first ever Frontend Mentor post!


## Author

- Website - [Fin](https://www.fintatum.com)
- Frontend Mentor - [@tdtatum2](https://www.frontendmentor.io/profile/tdtatum2)