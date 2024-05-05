Simon Staszkiewicz
===

- [Latest Version](#latest-version)
- [Background](#background)
- [Languages and Tech](#languages-and-tech)
- [Experience](#experience)
- [Education](#education)
- [Contact](#contact)

## Latest Version

For the latest version of this document, please visit the [Github repo](https://github.com/Stasmo/resume).

## Background

I went to school for networking and systems administration and worked as a sys admin for 2 years.
I switched careers to software development and worked as a full-time developer for 6 years.
As the industry shifted towards DevOps, my experience in operations and software development naturally
pulled me towards cloud technologies and DevOps work. I've been working with AWS and DevOps practices for 7 years
now and I really enjoy it. It's like building things with Lego all day.

## Languages and Tech

### Programming Languages

I've written quite a bit of `JavaScript` and `TypeScript` over the past 15 years, including frontend and backend applications. This is by far my strongest language.

I've written a bunch of smalls apps in `Python` and worked as a full-time Python developer for a short time, but I wouldn't feel comfortable starting a large project from scratch. I mostly use Python for scripts that are too complex to do in Bash.

I've written quite a few `Bash` scripts and did some simple training presentations to teach Bash best practices.

I've taken courses and written some small programs in `Kotlin` and `Go`.

I used to write a lot of `PHP`, but it's been a while and the language has evolved a bit since 5.6.

I've written a few `Groovy` scripts for Jenkins too, but never dived in very deep into the Jenkins Java API.

I've been doing a lot of `Arduino` and `MicroPython` for hobby robotics projects lately.

### Tools

Working with `Kubernetes` since 2020. I have created and managed a production cluster and worked with developers to create helm charts and migrate their applications. I set up my own cluster at home on Raspberry Pis. It's a fantastic technology for scaling and redundancy.

I know `Ansible`, `Terraform`, `CloudFormation`, `Hashicorp Vault` and `Packer` for infrastructure as code and configuration management.

I've been using `Docker` since 2016 and I think I'm pretty good with it.

I've been using `git` since 2010 and I still have so much to learn.

Comfortable with `EC2`, `VPC`, `S3`, `IAM`, `DynamoDB`, `RDS`, `ECS`, `ELB`, `Lambda`, `SQS`, `SNS`, `Control Tower`, `SSO`, `Organizations`, `EventBridge`, `CloudTrail`, `CloudWatch`, `Glue`, `Athena`, `LakeFormation` and more.

## Experience

### Senior DevOps Engineer - March 2022 to today

- took over ownership for the entire AWS infrastructure, about $120,000/mo worth of resources.
- created a secure, scalable, and generally nice-to-work-with production `EKS` cluster, worked with developers to create helm charts for their apps, migrate all of our applications from Heroku to `EKS` with a hard deadline, no unplanned outages, and a single planned maintenance time of 40 minutes to migrate state
- established a multi-account AWS Organization with role-based security policies and strong security boundaries using AWS SSO and Control Tower, integrating with our Google IDP and removing all user IAM access keys, cleaned up privilege escalation paths in IAM policies and replaced overly permissive access keys in CI with assumable roles using OIDC auth
- reorganized infrastructure as code (`Terraform`) with SOLID principles and created most of the modules and patterns that we use to create new infrastructure
- secured our private cloud networks with a zero trust network solution, providing private access to all of our AWS infrastructure with VPC peering, smart routing, individual and group permissions and network grants, integrated with our Google IDP
- rationalized and reduced the ever-growing AWS bill, implemented budgets and alerts, reduced our AWS bill from $120,000 a month to $70,000 by spotting redundancies and opportunities for cost optimization, and implementing zero-downtime cost-savings solutions, specifically:
  - better CloudFront caching policies
  - S3 lifecycle policies
  - EC2 autoscaling and spot instances
  - savings plans
- partnered with the data team to simplify and standardize training and deploying GPU accelerated models and creating ETL pipelines
  - building custom SageMaker containers
  - deploying and monitoring workloads to SageMaker and EKS
  - custom, durable, scalable pipelines for database replication, transformation and prep for training


### Software Developer, Senior DevOps Specialist, Automation Practice Lead at Copperleaf - June 2016 to February 2022

- hired as a software developer to develop a Django app then moved to devops role
- implemented a private `Jenkins` cluster for CI and grew the cluster from 0 to 2000 builds a day, owning the infrastructure
- used Terraform and Ansible to launch first cloud app as primary SRE
- migrated some apps `EKS`, writing `Helm` charts for deployment
- designed and developed automation in `Ansible` used to deploy flagship Windows application over 20,000 times a year
- designed and developed an internal `Vue`/`Node` application used daily by about 80% of the organization to automate deployments, view billing information and manage vault secrets
- deployed and managed a zero trust network solution to give remote consultants secure access to our internal tools from almost anywhere in the world
- implemented AWS Control Tower and Account Factory for `Terraform` to create customized sandbox accounts for development teams and production workloads
- founded and drove the creation of an internal RFC process to promote technical collaboration across the organization

### Software Developer at Electronic Arts - September 2013 to June 2016

- started as a test engineer focusing on the quality of the codebase, wrote unit tests, integration tests and e2e tests, implemented static code analysis tools
- joined the web development core team supporting the rest of the product teams
- working with `PHP`, `JavaScript` and `Scala` to create libraries for internal APIs

### Junior Software Developer contract for IBM - 2011 to 2013

- software developer working with `Java`, `Oracle ADF`, `JavaScript`, `Subversion`

### IT Manager at BST Management - 2008 to 2010

- hired as the only technical person to manage all IT infrastructure for an organization of 100+ people
- responsible for `Exchange Server`, `MSSQL Server`, internal application servers, file servers, `Netware` server, layer 3 switches
- responsible for all workstations and printers, phone system, fleet of cell phones for drivers, everything

## Education

**diploma of technology from BCIT in 2008** - The focus was systems administration and networking. Lots of networking, some Active Directory, a little bit of Java.

## Contact

Email: simon@staszkiewicz.ca

Phone: 604-729-9654
