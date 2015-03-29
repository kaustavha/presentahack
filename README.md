# Presentahack!

A presentation tool for hackers and makers. 


## Problem
Presenting a hack as a developer is clunky. You step up on stage, talk a bit, then fumble over to localhost to demo your app, or pull out your phone and start fiddling with it to get to your app, or send a command to your robot

## Solution
No more!
Thanks to presentahack, the presentation tool for hackers! 
Presentahack allows developers to preprogramme a route throw the presentation, think of ppt but with not limitations on what you can do! 
Open a powerpoint? Sure! 
Go to a URL so you can show us some live data. Why not? 
Navigate through your webapp without touching the mouse of clicking around? Exactly. 
Smoothly play a video and continue with your presentation instead of fumbling over to youtube in a web browser. We got your back. 

Presentahack takes input from a Leap motion controller and would've been made to work with Myos but theyre not linux friendly :( PRs welcome!

# Setup

You need a leap motion controller and it's related SDKs. 
You can set up the routes for your presentation directly in script.js, which is the main entry point for this app/hack. 
To run 
```
node script.js
```
And make a tapping gesture over the Leap controller. 

p.s Don't forget to npm install

## Making presentations for this tool
This repo includes a sample stylus, coffeescript and jade boilerplate you can build on top of rapidly. Less typing and simpler than most HTML presentation tools out there. 

