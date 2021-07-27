# RACI Project Management 

'·..·''·..·''·..·' View it at [https://bridgetro.se/raci](https://bridgetro.se/raci) '·..·''·..·''·..·'

Code for the API is here: [https://github.com/bridgetrosefitz/raci_api](https://github.com/bridgetrosefitz/raci_api)

<p float="left">
  <img alt='projects-page' src="https://bridgetro.se/project-snapshots/raci/raci-5-projects-page.png" width='500' />
  <img alt="project-and-tasks-page" src="https://bridgetro.se/project-snapshots/raci/raci-1-project-and-tasks-page.png" width='500'/>
  <img alt="edit-project" src="https://bridgetro.se/project-snapshots/raci/raci-6-edit-project.png" width='500'/>
  <img alt="login" src="https://bridgetro.se/project-snapshots/raci/raci-3-login.png" width='500'/>
</p>

## Why I made it

I built this app to help solve the problem of managing roles on a team.

'RACI' stands for Responsible, Accountable, Consulted, Informed. From my experience, the RACI (or DACI) framework provides a helpful level of detail to make clear who is responsible for getting a job done well. It reduces the risk of low quality work arising from murky or pooled accountability, it helps make sure the right people have input on tasks (and conversely, gives team members explicit authority to make decisions without input!), and it prompts conversations about workload and capacity.

On past projects, I used Google Sheets to build my own RACI frameworks. This app has the advantage of being a standardized process which is simple to use, and of supporting functionality such as flags and alerts, issue-tracking and workflow tools.

## How it's made

### Technology

| Front end  | Back end |
| ------------- | ------------- |
| [React.js](https://reactjs.org/)  | [Rails](https://rubyonrails.org/) |
| [Semantic UI React](https://react.semantic-ui.com/)  | [JSON API](https://jsonapi.org/)  |
| | [PostgreSQL](https://www.postgresql.org/) |
| | [JWT](https://jwt.io/) |

### ERD

XXX

### User Stories

I kept myself organized with user stories, available [here](https://bridgetrosefitz.notion.site/Bridget-Fitzgerald-RACI-3166a2742268438889473e69c943d72e).


## What's next

The app is currently an MVP with full CRUD of projects and tasks, and the ability to flag tasks. From here, I'd like to make it more user-ready. Major next-up priorities (as of 07/27/21) are:
* Create a landing page which explains the app, and doesn't require you to sign up immediately
* Create an onboarding experience
* Implement authorization for viewing projects, based on whether the user is a team member or not
* Add media queries for mobile and larger screens
* Offer the ability to add team members who do not already have an account

Beyond these next-up priorities, it would be cool to:
* Add a 'manager' authorization for certain CRUD actions
* Add a 'department' or 'role' for each team member, e.g. customer service, engineer, product designer, engineering manager
* Enable authorized users to set pre-requisites for the number of users who should be selected for each RACI “function”, e.g. as a manager, I would like to stipulate that 15 customer service people must be informed for updates on a given task; or, that 2 engineering managers must be consulted on a given task
* Add a way for the people who must be Consulted (C) or Informed (I) to attest that they have indeed been consulted or informed
* Add a way to alert the C or I people that there is new material for their input or information
* Implement the other ideas under the "Nice to have" category in my [user stories](https://bridgetrosefitz.notion.site/Bridget-Fitzgerald-RACI-3166a2742268438889473e69c943d72e)

