Jamie Crowther

# Journal

I have used the same repo that I used to host my website on gh-pages in assessment 2.
To keep it clean and start fresh, I removed all previous commits. This was done by:
1. git checkout --orphan latest_branch (create and checkout new branch)
2. git add -A (add files to the new branch)
3. git commit -m "this becomes the first commit in the new branch" (Commit the changes)
4. git branch -D gh-pages (Deletes the old branch)
5. git branch -m gh-pages (Rename the current branch to replace the just deleted gh-pages)
6. git push -f origin master (force updates the repository)

### Troubleshooting the login/signup forms resetting

It took me quite a bit of trial and error to get the form to stop resetting. All the info I found was with 'click' events and the event functions.
I found this page which helped me figure out that I can use return false, and to also you must have the 'return' in the html submit tag aswell.

Stack Overflow. (August 14, 2011).  How to prevent default event handling in an onclick method. https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method
