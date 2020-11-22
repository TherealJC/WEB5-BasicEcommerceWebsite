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

#
