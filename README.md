# American Inn  Static Website

Fully responsive 5-page static site. No build step required.

## Pages
- index.html  Home
- - rooms.html  Rooms & Rates
  - - amenities.html  Amenities
    - - events.html  Events
      - - contact.html  Contact & Booking Form
       
        - ## Admin Notes
       
        - ### Replace Images
        - Add photos to `assets/images/`. Drop `hero.jpg` there for the hero background.
        - In room cards, replace the gradient `>div>` with `>img class="card-img" src="assets/images/room.jpg" alt="...">`.
       
        - ### Update Rates
        - Search `rooms.html` and `contact.html` for `$` to find every price. Update the card-price spans and the rates table.
       
        - ### Change Formspree Endpoint
        - In `contact.html` find:
        - `action="https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID"`
        - Replace the ID with your Formspree form ID from formspree.io.
       
        - ### Set Custom Domain in Vercel
        - 1. Vercel Dashboard  Project  Settings  Domains
          2. 2. Add your domain (e.g. americaninn.com)
             3. 3. Add CNAME `www`  `cname.vercel-dns.com` at your registrar
                4. 4. SSL is auto-provisioned.
                  
                   5. ### Booking Email
                   6. Search all files for `reservations@americaninn.example` and replace globally.
                  
                   7. ## Local Preview
                   8. ```
                      python3 -m http.server 3000
                      ```
                      Then open http://localhost:3000

                      ## Vercel Config
                      - Framework: Other (Static)
                      - - Build Command: (none)
                        - - Output Directory: . (root)
                          - 
