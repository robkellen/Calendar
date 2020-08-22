# Scheduler

This project is a simple calendar application that allows the user to save events for each hour of the day. 

## Languages & Framework

This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Screenshot of functioning App

[![Screen-Shot-2020-08-22-at-11-58-51-AM.png](https://i.postimg.cc/gcyHqBSK/Screen-Shot-2020-08-22-at-11-58-51-AM.png)](https://postimg.cc/NLMXQbwy)

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Functions

This day planner consists of time blocks for a standard workday of 9am - 5pm.  The date of the current day in the planner is displayed at the top.  

In the entry field users can type in text, and save it to their local storage by clicking the blue save button to the right.  Upon refreshing the page the data will persist until the user deletes and saves again.  

The background color of the entry area changes according to the time of the day at the user's location.  A background color of green indicates time in the future, the color orange indicates the current hour of the day, and the color gray indicates that those time slots are now in the past. 