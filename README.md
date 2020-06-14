# Welcome to the Comprehensive Vue Class

![Accelebrate Logo](images/accelebrate-logo.png "Accelebrate Logo")

Most of Accelebrate's courses are taught privately online or in-person for teams of 3 or more, and can be customized to your group’s goals. To receive a customized proposal and price quote, please visit [https://www.accelebrate.com/contact/](https://www.accelebrate.com/contact/) or email [sales@accelebrate.com](sales@accelebrate.com). In addition, we offer live, online open enrollment training for individuals. 

## Class Information Page

[https://www.t4d.io/accelebrate-introduction-to-angular-training-06152020](https://www.t4d.io/accelebrate-introduction-to-angular-training-06152020)

## Other Resources

The instructor will distribute additional private links during class for downloading courseware, registering for class completion badges, and downloading recordings...

All code in this repository is distributed under the [MIT license](license.txt).

## How to Use the Instructor's Version

The following instructions will help students pull down the instructor's version to resume class at the same point of the instructor.

1. Clone this repository to a new folder. Do not attempt to copy these files over your version or another version which you have cloned. Replace `FOLDER_NAME` with the name of a new folder which will be created when the content is cloned.

```
git clone https://github.com/t4d-classes/angular_06152020-afternoon.git FOLDER_NAME
```

2. Change into the folder you cloned into.

```
cd FOLDER_NAME
```

3. Run the following command to install the NPM packages.

```
npm install
```

4. To start the React application, run the following command.

```
npm start
```

5. Open the editor of your choice and edit the files.

## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the project created by the Vue CLI generator.

To install those packages, run the following command from within the root folder of the project:

```bash
npm install -D json-server npm-run-all
```

Next, the `package.json` needs to be updated to easily run the REST API provides by the [JSON Server](https://github.com/typicode/json-server). Here is the `scripts` configuration which can be copied and pasted for the REST API. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "ng": "ng",
  "start": "run-p rest web",
  "rest": "json-server --port 3060 ./db.json",
  "web": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
},
```

Here is the `db.json` JSON which can be copied and pasted for the REST API portion of the class. This content will pasted into a file named `db.json`. The `db.json` file will be placed in the `demo-app` folder, the same folder as the `package.json` file. The `db.json` file should **NOT** be placed in the `src` folder.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {"id":1,"make":"Ford","model":"Fusion Hybrid","year":2019,"color":"blue","price":45000},
    {"id":2,"make":"Tesla","model":"S","year":2018,"color":"red","price":100000}
  ]
}
```

<br><br>
All course content and teaching is provided by: [<img src="images/t4dio-logo.gif" alt="T4D.IO Logo">](http://www.t4d.io)


