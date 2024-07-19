import React from 'react';
import './App.css'; // Import any custom CSS if needed

const DeepChat = () => {
  return (
    <deep-chat
      style={{ borderRadius: '10px' }}
      messageStyles='{
        "default": {
          "shared": {
            "bubble": {
              "maxWidth": "100%", "backgroundColor": "unset", "marginTop": "10px", "marginBottom": "10px"}},
          "user": {
            "bubble": {
              "marginLeft": "0px", "color": "black"}},
          "ai": {
            "outerContainer": {
              "backgroundColor": "rgba(247,247,248)", "borderTop": "1px solid rgba(0,0,0,.1)", "borderBottom": "1px solid rgba(0,0,0,.1)"
            }
          }
        }
      }'
      avatars='{
        "default": {"styles": {"position": "left"}},
        "ai": {"src": "path-to-icon.png"}
      }'
      submitButtonStyles='{
        "submit": {
          "container": {
            "default": {"backgroundColor": "#19c37d"},
            "hover": {"backgroundColor": "#0bab69"},
            "click": {"backgroundColor": "#068e56"}
          },
          "svg": {
            "content": "<?xml version=\\"1.0\\" ?> <svg viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\"> <g> <path d=\\"M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z\\"> </path> </g> </svg>",
            "styles": {
              "default": {
                "width": "1.3em",
                "marginTop": "0.15em",
                "filter": "brightness(0) saturate(100%) invert(100%) sepia(28%) saturate(2%) hue-rotate(69deg) brightness(107%) contrast(100%)"
              }
            }
          }
        },
        "loading": {
          "container": {"default": {"backgroundColor": "white"}},
          "svg": {
            "styles": {
              "default": {"filter": "brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}
            }
          }
        },
        "stop": {
          "container": {
            "default": {"backgroundColor": "white"},
            "hover": {"backgroundColor": "#dadada52"}
          },
          "svg": {
            "content": "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?> <svg viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\"> <rect width=\\"24\\" height=\\"24\\" rx=\\"4\\" ry=\\"4\\" /> </svg>",
            "styles": {
              "default": {
                "width": "0.95em",
                "marginTop": "0.32em",
                "filter": "brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}
            }
          }
        }
      }'
      textInput='{"placeholder": {"text": "Send a message"}}'
      history='[
        {"text": "Hey, how are you?", "role": "user"},
        {"text": "I am doing great, thanks.", "role": "ai"},
        {"text": "What is the meaning of life?", "role": "user"},
        {"text": "Seeking fulfillment and personal growth.", "role": "ai"}
      ]'
      demo="true"
      connect='{"stream": true}'
    ></deep-chat>
  );
};

export default DeepChat;
