Jamie Crowther

# Journal

This has been a very interesting assessment for me. I have struggled a bit, but from those struggles I have gained a lot of new information and knowledge.  
The majority of my time was spent playing around with the CSS, learning how objects interact with eachother on a page.  
I tried to do the majority in the work in the CSS file (such as adding images as backgrounds instead of adding them trhough the HTML) because my knowledge in that area was very lacking, and it was a great opportunity to test and learn more.  
There was a lot of 'firsts' in this assessment, so I learned a lot by going through these processes.    

My first problem was that I was trying to use existing themes created by others. When I would clone these repo's there was so much going on that I couldn't understand how to change any of it or what any of it was.  
I would change the files in _site, not knowing that _site is actually everything in your website/repo, and jekyll builds that for you when you exec serve.  

I uninstalled everything and started from scratch, writing every line of code myself, testing line by line on the local host to check for errors, or to see how the styling/CSS was changing when i altered certain code.  
This really helped me to learn what was really happening within the processes, and how the cmd uses the gemfile etc.  

During this early phase, I was also doing it completely wrong, I was pushing to github to see changes, making far too many commits and making everything messy unneccesarily.  
I then realized that it was far better to have a folder on my local device that is separate from the github repo (and bundle exec jekyll serve to use the localhost).  
When I was happy with the results, I would then copy the files from my local folder, to the github repo folder (excluding the gemfile, as the gh-pages gemfile uses a different plugin).  

I tried to use flexbox a lot for this site, as it is responsive, and I had never used it before, I thought it would be a good challenge to use and try learn.  
At first it was hard because I was using clashing style tags, or because I didn't know the code that goes along with display:flex.  
While testing the styling I managed to learn a lot about flex and how the objects on the page interact with eachother.  
The website is responsive, BUT, it could still do with some improvement to the styling, after building the whole site, the next time I will have far more knowledge and be able to write much cleaner, mor efficient code.  

My next problem was getting the website hosted, this was the first time dealing with domain services, and it was all new to me. I set up a domain name (www.therealjc.me).  
I then set that link up, and added the required records, initially my website build was constantly failing, this was due to not having a proper CNAME file, CNAME record, or A records (at that point I had no idea what this was, but I learned).  
I then researched, created a CNAME in my repo and configured the domain like so:
![Domain-setup](/img/records.png)  

I Then made sure everything was in the proper branch so that it could actually be hosted on gh-ages (branch: gh-pages)  

After this, I removed the .html from the hrefs, so that it looked better in the browser, adding a .htaccess folder to allow this to work and remove the folder directory.

Once the website was properly hosted, I tidied up the folder structure by adding a folder for the .html pages, something I had attempted earlier but it made all my pages disappear, and I couldn't figure out why.  
With my newfound knowledge from building the site, I figured out that it was because when i moved the .html files, the hrefs became outdated and pointed to an old location. So I updated all of the hrefs and links and got it working correctly. (../ was a huge healp to learn, this points to the parent folder).  

At that point, I had my website how I wanted it, and it was hosted on the Internet. The last thing I learned was about meta tags and about open graph (the og:image etc changes what shows up when you post your website on somewhere like facebook).  

Once I had that figured out and added, I was done. The last thing was to write the journal and thats where I'm at now.  

This has been a great test, I have learned so much that I had no idea about at the start. This knowledge will really improve my coding skills.

Website Planning Wireframe
![wireframe](/img/wireframe.png)