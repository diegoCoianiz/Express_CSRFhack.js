# CSRF attack.js

## CSRF attack. Introduction to Cross Site Exploite

Hi, in this post I wanna share with you this interesting case of study about cross site remote exploits. You can pull this repository and do your own experiments. 
This is my self version of a cross site request forgery, inspired in the video of [Antonio Sarosi](https://www.youtube.com/watch?v=C9dvkIndTLA&ab_channel=4tomik). you can follow him and watch all his entire collection of tutorials abut Node.js and Python, for sure u will find something of your interest!

## So what's a CSRF attack ??
Cross-Site Request Forgery it's a type of attack that exploits the trust that a website has in a user's browser. In a CSRF attack, an attacker tricks a user into performing an unintended action on a website where the user is already authenticated.

For example, suppose a user is logged in to their online banking account. An attacker could create a malicious link that, when clicked by the user, would trigger a request to transfer money from the user's bank account to the attacker's account or, in this study case, change their account password and email. Because the user is already authenticated on the banking site, the site would honor the request.

To prevent CSRF attacks, websites can use tokens to ensure that requests are coming from the expected source. These tokens are generated by the website and included in each form or request. When a user submits a form, the website checks the token to ensure that the request came from an expected source. If the token is missing or invalid, the request is rejected.

It is important to note that CSRF attacks can still occur even if a website uses HTTPS to encrypt traffic.