# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

# Advice Generator

# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

The goal of this project was to create a Advice generator that resembles the figma sketch provided from Front-end Mentor.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
Desktop: "C:\Users\steve\OneDrive\Desktop\ProjectScreenshot\Advice Generator desktop.pdf"
Mobile: "C:\Users\steve\OneDrive\Desktop\ProjectScreenshot\Advice Generator mobile.pdf"

### Links

- Coming soon.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- AJAX/AXIOS 

### What I learned

While working on this project I learned how to take the response from an Axios call and utilized that data to update the properties of the state object.

The code below shows how I took the response and used dot notation to drill down to the specific data that I needed and from there I assigned that data to my state properties and use the setState function to update the state.

I also used ...prevState to copy the original state since the setState function batch updates state components, I want to make sure that I am making changes to the most current state.

```
const onGetAdviceSuccess = (response) => {
    console.log(response.data.slip);
    let adviceData = response.data.slip;
    let id = adviceData.id;
    let advice = adviceData.advice;

    setAdvice((prevState) => {
      const cardAdvice = { ...prevState };

      cardAdvice.id = id;
      cardAdvice.advice = advice;
      return cardAdvice;
    });
  }; 
```

### Continued development

### Useful resources

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/Steven239

## Acknowledgments
