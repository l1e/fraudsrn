
# <p align="center">Here the App where we can add information about fraud.</p>
<br>

## Run on Windows 10 on android simulator.

#### 1) Open an Git in folder project , then run the following command:
```
git clone https://github.com/l1e/fraudsrn.git
```

#### 2) For go to the current folder where you have cloned code, open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:
```
cd /d yourPath\fraudsrn 
```
Where 'yourPath' is the path to your folder.


#### 3) Then in current cmd and folder we install packages,run the following command:
```
npm i
```

#### 4) Use Android Studio to open your project with path:
```
./yourPath/fraudsrn/android 
```

#### 5) Add your debug.keystore  file for debugging in folder:
```
./yourPath/fraudsrn/android/app
```

#### 6) Add your firebase file google-services.json to folder:
```
./yourPath/fraudsrn/android/app
```

#### 7) In Android Studio run simulator:
<img src='/img/screenshots/run_simulator.png'  width="326px">

#### 8) Then we run our project, in current project folder we following command:
 
 ```
react-native run-android
 ```
 <br>
Wait a few minutes until your project is building. 
 <br> 
 <br> 
  
## Screenshots.


<br><br>
####  1)In-app you can authorize by email.<br>

<p  float="left" align="center">
<img src='/img/screenshots/14.jpg'  width="220px">
<img src='/img/screenshots/15.jpg'  width="220px">
<img src='/img/screenshots/16.jpg'  width="220px">
</p>


<br><br><br>
####  2)Add information about fraud.<br>
<p  float="left" align="center">
    <img src='/img/screenshots/5.jpg'  width="220px">
    <img src='/img/screenshots/6.jpg'  width="220px">
</p>
<p  float="left" align="center">
    <img src='/img/screenshots/9.jpg'  width="220px">
    <img src='/img/screenshots/12.jpg'  width="220px">
</p>
<p  float="left" align="center">
    <img src='/img/screenshots/13.jpg'  width="220px">
</p>

<br><br><br>
#### 3)Search information about fraud.<br>
<p  float="left" align="center">
    <img src='/img/screenshots/2.jpg'  width="220px">
    <img src='/img/screenshots/3.jpg'  width="220px">
</p>
<p  float="left" align="center">
    <img src='/img/screenshots/8.jpg'  width="220px">
    <img src='/img/screenshots/11.jpg'  width="220px">
</p>

<br><br><br>
####  4) Read more about fraud.<br>
<p  float="left" align="center">
    <img src='/img/screenshots/10.jpg'  width="220px">
<p  float="left" align="center">
    <img src='/img/screenshots/4.jpg'  width="220px">
</p>



## Issue with app
1) If app dont build with apk for smartphone, make  comand in your app dir - ' <code>  cd android && ./gradlew clean && ./gradlew assembleRelease </code> '. It took from https://github.com/facebook/react-native/issues/6745 .

2) If error <source> ERROR: Unable to determine the current character, it is not a string, number, array, or object

                     The current character read is 'E' with an int value of 69
                     Unable to determine the current character, it is not a string, number, array, or object
                     line number 1
                     index number 0
                     Error: EPERM: operation not permitted, scandir 'Full path+./fraudsrn/android/app/build/intermediates/signing_config/debug/out/signing-config.json'    at Object.readdirSync (fs.js:786:3)    at GlobSync._readdir (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:288:41)    at GlobSync._readdirInGlobStar (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:267:20)    at GlobSync._readdir (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:276:17)    at GlobSync._processReaddir (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:137:22)    at GlobSync._process (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:132:10)    at GlobSync._processGlobStar (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:380:10)    at GlobSync._process (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:130:10)    at GlobSync._processGlobStar (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:383:10)    at GlobSync._process (C:\Work\Traning\js\React-native\RN3\RNS\fraudsrn\node_modules\glob\sync.js:130:10)
                     ^
</source>. You should make  comand in your app dir - ' <code>  cd android && ./gradlew clean</code>.
