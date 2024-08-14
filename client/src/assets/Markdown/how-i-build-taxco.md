# Taxco

So, after getting my first app out there all on my own, I gotta say, I feel like I've leveled up big time as a developer compared to just a couple of months ago. Sure, my code's cleaner and tighter now, but it's more than that. I'm talking about really getting into the nitty-gritty of how architectures work, thinking through every decision I make, and picking the perfect database for what I need.

And let's not even get started on cloud computing! Figuring out which provider is the best fit means diving into all sorts of questions about how I want things set up, what I can afford each month, and whether it's worth the cash. It's like a whole new world of knowledge that I didn't even know existed when I started out.

Basically, going from square one to getting my app live hasn't just made me better at coding. It's opened my eyes to this whole big world of software development that's about way more than just writing lines of code. It's about making smart choices, thinking ahead, and finding that sweet spot between cost and what actually works.

### 1. **Clarifying My Objectives**

Before I jumped into picking a cloud provider, I had to get clear on what I actually wanted to do. What were my goals here? Was I just aiming to show off my skills and the tools I'm good at using? Or maybe I wanted to share some articles or other stuff?

After mulling it over for a while, I finally figured out what I was after. I wanted to put out all sorts of content—maybe some articles, pictures, or just random thoughts. I was really into platforms like Medium, where you can just be yourself and share what's on your mind. But I didn't want something all formal and polished, where everything I wrote had to be perfect. I wanted a space that was alive, where I could mess up, fix it, and keep growing.

And on top of all that, I wanted this space to feel like me. It wasn't just about putting stuff out there; it was about creating this whole vibe that was uniquely mine—a place where I could be myself and let my ideas flow and change over time.

### 2. Prototype

So, once I had a clear picture of what I wanted to achieve, it was time to bring it to life visually. I turned to Figma, this awesome tool that's great for web design prototyping—and bonus, it's free! I started off with a bunch of ideas swirling around in my head, mapping out how the first page would look, how posts would be structured, and what users would be able to do.

I went through a bunch of rounds of prototyping, tweaking things here and there until everything matched up with what I had in mind. Figma was seriously a game-changer in turning those abstract ideas into something I could actually see and play around with. I didn't prototype the whole app—just focused on the main pages to get the feel right.

Once I had the visual blueprint locked in, it was time to dive into coding. I used what I learned from prototyping to guide how I built the app. It was all about that back-and-forth between design and coding, making sure the final product not only met my goals but also looked and felt the way I imagined it would for users.

### 3. Code

**Technology Stack Selection**

Embarking on the coding phase required thoughtful decisions regarding languages, frameworks, databases, and the choice of a cloud provider. Given the constraint of a 30-day vacation, I needed to optimize my time and selected technologies that aligned with my existing skill set and project requirements.

---

**Front-end Development:**

Opting for React in conjunction with Typescript emerged as the ideal choice for crafting the front-end. Although initially familiar only with JavaScript, I discovered that transitioning to Typescript was a manageable endeavour through some dedicated learning.

---

**Back-end Development:**

The decision-making process for the backend involved weighing the pros and cons of NodeJS against exploring a more familiar language like Kotlin or Java. Ultimately, I chose to bolster my proficiency in Kotlin, a language I already used in my professional role, coupled with the Spring Boot framework.

---

**Database:**
Recognizing the success of NoSQL databases in blog applications, particularly MongoDB, I opted for MongoDB Atlas, drawn in by its accessible free tier.

However, for storing images and post content, I sought a different solution. Drawing from past experience, I turned to Amazon S3 for image storage, ensuring a robust and scalable solution for handling media files. Consequently, AWS emerged as the preferred cloud provider, given its seamless integration with Amazon S3 and the comprehensive suite of services it offers. This cohesive tech stack allowed me to efficiently manage various aspects of my application, leveraging both familiarity and strategic choices.