const headerComponent = {
    template: `
    <header class="header-with-background">
        <img src="images/logo.webp" alt="Title Image" class="header-image">
        <h1 class="title-text">Niles's Journey</h1>
    </header>
    <nav>
        <ul class="nav-list">
            <li>⭐<a href="softwareengineering.html"> Software Engineering</a> |</li>
            <li><a href="gpu.html">GPU</a> | </li>
            <li><a href="monsterhunterisland.html">Monster Hunter Island Docs</a> |</li>
            <li><a href="interviews.html">Interviewing</a> |</li>
            <li><a href="gallery.html">Gallery</a> |</li>
            <li><a href="projects.html">Projects</a> |</li>
            <li><a href="index.html">About</a> ⭐</li>
        </ul>
    </nav>
    `
};

const projectsComponent = {
    template: `
      <section>
        <h3 id="title" onclick="capitalizeTitle()" class="clickable">My Works</h3>
        <hr>
        <p class="text-container">Here are some of my passion projects that I developed for competitions while completing my Undergrad in Computer Science. My visual novel game,
        Monster Hunter, won first place for Game development. The artwork in these games is mostly original and was crafted with care and love. I have a personal
        soft spot for Monster Hunter because the creation of that game is what got me to fall in love with programming. It was during my freshman year of college,
        I had never programmed before starting my classes. I decided to enter the competition because I was inspired to create a game. I ended up falling
        in love with the process, and the game became over 2,000 lines of code. None of the other students' projects came close; many of them were just using
        drag and drop game makers like RPG Maker. I won by a landslide.</p>
        <h4>Projects I've Created:</h4>
        <hr>
        <div class="video-image-container">
            <dl class="project-items">
                <dt><em>Dungeon Diving: A 2D Platformer game made with Unity.</em></dt>
                <dd class="video-image-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cPm8wh3ADsc?si=OKV0pP2sgLSVhJV1" title="Dungeon Diving Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div>

                    <img class="hover-image-cat" src="images/KatiaMovements_idle4.png" alt="cat warrior">
                </div>
                    </dd>


                <dt><em>Monster Hunter</em></dt>
                <dd class="video-image-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SPFYL1sLUkM?si=OHV49iLCXlaGb-2S" title="Monster Hunter Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div>

                  <img class="hover-image-dwarf" src="images/serious_armscrossed1.png" alt="dwarf">
                </div>
                    </dd>


                <dt><em>Monster Hunter Island</em></dt>
                <dd class="video-image-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/E85RnEVqD2E?si=D-RtbOykWEJMSqKF" title="Monster Hunter Island Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </dd>
            </dl>
    </div>
    </section>
    `
};

const gpuComponent = {
    template: `
    <section>
        <h2 id="title" onclick="capitalizeTitle()" class="clickable">gpu mastery!</h2>
        <hr>
        <img id="randomGallery" onclick="showRandomGallery()" src="images/profile_image.jpg" alt="Profile Image" width="400" class="image-with-shadow normal-image clickable">
        <p class="text-container">Feel the hum of the machine. Offer the beast electricity and cool air. In the fall, collect the bountiful harvest of anime PFPs.
            I am a believer in the spiritual aesthetics. There is something spiritually aesthetic about hearing the hum of your machine. After my
            experience building the best GPUs, I am willing to share my knowledge with anyone, for I am humble and charitable!
        </p>
    </section>

    <section>
        <h3>List Of GPU Recommendations:</h3>
        <hr>
        <ul class="center">
            <li class="text-container">
                <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/">GeForce RTX 4090</a> if you want pure power.&#128293; <br>
              "The <b>NVIDIA® GeForce RTX™ 4090</b> is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.
                Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create. It’s powered
                by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators."<br><br>
            </li>
            <li class="text-container">
                <a href="https://yestonstore.com/products/yeston-geforce-rtx4070-graphics-card-gddr6x-12g-192bit-gddr6x-gaming-gpu">
                GeForce RTX 4070</a> if you want to go for style points.&#128133;<br>
                No product description or sales pitch on the website for this one, so I will make my own:<br>
                "Hey there, gamers!&#128526; Get ready to dive into the gaming universe like never before with the <b>YESTON SAKURA Bride Series NVIDIA GeForce RTX 4070
                Ti 12G GDDR6X 192-bit Gaming Video Graphics Card GPU</b>! This bad boy's got a 5nm architecture that'll blow your mind with its stunning visuals and smooth
                With lightning-fast GDDR6X memory and the sweet compatibility with PCI-Express 4.0, you'll be gliding through games with minimal lag and maximum speed. Plus,
                custom-designed RGB light effects will make your setup pop like nobody's business. Strap in and get ready to take your gaming experience to a whole new level with the
                YESTON SAKURA Bride Series NVIDIA GeForce RTX 4070 Ti - it's the bee's knees of cutting-edge graphics technology, baby!"
            </li>
        </ul>
    </section>
<!-- PRICES TABLE -->
    <section>
        <h4>Prices Table</h4>
        <hr>
        <table class="center table-value">
            <tbody>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
                <tr>
                    <td>GeForce RTX 4090</td>
                    <td>$1,649</td>
                </tr>
                <tr>
                    <td>GeForce RTX 4070</td>
                    <td>$530</td>
                </tr>
            </tbody>
        </table>
    </section>
    `
};

const indexComponent = {
    template: `
  <header>
    <h1 id="title" onclick="capitalizeTitle()" class="clickable">welcome!</h1>
    <hr>
  </header>
  <div class="image-container">
    <img  id="randomGallery" src="images/getinthecar.jpg" onclick="showRandomGallery()" alt="Get In The Car" class="image-with-shadow normal-image clickable">
  </div>
    <p class="text-container">I am a Junior Software Engineer and a Senior GPU-builder. This site will not only detail my experience and journey into software development, 
    it will inform the readers about some <a href="softwareengineering.html">GPU</a> tips and tricks.
  Are you interested in one's journey to becoming a <a href="softwareengineering.html">Software Engineer</a>?
  Do you want to start building a gaming GPU and don't know where to start? Do you like looking at anime profile pictures? Then get in the car, we got GPUs to build. (Now please press the audio play button)</p>
    <audio controls>
    <source src="music/car_sound.mp3" type="audio/mp3">
    Your browser does not support the audio tag.
  </audio>

    `
};

const galleryComponent = {
    template: `
<main>
    <h1 id="title" onclick="capitalizeTitle()" class="clickable">anime profile picture selection!</h1>
    <p class="text-container">As you traversed through this website, you were probably thinking,
      "Where can I find amazing anime PFPs(Profile Pictures) as these ones I am seeing on
      this site?". Don't worry. I will share them all with you in this gallery below.
      Select any of them and you will be taken to a link for a full resolution download.
    </p>
    <h2>Gallery</h2>

    <div class="gallery-container">
    <!-- PICTURES -->
      <div class="gallery gallery-img">
          <a target="_blank" href="images/getinthecar.jpg">
            <img src="images/getinthecar.jpg" alt="Aqua Car" width="600" height="400">
          </a>
          <div class="desc">Aqua Taking You For A Drive</div>
        </div>

        <div class="gallery gallery-img">
          <a target="_blank" href="images/profile_image.jpg">
            <img src="images/profile_image.jpg" alt="Aqua GPU" width="600" height="400">
          </a>
          <div class="desc">Aqua Building GPUs</div>
        </div>

        <div class="gallery gallery-img">
          <a target="_blank" href="images/random_girl_image.png">
            <img src="images/random_girl_image.png" alt="Head Pop Up" width="600" height="400">
          </a>
          <div class="desc">Happy Face</div>
        </div>

        <div class="gallery gallery-img">
          <a target="_blank" href="images/software_image.jpg">
            <img src="images/software_image.jpg" alt="Studying" width="600" height="400">
          </a>
          <div class="desc">Learning Math</div>
        </div>

        <div class="gallery gallery-img">
          <a target="_blank" href="images/programming_image.png">
            <img src="images/programming_image.png" alt="Coding" width="600" height="400">
          </a>
          <div class="desc">In The Zone</div>
        </div>
    </div>
</main>
    `
};

const monsterIslandComponent = {
    template: `
    <header>
        <h2 id="title" onclick="capitalizeTitle()" class="clickable">monster hunter island docs!</h2>
    </header>
    <hr>
    <p class="text-container">This page contains all of my source documentation from when I created one of the games, Monster Hunter Island. I entered this game into my school's Computer Science competition
        in Spring 2020. If you want to see the academic process of creating a game manual and proposition for entry into a university competition, I have embedded my entire research and source
        code here for you. In the "Contents" section of the embedded document, if you select any of the chapters, you will be sent directly to the corresponding position in the document without
        having to scroll all the way there. This feature is added to improve navigation on a webpage as opposed to a document with pages.</p> <br>

    <p class="text-container">You're welcome.&#128171;</p>
    </main>

    <!-- EMBEDDED DOCUMENT -->
    <img id="randomGallery" src="images/random_girl_image.png" onclick="showRandomGallery()" alt="Girl Image" class="clickable">
    <iframe title="Game Doc" class="iframe-wrapper" src="https://docs.google.com/document/d/e/2PACX-1vRfviaOzlRFIesML_RoUz2OoTRCVxO6PK8lJOmgLeqAiXYKZOlwthqbS8zQGLDdtg/pub?embedded=true"></iframe>
    `
};

const softwareengineeringComponent = {
    template: `
    <header>
        <h2 id="title" onclick="capitalizeTitle()" class="clickable">software engineering mastery!</h2>
        <hr>
    </header>
    <img id="randomGallery" onclick="showRandomGallery()" src="images/software_image.jpg" alt="Software girl" class="image-with-shadow normal-image clickable">

    <div>
        <p class="text-container">At the moment I have 3 years of software engineering experience. My journey started off working for a technology company in New Hampshire called
            <a href="https://www.bottomline.com/us">BottomLine Technologies</a>. But alas, that job was too easy for me and I wanted to work on work that
            contained more complexity. After around 4 months of working there, I applied to <a href="https://www.mitre.org/">MITRE</a> in Massachusetts and
            got a new offer within a week. I am much happier living in Boston, working for them. My next goal is to aim for one of the bigger tech companies.
        </p>

        <h3>
            My Resume
        </h3>
        <hr>
    </div>
    <div class="resume-container">
    <iframe id="resume" src="images/Niles Mackinnon Resume-4.pdf" width="600" height="400" title="Resume"></iframe>

    </div>
    `
};

const interviewFeedBackComponent = {
    template: `
    <header>
        <h2 id="title" onclick="capitalizeTitle()" class="clickable">interview experiences!</h2>
    </header>

    <img id="randomGallery" onclick="showRandomGallery()" src="images/programming_image.png" alt="Programming" width="700" class="image-with-shadow clickable">
    <p class="text-container">I've been keepin' tabs on all these interview shenanigans, jotting down every single detail so I can actually learn somethig. Man, if you've ever delved into the wild world of engineering interviews, you'd know it's this whole other beast. You got these algorithm puzzles, math acrobatics, system wizardry, and then they throw in these niche questions for good measure. It's like trying to juggle flaming swords while riding a unicycle. Seriously, prep is key, but even then, you're probably gonna faceplant a bunch before you nail it.</p>

    <h3>What Failing An Interview Feels Like 😕</h3>
    <table class="center">
        <tbody>
            <tr>
                <td>
                    <iframe title="sad in rain" src="https://giphy.com/embed/fxrsZafauHL9e" class="iframe-interview" allowfullscreen></iframe>
                </td>
                <td><img src="images/Feedback_image.png" alt="Feedback" width="700"></td>
            </tr>
        </tbody>
    </table>
    <table class="center">
        <tbody>
            <tr>
                <td><p class="p-text-container clickable" id="changeableText" onclick="changeText()">
                        Hi Niles,<br><br>
                        Thank you for your application for the position of Software Development Engineer, Amazon.in (ID: 2471872). After careful consideration and review of your application,
                        we have decided to progress with other candidates for this role. <br><br>
                        Best regards,<br>
                        Amazon Recruiting Team
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <audio controls>
        <source src="music/stan_lofi.mp3" type="audio/mp3">
        Your browser does not support the audio tag.
    </audio>
    <br>
    `
}


const interviewTableComponent = {
    template: `
    <section>
    <h4>Interviews I Have Done</h4>
    <table class="center table-value">
        <tbody>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Feedback</th>
            <th scope="col">Receive Offer</th>
        </tr>
        </tbody>
        <tr>
            <td>Microsoft</td>
            <td>Positive</td>
            <td>No. Told I was "close" </td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Palantir</td>
            <td>Negative</td>
            <td>No.</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Deloitte</td>
            <td>Positive</td>
            <td>Yes. Did not accept</td>
            <td>✅</td>
        </tr>
    </table>
</section>
    `
};

const app = Vue.createApp({});
app.component('header-component', headerComponent);
app.component('interview-table-component', interviewTableComponent);
app.component('interviewfeedback-component', interviewFeedBackComponent);
app.component('softwareengineering-component', softwareengineeringComponent);
app.component('index-component', indexComponent);
app.component('monster-island-component', monsterIslandComponent)
app.component('gallery-component', galleryComponent)
app.component('gpu-component', gpuComponent)
app.component('projects-component', projectsComponent)
app.mount('#app');
