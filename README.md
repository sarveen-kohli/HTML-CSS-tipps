# HTML-CSS-tipps
Steps followed to commit changes to the remote repository
https://dzone.com/articles/top-20-git-commands-with-examples

**Project has the following main blocks:**
HyperText Markup Language is the standard markup language used for creating web pages and web applications. It is used to describe the structure of the web pages using a process called markup. Basic HTML structure for the document is defined as below,
header contains main navigation bar links and social media links to help visitors navigate through the website:
subheader-basic signup form
main container follows 2 column layout that contains side navigation and main content container + aside navigation
footer placed at the bottom of page that contains information like copyright and contact info

**Brief about how to CSS layout to display the content in a Index page:**

 .container-fluid is the global wrapper that has 100% width. Top header and sub header are wrapped here
 #top-header is the flex container header navigation that contains the 2 navigation i.e #menu and  #social links. Both occupy equal space and aligned using justify-content: space-between
 Sub Header(#sub_header) sticks to the top of the page 
 .footer is our footer and spans to 100% of space.

**To create responsive Web Design provide breakpoints to set viewport dimensions of the device that the application is being viewed using media query max-width.
Various CSS3 Media Types-all,print,screen,speech**

Use media queries to have an alternate CSS section inside style sheet.

@media (max-width: 768px){ ... }
At screen size<=768px,main container layout will become vertical insteal of horizonta and color of top header changes to lightpink

