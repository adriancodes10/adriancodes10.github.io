


// import React, { useState, useEffect } from "react";
import {  Alert } from 'react-native';
// import { Button } from "react-native-paper";

// webhook url for #Clients channel in appit workspace
// https://hooks.slack.com/services/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

  
const postToSlack = async (message) => {
  const blockMessage =   {
  "text": "You have a new direct message from AdrianCodes web app @ adriancodes10.github.io",
	"blocks": [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "New Client",
				"emoji": true
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":smile: *Client:*"
				},
				{
					"type": "mrkdwn",
					"text": message.firstName
				},
				{
					"type": "plain_text",
					"text": message.lastName
				},
				{
					"type": "plain_text",
					"text": message.company
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":briefcase: *Position Type:*"
				},
				{
					"type": "mrkdwn",
					"text": message.hiringGoal
				},
				{
					"type": "mrkdwn",
					"text": message.positionDetails
				},
				{
					"type": "mrkdwn",
					"text": message.projectType
				},
				{
					"type": "mrkdwn",
					"text": message.budget
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":house: *Location:*"
				},
				{
					"type": "mrkdwn",
					"text": message.city 
				},
				{
					"type": "plain_text",
					"text": message.state
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":bird: *message:*"
				},
				{
					"type": "mrkdwn",
					"text": message.message
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "*phone:*"
				},
				{
					"type": "plain_text",
					"text": message.phoneNumber
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "*Email:*"
				},
				{
					"type": "plain_text",
					"text": message.email
				}
			]
		}
	]
}
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {blockMessage}
      
       };
        try {
            await fetch(
                'https://hooks.slack.com/services/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', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            Alert.alert("Message received on", 
                            data.createdAt, "Will contact you soon!");
                        });
                })
        }
        catch (error) {
            console.error(error);
            Alert.alert("Oops there was an issue sending your message. Try again..")
        }
    }

     export default postToSlack;