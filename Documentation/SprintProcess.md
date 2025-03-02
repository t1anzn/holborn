# Design Sprint Documentation

## Team members leads
- Victor (Research)
- Tim (Design + Prototype)
- Iya (Documentation)

## Timeline
- start time: 8th November 2024 9:30AM
- research completed: 25th January 2025
- problem defined: 8th Novemeber 2024 12:30PM
- sketches completed: 8th November 2024 12:30PM
- prototype started: 8th Novemeber 2024 12:30PM
- prototype completed: 25th January 2025
- end time: 25th January 2025

## Research insights
- Anticipated changes/constants in 10 years:
     - Tourist areas possibly subjected to change e.g, streets, cafes/restaurants, and general pedestrian zones.
     - Transportation most likely subjected to change e.g, majority electrically powered/environmentally-friendly vehicles, smarter 
     transportation systems.
     - Tourist sites to remain unchanged e.g, museums, gardens, etc.
     - Transportation to remain unchanged e.g, underground/overground systems, maps/signs.
- Artificial Intelligence in 10 years:
     - General use of robots

## Chosen direction
- description: Tourist information website for Holborn 10 years in the future, providing accurate information about society that is based off of trends and research.

## Research progress
- completed: 25th January 2025
- in progress: since project began
- blocked by: Victor
- progress made:
       - Researched trends
       - Researched possible changes to environment
       - Researched possible changes to society
       - Researched possible changes to transportation
- Has collaborated with making website content to accurately depict what a Holborn tourist site would realistically look like in 2034. Has predicted trends, created stories, theorized environmental changes etc.
  
## Design progress
- completed: 25th January 2025
- in progress: Been in progress by Tim since design figma's had been completed
- blocked by: Tim
- progress made:
       - Figma designed website with aesthetic, responsiveness, minimalism kept in mind. User Interface made for ease of navigation and 
         usability, with concepts that the user will understand.
       - Colour scheme was brainstormed and decided to keep the website look generally cohesive. Titles, a font, topics, page names etc were 
         also discussed and used.
       - Wireframes completed (8th November 2024)

## Prototype progress
- completed: 25th January 2025
- in progress: Been in progress by Tim since design figma's had been completed
- blocked by: Tim
- progress made (in chronological order):
  ### Navigation bar
  - designed for the top of the screen to keep website responsive and used bootstrap framework as it is good at making powerful and responsive elements.
    #### (later encountered some issues with using the bootstrap framework though realised that the navigation bar was not going to be complex nevertheless. The bootstrap framework was not needed and was therefore removed and replaced with semantic html navigation element with list items that Tim would code for responsiveness himself manually)
  - underline on hover animation added to holborn brand logo in top left for interactivity. Decision made for animations to be more frequently seen across the website.
  ### Hero section
  - initially going to be full-screen parallax background with main hero text, left aligned on top of hero image. Simple to develop with section having text stay resposive to screen sizing using relative unit lengths (vw, vh, etc) over absolute lengths (px). Hero text changed from left aligned to center aligned on mobile to fit mobile devices.
  ### Smooth scrolling
  - added smooth scrolling using the library called 'Lenis Smooth Scroll' developed by darkroom.engineering. Successfully implemented and allows for sleeker traversing of the website, using smooth scrolling animation.
  ### Featured section
  - figma prototype shows three static images, descriptions and a call to action button, however Tim decided to take a more dynamic approach by implementing a carousel system where the user can slide through the featured stories and events that would be shown on the landing page. They would click left and right to navigate through.
  - used a library called Swiper.js which is a versatile javascript library that creates touch enabled sliders and carousels for websites and web applications. This would keep the mobile responsivity.
  -  cards inside the carousel were made with hover animation and shows the title and summary description of the event/story, and are also clickable links.
  -  title and subheadings have fade in and zoom in on scroll animations so animation timeline would be based on users scrolling. Ensures the website isn't boring and is engaging to the user.
  ### Carousel optimization and responsiveness
  - implemented the lazy loading feature in Swiper.js to delay loading time of images until user has swiped to new image to save resources and keep optimization. This allows for many animations to be used and it not affect smooth useability.
  - using swiper breakpoints, the amount of cards shown is based on screen width so it can adjust respectively for smaller or larger screens.
  ### Footer
  - footer with four columns including heading for each and several list elements under each column. Last column has social media icons.
  ### Additional overview section
    #### (landing page seemed too short and carousel flowed too fast into the footer, so added an extra overview section. 3 icon format with short text under each icon. gives users an overview of what the website would provide for visitors. As like the other sections, this is mobile responsive too.)
  ### Trends sub-page
    #### (now changed to Events page)
  - features list of trends to explore, all with further details when clicked.
  - navigation bar copied from landing page to Events page with link to same stylesheet to maintain fonts, colours and styling.
  - similar heading added with repeating animation, though smaller.
  - used responsive grid system so that any new additions could be easily added, maintaining and not disturbing the original layout. Done using the CSS Display Grid properly and repeat function. Each card uses fractions and aspect ratios to stay responsive in the same layout. There is a bigger featured card to show a single important event.
    #### (each card had title and desc, is clickable for user. simple design of black and white, less visually appealing, so changed to 'glass morphism' style which features transluscent and blurred background card on top of card image. made to look like glass material, commonly used in more modern UI/UX designs. Initially done using white coloured glass design but made readability harder, so images were made with a range of dark to light. Changed to darker black tinted glass effect and modified text to white, increasing text weight to make it more readable)
  - hover animation used for the card that user was hovering over to highlight what they are clicking on. Text content sections rises and opacity of 'glass' becomes more opaque. Title changes to accent colour of site in case user clicks title, to show what user should click to get a link. 
  ### Trends rename
  - decided it was more time efficient to group trends, events, and stories onto one page and have an additional locations page for key locations to visit in holborn for tourists. For simplicity, they were put onto the same page.
  ### Folder restructure
  - in order to have subdirectory urls such as ‘holborn.com/trends/christmasmarket’, the folder structure was restructured, placing the main index.html into a homepage folder and the trends.html is renamed to index.html and placed into a trends folder. This is so that when extra event subpages are added to the events folder, it will show the subdirectory url with the ‘trends’ folder as the parent like the example above.
  ### Subevents page
  - First events subpage created with featured event. It includes custom navigation bar with repurposed brand logo, which also acts as a back button. The hero section has been replaced by the main articla title to bring main focus onto event content. The first subpage features an image, article header with two subheadings, as well as a semantic aside element, featuring a Google maps embed showing the location of the event, with the opening times and address underneath.
  ### Places page
  - Wanted to add javascript interactivity to the places page. This manifests in a tabs section that filters out the displayed content based on the user’s current selected category. A grid format, similar to the events page, is used to display the locations with a square image, name and short description. The image and title are links that redirect the user to a search query on google maps that takes them to the chosen location.
  ### Major responsive update
  - Used media queries to ensure every page was flexible for all screen widths. This involved changing flex directions to columns, reducing font sizes at certain screen width breakpoints, and adjusting margins and paddings as needed to make sure design integrity is maintained and content stays readable.
  ### Cookies popup
  - To add more realism to the website, a fake cookies popup was coded in, which involved creating a separate cookies.js script. This disables interaction with the site whilst the popup is on the screen, until the user accepts or declines. The popup then no longer shows after the user has accepted. This was done for design purposes only.
  ### AI chatbot
  - In addition, there was thought of OpenAI technologies and how that would eventually develop as a staple in websites in the future. Leveraging these advancements, Tim implemented his own AI chatbot using Eden AI to provide users with an engaging and intuitive experience, acting as a virtual guide for tourists exploring Holborn in 2035. He used gpt-4o-mini, because it’s a fast and free model and is good with lots of questions and logic. He has to keep training the model on all our website content and keep feeding it information so that it is prepared to answer any queries that the user has. This will be an ongoing process until all website content is finalised.
