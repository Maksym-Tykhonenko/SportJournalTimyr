import React, { useState, useEffect, useRef } from 'react';
import { Image, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const LouderScreen = () => {
  const loaderHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Loader</title>
      <style>
        body{
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #000;
        }
        .loader{
          position: relative;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: linear-gradient(45deg,transparent,transparent 40% , #00fb02);
          animation: animate 2s linear infinite;
        }
        @keyframes animate {
          0%{
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
          }
          100%{
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
          }
        }
        .loader:before{
          content:'';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: #000;
          border-radius: 50%;
          z-index: 1000;
        }
        .loader:after{
          content:'';
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: linear-gradient(45deg,transparent,transparent 40% ,#00fb02);
          border-radius: 50%;
          z-index: 1;
          filter: blur(30px);
        }
      </style>
    </head>
    <body>
      <div class="loader"></div>
    </body>
    </html>
  `;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}
    >
      <WebView
        source={{ html: loaderHtml }}
        style={{ width: '100%', height: '100%' }}
      />
    </SafeAreaView>
  );
};

export default LouderScreen;
