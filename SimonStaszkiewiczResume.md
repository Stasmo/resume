# Simon Staszkiewicz - DevOps
- [Background](#background)
- [Education](#education)
- [Skills and tools](#skills-and-tools)
- [Experience](#experience)
- [Professional development](#professional-development)
- [Contact](#contact)

## Latest Version

For the latest version of this document, please visit the [Github repo](https://github.com/Stasmo/resume).

## Background

I started my career in tech after getting a diploma of technology from BCIT in Computer Information Systems Technology. I graduated in 2008, which was the year I experienced my *first* "once-in-a-generation" economic collapse, and was hired as an IT manager for a trucking company of about 100 people after a couple of weeks of job hunting. I was the only person who knew anything about technology in the building and anything that plugged into the wall was my responsibility. As you can imagine, a company that hires a 19 year old freshly graduated kid as the sole person to manage their critical infrastructure was not a great place to work, but I worked there for 2 years and saved my pennies and decided to go to university for software development. After a year of remarkably poor financial planning, I quickly spent all of the pennies I saved and rather than take on loans, I decided to take a break from university and work for a bit while I figure out if I want to continue with school. I hit craigslist to hunt for a job and I found a job at Electronic Arts working in QA, working to test various websites they create. It was a very ebb-and-flow type of job so I had a lot of time to study programming. Eventually I was good enough that I could submit git patches for the bugs I found in releases. Somebody I worked with at EA told their husband about me, and he hired me for a contract job for IBM in Calgary. About a year and a half later, a friend at EA wanted me back at EA, and as a sheltered Vancouverite who had never experienced a real Canadian winter before, I was not looking forward to the next winter in Calgary. So back to EA I went, this time as somebody who gets paid to write code. Eventually after a few years, another friend I worked with at EA persuaded me to work with them at Copperleaf, so I moved on. I've spent my time at Copperleaf working almost exclusively with containers, CI/CD and AWS. It's now been almost 5 years at Copperleaf and I while I think it's a comfortable place to work, the best thing for my career is for me to move on.

## Education

I got a **diploma of technology from BCIT in 2008**. I primarily learned about networking and Windows systems administration, and a little bit about programming in Java. The primary focus was networking so I got my CCNA certification and was studying for my CCNP before I got my first job.


I went back to school to SFU for a couple of semesters. I got a few credits from BCIT, but I had to catch up in mathematics. My two semesters were mostly math courses and zero technology courses, and I think it drained my desire to continue at SFU. When I ran out of money I stopped going and it's never been an issue for me.

Education doesn't really end though. I just call it [professional development](#professional-development) now.


## Skills and Tools

My preferred tools right now for managing AWS is a combination of **Jenkins**, **Terraform**, **Ansible** and **NodeJS** scripts for really custom stuff. I know a thing or two about **Kubernetes** after taking some courses, setting up a raspberry pi cluster at home, playing around with EKS, and deploying a simple app to an EKS cluster at work. I don't have the in-depth Kubernetes experience that you get by working with something every day for years, but I'd like to. I use Ansible for a lot of stuff and know it pretty well. I'm using Terraform more often now and for everything that those tools can't do, I write code. I feel pretty comfortable working with **Windows** and **Linux**. I haven't written much **Python** in the past 5 years but I think I could jump back into it.

## Experience

### IT Manager at BST Management - 2008 to 2010

A company of about 100 people with **100 workstations**, 200 cell phones for drivers, an **Exchange** server and a few file servers. If it plugged into the wall, it was my responsbility. This included a plain old telephone system that I did not understand at all. My primary responsibilities were **ghosting workstations**, wiping the viruses off the owner of the company's computer after he visited some dubious websites, trying to figure out which SIM card and which cell phone still works, and ordering more over-priced printer toner. One day the old PHP accounting application running on one of the servers stopped working, and of course it was my job to fix it. I ended up taking continuing education courses at UBC and learning a bit about **PHP**, and I discovered that I really enjoyed learning, and I really enjoyed programming. I fixed the PHP app and decided it was time to go back to school for software development.

### Electronic Arts - September 2013 to June 2016

We had an almost full-size soccer field on campus. I played soccer at lunch almost every day and it was the fittest I've ever been in my life.
I worked on a central web team. I was hired as a **Software Engineer in Test (SET)** as a contractor and a year later I was hired as a full-time **Software Engineer (SE)** on the team. We created libraries that connected frontend developers to backend systems. As an SET my focus was software quality, making sure that the quality of tests was high, coverage was as high as reasonable, and that we produced quality work. When I was converted to SE I contributed by inspecting various internal APIs like the Origin API or a FIFA scoreboard API, creating a **PHP** library that other developers could integrate into their applications, and documenting the heck out of it. I was lucky to work on a great team with smart people who taught me the importance of good **documentation**, **code reviews**, **static code analysis** and **unit testing**.

### Copperleaf - June 2016 to present

I joined Copperleaf just about 5 years ago and helped to **grow the company from 60 people to 360**.

#### Automated the build and deployment pipelines for Copperleaf's first and second cloud apps

- dockerized the applications (django, kotlin, angular, postgres, rabbitmq)
- builds triggered on commit to Github (webhooks) and sometimes manually
- had to select a CI tool, ended up with self hosted jenkins due to data residency restrictions
- used jenkins to run ansible to:
	- create and destroy environments (and realized later that this should have been done in Terraform)
	- build, test and push containers to ECR
	- pull from ECR to dev, test, staging and production environments
	- run automated selenium tests (in local webdriver containers and on self-hosted grid that I also set up with some customizations)
	- run backups and restores
	- deploy to nightly environments
	- run a weekly drill of the disaster recovery playbook
- created a small JS app to simplify the deployment of the application because the jenkins parameterized form for deployment could not validate form fields well enough
	- it was mainly just some forms with dropdowns that called a jenkins job under the hood

#### Automated the deployment of Copperleaf's main product

- went from a totally manual installation process which took a trained user about 10 to 30 minutes to do and was a very error-prone process, to a fully automated process run by jenkins which takes on average 8 minutes to run and 10 seconds to fill in the parameters for the job
- jenkins now runs this job 300+ times a day to deploy to our EC2 instances in 10 regions
- used ansible to pull build artifacts from S3 and run the installation process
- this is the preferred method to deploy to production

#### Cloud standards

- created the base AMIs that most of our cloud instances use
	- packer creates a new AMI monthly for windows instances and linux
	- ubuntu base image with some docker tools installed
		- ubuntu because we weren't sure if we were going to stay with AWS, otherwise I probably would use Amazon linux
	- AMI costs can balloon when the matrix includes OS version, region, build frequency and extending AMIs, so it gets tricky
- created standard security groups defined in IAC
	- for example, if you want to expose your server to HTTP traffic, you don't just add 0.0.0.0/0 443 to a group on your instance, you use the devops_managed_public_web_access group
	- there's no drift in these groups because jenkins is constantly running ansible to keep these groups up to date
- created some simple governance rules in AWS Config to alert when users are creating dangerous security group settings like allowing 0.0.0.0/0 on port 22, or to prevent users from accidentally creating policies that are too permissive, and to alert server owners when their servers are not properly tagged
- created a DNS naming scheme to better identify servers
- created and managed the jenkins servers
	- scaled up from 100 builds a week to 14,000
	- created many of the first jobs in jenkins and started a bad pattern
		- most of the jobs today are NOT pipelines jobs using Jenkinsfiles stored in git, and most new jobs aren't using pipelines
	- created all of the automation that creates build node AMIs, automatically launches and connects build nodes to the master node, grants them access to EC2 instances, etc.
- created the base containers that many of the builds in jenkins use
	- windows containers were not great at the time
- created most of the groups used to give AWS permissions to developers and operations people
- started an antipattern of putting AWS credentials into containers because I didn't know about the metadata service and instance profiles/roles

#### Created a system to automatically manage SSL certificates for each ec2 instance based on tags

- every day get jenkins to check all certificates in vault and refresh the ones that expire in less than 2 weeks from current date
	- get the certs from letsencrypt
	- convert them into a few different useful formats and store them in vault
	- store their expiry date in vault too
- whenever an instance is started with automation, check the certificates on the instance and update them if necessary
	- for IIS instances this was easy, just check the bindings and update the certificates where the DNS name matches
	- for linux instances this was done by placing the certificates in a specific directory and then running any scripts that exist a different specific directory
- end result was that you could tag your EC2 instance with a few DNS names and place a script like `docker restart nginx` into the `~/.post-cert-hooks` directory and map those certificates into the nginx container, and that container would be restarted automatically whenever the certificates were updated
- before this system, nobody was really using HTTPS because it was a pain to set up, and now there are very few systems not using HTTPS by default

#### 40% AWS bill reduction in a single quarter, from $2,000,000 annual spend to $1,200,000

- created a report that summarized the 3,000,000+ line items in AWS bill and grouped together costs by cost center, team, etc., allowing us to identify which instances were costly due to bandwidth, volumes and other factors not included in the base EC2 instance pricing
- developed a Vue + NodeJS application to allow users to schedule their instances to be stopped and started at whatever time they wanted, resulting in a 66% reduction in costs for product development dev and test EC2 instances
	- weekly email reminders to server owners to schedule their servers
	- most instances do not use elastic IP addresses so things got tricky with DNS, security groups
	- smart default schedules, easy to use schedule UI resulted in 92% of instances scheduled to be offline by their owner within the first week of deploying the scheduling functionality
- determined baseline and forcasted EC2 instance usage and used that to determine best AWS Compute Savings Plans to purchase for a 40% reduction in baseline usage costs (would be much higher but we're about 80% windows EC2 instances because the main product is an old C# .NET monolith)

#### Implemented zero trust networking "Black Cloud" SDP solution for EC2 instance access

- set up gateways in strategic locations around the world with latency based DNS resolution so remote users would connect to the best gateway
- added a feature to my Vue application for managing access to confidential customer data
- this Confidential Information Access (CIA) portion of the application allowed you to configure access to any EC2 instance in our AWS accounts
- rolled out a client to each end user that connected them to the gateway, which would modify the routing table and route traffic for permitted instances to the nearest gateway
- created a microservice that determined which EC2 instance a user was allowed to access based on their current location in the world, which was determined from several sources, and fed this data to the SDP gateways and clients
- this was a critical step towards ISO 27001 certification

#### Bringing automation to users

- jenkins is powerful and credentials are sometimes accidentally exposed, so I wanted to restrict access to jenkins as much as possible
- created a Vue + NodeJS app (same app as the schedule app) to allow users to deploy Copperleaf's main product to their test instances
- called jenkins under the hood with set parameters
- this greatly reduced numbers of users who needed jenkins access, and removed the need for users to be able to RDP to their instances
- users can also back up and restore their instances through the UI, manage their backups (which are stored in S3), and download build artifacts produced by the build pipeline in Azure DevOps (which are also stored in S3)

#### Created a plan to migrate existing cloud native application from docker on EC2 to kubernetes

- inspected the application for issues with horizontal scaling and container duplication
- created a plan for migrating the database from a postgres container with a persistent volume to RDS
- created a plan for removing the in-memory hibernate cache in the backend container to an external redis container or managed service
- I'm certain they will continue to tell me this is not a priority until their first serious outage

#### Launched the first EC2 instance we ever used almost 5 years ago

- as the first person to be using AWS at Copperleaf, a lot of the work I did ended up being the foundation for how we do things now
- as a complete newbie to AWS 5 years ago, a lot of the work I did was bad and I had to redo it later :)
- I was there for every step in the journey from $0 to $2,000,000/yr in AWS costs, and back to $1,200,000, and from 0 to 500+ EC2 instances

### Professional development

I spend about 100 to 200 hours a year doing online courses on whatever topic interests me on udemy.com. Some of these courses were great, and some of them were terrible.
A few examples from the last 2 years are:

- Angular - Good course! Instructor was very knowledgeable and course was digestible and practical. It's a shame that I just don't like Angular `¯\_(ツ)_/¯`
- Algorithms in C - Incredibly boring but I didn't learn this stuff in University so I felt like I needed to catch up
- A comprehensive introduction to JVM - Good course, learned a lot about garbage collection
- AWS courses (ended up getting 2 of the easier certifications)
- Kotlin for Java developers - Kotlin is waaay nicer than Java 8, but I hear that Java has mostly caught up in the last 3 years. Good course. Comprehensive.
- Docker and Kubernetes: The complete guide - Got this one for the k8s section. Teacher has a delightful Alabama accent. Basic intro to config files and applying them to a cluster. Would recommend.
- Complete Linux Training Course - Very shallow introduction to linux. Would not recommend.
- Learn how to code: Google's Go (golang) Programming Language - Teacher has a good sense of humour. Would recommend for language fundamentals.

## Contact

Email: simon@staszkiewicz.ca

Phone: 604 729 9654