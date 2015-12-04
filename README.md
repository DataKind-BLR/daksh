# Daksh Data Visualisation

## Introduction
Daksh was started in 2006 by a group of citizens concerned about the lack of accountability in politics and governance. Daksh currently consists of people from diverse backgrounds including academics, entrepreneurs, lawyers, teachers, social and political activists and ordinary citizens.

## Daksh's Objective
- Track performance of elected governments and representatives by collecting relevant information on a regular basis.
- Collect and present detailed, query-friendly background information about people in politics.
- Elicit and present the perceptions of citizens at a local level.
- Present human development indicators at the most important unit of political activity- the constituency.
- Promote active citizen participation to ensure accountability in politics and governance.

## DataKind's Role
This project is going to be all about data visualisations.But before we explain what we have planned just an heads up, Daksh already has a reporting platform which you can explore [here](http://zynata.com/base/src/index.html#/access/signin?portal=dakshlegal.in).

So incase, you were too lazy and didn't go through the link above they are using high charts for there reporting dashboards
and they have the basic reporting available but no interactions or a way user can come and explore.
Our goal for Data dive is to do exactly that. :)

So these are the Vis concepts we have in mind currently: - 
- A map visualisation color coded by the numer of cases and KPI metrics  on the right to support some level of information
  pass on to the user. The user will then be able to drill down the map to any state and see the KPI for that state and the
  distribution of number of cases at the district level accross the state.
- A timeline vizualization showing how the case has been evolving over the past years/months.

## Getting the Data
To get the data you will have to connect to a VPN connection and collect the data from the postgresql database. There is a limit of 5 connections only, so there will be a few designated people working on getting the data and the rest would be
getting sample data in csv format to work on.

## Coding Guidelines
It is must to follow good coding standards as this code will be shared with others, so keep it sane we will be very strict
about these guidelines. Different Languages have different guidelines we are listing a few, if you are using some other 
programming langauge please let us know we will add it here. 

**WARNING: Pull Requests not following proper guidelines will not be merged.**

- Python: Incase you don't know the `zen of python` follow these [guidelines](https://github.com/raspberrypilearning/python-style-guide) while coding.

- Js: These are the [guidelines](https://github.com/brunge/js-coding-guidelines) for js fans :)

## Contributing
To contribute to the codebase, ask us to add you to our datakind community on github and from there on:-
- Fork It
- code
- send Pull request
- We will be reviewing the code and merging it. :)
