# Human Resources Management Admin Panel

Human Resources Management (HRM) project, the administrator has the ability to add managers, add companies, schedule meetings for managers, and update profile information.

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679646-10e7a3cf-a262-4ca2-a779-e77d9706c404.jpg)

## Features

- Inbox
- Mail service
- Notification

## Installation

Install project with npm

```bash
  git clone https://github.com/humanresourcesteam/react.js-adminpanel.git
  cd my-project
  npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/humanresourcesteam/react.js-adminpanel.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Run Docker

Clone the project

```bash
  docker push aliogutcen/my-react-app:16
```

Running on Docker

```bash
  docker build -t <my-react-app> .
  docker run -p 3000:3000 <my-react-app>
```

## Usage/Examples

```javascript
import "./time.scss";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import BestEmployee from "../bestEmployee/BestEmployee";
import ProjectList from "../project-list/ProjectList";

const ProjectTime = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../launch.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  }, []);
  return (
    <div className="project-time">
      <div className="project-side-table">
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectTime;
```

## Screenshot

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679652-ddd7040c-e453-459a-81e2-c58dbe214979.jpg)

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679630-74beb681-9a80-4323-b48d-d83f3fd1734c.jpg)

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679632-318c59f0-d6bf-4fb1-9838-6094fa91ca02.jpg)

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679633-21cf0552-9619-44a2-854e-238049cf653e.jpg)

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679636-9e832e50-c04f-4a72-9fe8-9bc45f031284.jpg)

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679640-d216f7e0-2ddd-4ad1-ba08-80dc56cbf47f.jpg)

![App Screenshot](https://user-images.githubusercontent.com/85200452/242679644-a902e512-7e9c-4555-869a-0aa19025fa3b.jpg)
