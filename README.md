
# Frontend Mentor - FAQ Accordion Solution

This is my submission for the [Frontend Mentor - FAQ Accordion](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) challenge. The goal was to build a responsive FAQ section that closely matches the provided designs using semantic HTML, CSS, and interactive JavaScript for user experience.

## Built With

- HTML5
- CSS3
- JavaScript 
- Mobile-first workflow

## Features

- Users can **toggle the answer** to each question by clicking the question or its icon
- Each question’s answer opens or closes smoothly with a transition animation
- The layout is **responsive** for both mobile and desktop screens based on the JPG design assets
- Interactive elements provide hover and focus states for accessibility
- Keyboard navigation: users can open/close answers using only the keyboard
- Assets and fonts optimized as per challenge requirements

## Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project folder:**
   ```
   cd faq-accordion-Main
   ```

3. **Open `index.html` in your browser.**

## Screenshots

Refer to the design previews inside the `/design` folder (mobile and desktop). The implementation supports both layouts and closely follows the challenge JPG.

## My Process

- **Planning:** I analyzed the JPG designs for layout, typography, colors, and component spacing.
- **Structure:** Used semantic HTML to organize questions and answers, and linked icons for visual clarity.
- **Styling:** Started with base styles from the style guide, then implemented section-specific styling and transitions.
- **Interactivity:** Wrote vanilla JavaScript to toggle answers when questions or icons are clicked, and to update icon images dynamically with smooth transitions.
- **Testing:** Checked responsiveness and accessibility on various screen sizes and devices.
- **Polish:** Ensured typographic and color consistency using the style guide; added keyboard and focus support.

## Challenges Faced

- Estimating exact pixel values for font sizes and spacing from JPG reference, requiring best judgment
- Making transitions smooth without leaving empty space (can't animate `display`, so used `max-height` and `opacity`)
- Ensuring keyboard accessibility for all interactive elements

## Learnings

- Improved ability to build from static design assets and make style decisions
- Sharpened CSS and JavaScript skills for building accessible, interactive UI components
- Refined workflow for organizing design assets and maintaining code structure

## Deployment

Project hosted via GitHub Pages:

## Acknowledgments

Thank you to the Frontend Mentor team and community for inspiration, resources, and feedback!
