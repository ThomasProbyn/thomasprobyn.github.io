Title: Justifying JavaScript: Politeness on the Web | Tom Probyn

[Home Page](https://tomprobyn.uk/) > [Blogs](https://tomprobyn.uk/blogs) > [Thoughts](https://tomprobyn.uk/blogs/ideas)

# Justifying JavaScript: Politeness on the Web

*23rd September 2024*

There are a few things which I block on the web. Javascript, cookies and adverts are the main ones, as well as redirecting some particularly addictive web services to about:blank/less addictive services to stop me using them altogether. But Javascript (and cookies) seem to cause a bit of a problem. Many sites don't seem to like you blocking them.

## But why block JavaScript?

I am aware of the risk of this article becoming a philosophical debate along the lines of "well really, you shouldn't *be* blocking JavaScript, it's considered a core part of how websites work. Mind, I frankly can't see any way of explaining this predicament without an explanation of the relatively complex considerations that went into doing so. And so:

My typical rebuttal is thus: "I shouldn't *need* to block JavaScript, I only do because it's not used for its defined purpose as a core web technology". Well - I suppose in a very fast and loose sense, it sort of still is, but there is nuance here. Javascript exists as a programming language which is mostly fully featured and can be made to do anything (effectively) to web pages within a browser. If you use the legal principle of spirit rather than letter, then JavaScript was intended as a way to make things happen on a webpage. It is the puppetmaster to your HTML and CSS, it manipulates them in real-time. It was never really intended as a way to write full desktop applications.

And so, why do we have the situation we have now - yet another week, yet another 15 web applications added to the ever expanding internet? Well, if you interpret by the letter, then *technically* the JavaScript standard has just enough power in it to enable you to write a good desktop application with a very easy to write frontend and relatively standard backend. Throw in for free the almost total platform-agnosticism and it's rather obvious why we are in the current situation.

Unfortunately, that is what spoils JavaScript for me - the fact that people don't use the right tool for the job any more. Instead of using JavaScript as intended, to make little scripts (a few hundred kilobytes at most in size), many sites now insist on loading tens of megabytes of JavaScript frameworks, the majority of whom's features are left entirely untouched for the duration of runtime. [Minification](https://en.wikipedia.org/wiki/Minification_(programming)) and [GZipping](https://en.wikipedia.org/wiki/Gzip) are really just workarounds which highlight the problem, rather than addressing the root cause of it. 

Of course, there are the obvious tracking issues too: combined with cookies, JavaScript can be used to track you across many different websites, and allow a profile to be built from your browsing activities. Whilst not impossible, it is significantly more difficult to track effectively static HTML requests, and so most websites simply won't bother. 

## Courtesy and politeness

My reasons for not using JavaScript are not the main focus of this article - the reactions of those who disagree with me are. By "those", I am in fact not referring to humans, but websites, and the humans who designed those websites. On the majority of web apps, NoScript users are often treated with (if they're lucky) an infinite spinning circle which will never disappear. It has no way of disappearing! I'd in fact be willing to bet that the developers of most of these sites never even bothered to check what happened when you tried to load them with no script, as there seems to be a conception that users with NoScript enabled don't want to view the app anyway.

If web apps are inevitable (as so they would seem) and people aren't going to write a desktop app even when they really should, then can't we at least have some sort of a standard for addressing noscript users, instead of the poor loading experience or blank white pages we are treated to now?

Given that one of the most brilliant things about JavaScript is its complete control over the DOM (the programmatic representation of all the things you see on the screen), why are sites not more noscript friendly? The solution is pretty simple to me. Many websites load a blank HTML file, then use DOM construction methods to build the page using your device (rather than sending a pre-built HTML page). Why a blank page? If your plan is to use DOM construction methods once JavaScript is available, then why not write a few more lines to deconstruct an existing DOM? 

If, instead of a blank page, users were served something more along the lines of:

**`JavaScript Required`**

`This is a web app, and can't run without using JavaScript. Your browser either doesn't support JavaScript or it has been disabled. Please either use a browser which supports JavaScript, or reference your browser's manual for instructions of how to enable it`

then the first line of the JavaScript for the app could remove that, as those users would not need to see it. This is precisely what I did with the [simplified ratio clock](https://tomprobyn.uk/blogs/projects/ratio_clock/app). There is no (reasonable) way in which that could work without JavaScript, but instead of showing those users who don't use JavaScript a completely blank page, I give them a short-but-to-the-point error message:

`If you cannot see the clock here, enable JavaScript and try again.`

I didn't feel it necessary to give the users detailed instructions as the sort of people using this site generally don't need them. They're the sort of people who are already all-to-used to seeing infinitely spinning wheels, and questioning whatever ungodly force it was that ever lead them to disable JavaScript.

This isn't a new idea either - many websites do already do this which is fantastic. Google Maps even had a little easter egg hidden in the NoScript page! What I am slightly annoyed about is the prevalence of websites which *don't* adhere to this sort of thing. It's something you only really notice when you do feel the need to disable JavaScript and have a poke around the web. What I think should happen is more sites should have an obligation to their users to serve them the information they want, regardless of the format they choose to view it on. A standard of sorts could be helpful, and so:

## The proposal

Here it is then, my take on the matter. This is what I think should happen if a site absolutely needs JavaScript.

0. Do you actually *need* JavaScript? Why do you need it? Is it to do something that specifically requires JavaScript, or could you do it using forms, links, images, etc? It might be less fancy but it'll be far more standardised and longevous

1. Build only the JavaScript you need. Don't dump an enormous JavaScript library full of functions you don't need onto your users. They will appreciate the speed and increased compatibility; you will enjoy far lower bandwidth costs.

2. Consider noscript users. Understand who they are and why they disable scripts - there are more reasons than just tracking avoidance.

3. Ask yourself why you want your users to unblock JavaScript? Is it just to make the site prettier? Would it still mostly work without it? If it isn't strictly necessary, then don't ask users to unblock it, just build your site in a more robust way.

4. Carefully consider *how* you ask your users to unblock JavaScript, and remember that this is your last resort. Remember that you are asking a favour of your user, and they don't have to do this. They are more than welcome to go and find somebody else doing exactly what you do without using JavaScript.

5. Write a default message which will be shown to all users without JavaScript enabled. Give them reasons for being asked to unblock JavaScript, not just "Please unblock JavaScript" or "This site works better with JavaScript". Tell them *specifically* what will break and justify why you can't just use HTML to do it. 

I think if many websites implemented these steps (or something less biased and opinionistic, founded on actual user research, but similar to these steps) then the web would be far better for Noscript users. No longer would we be excluded from websites which should really just be collections of `<form>` or `<a>` elements, and websites which really needed JavaScript would only use it for the things it was *absolutely* necessary for. Unfortunately, that isn't going to happen, but it's a nice thought, isn't it?