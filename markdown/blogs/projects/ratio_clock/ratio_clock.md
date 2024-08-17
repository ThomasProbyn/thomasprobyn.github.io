Title: The simplified ratio clock: A ridiculous mathematical timepiece | Tom Probyn

[Home Page](https://tomprobyn.uk) > [Blog](https://tomprobyn.uk/blogs) > [Projects](https://tomprobyn.uk/blogs/projects)

# The simplified ratio clock: A ridiculous mathematical timepiece
*17th August 2024*

[See the clock](./app.html)

Between this and [the pips](https://www.tomprobyn.uk/blogs/projects/time_signal.html) I seem to have developed a bit of a penchant for the unusual timepiece. I had a very weird idea on a car journey recently, staring absent-mindedly at the digital clock on the dashboard (I should clarify - I wasn't driving!). We represent digital time in a similar way to how we represent ratios (in the format a:b), so what would happen if we treated it the same, and simplified those ratios? That lead me to develop the most ridiculous (and patently useless) timepiece yet.

The ratio clock does just that. It takes the time, sees if it can be simplified as a ratio, and if it can be, presents it that way! It's useless, of course, because multiple different times will all show as the same thing (1:01, 2:02, 3:03 etc will all show as 1:1), but that doesn't stop it being fun. 

[See the clock](./app.html)

## Maths

The maths here is very simple: take the minute and the hour, and check what the largest number they both divide by is. Then divide them both by that. I'm no good at maths, so I let Euclid take the driving seat for this part and used one of the best known algorithms for this purpose. It is extremely simple, efficient enough for my purposes, and best of all [available on Wikipedia!](https://en.wikipedia.org/wiki/Euclidean_algorithm). It uses recursion and modulo to repeatedly test divisions - any more detail on it and my head will explode... 

## Accessibility

This one is a little more in my ballpark - and indeed it was my first thought when making this project. Firstly, it uses JavaScript (which I generally try to avoid where I can), but given its widespread adoption, what technologies can I use to supplement the live document-object model updating required to make this project? In other words: screen readers (which read the text of web pages aloud to users who can't use their eyes to read them for any reason) generally work by starting at the top and reading the document downwards. Then they stop. If part of the document updates *after* the reader has reached the end, the user doesn't hear it get read out. This would spoil the joys of such a ridiculous project for users who couldn't see it, because they would only hear the current time get read out, not every subsequent minute.

It turns out that there is a solution to this problem: the [ARIA-Live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) attribute allows developers, using JavaScript to dynamically update a page, to announce to the screen reader whenever an update occurs. In theory, this solves the problem, and allows users of screen readers to experience the page like virtually anyone else. Given how strong my views on digital accessibility are, this pleases me immensely.

[See the clock](./app.html)