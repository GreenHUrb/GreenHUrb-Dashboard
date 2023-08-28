# GreenHUrb

Welcome to **GreenHUrb**! This README will guide you through the setup process and provide you with essential information about the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Development](#development)
- [Build](#build)
- [Contributing](#contributing)
- [Project Structure](#project-structure)
  - [Application Directory Structure](#application-directory-structure)
  - [Sub Directory README's](#sub-directory-readmes)
- [License](#license)

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 18.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (recommended)
- [docker](https://www.docker.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://Drex72@bitbucket.org/greenhurb/greenhurb_dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd greenhurb_dashboard
   ```

### Configuration

1. **Environment Variables:**

Copy the Env Structure from the `.env.example` file and use it to create your own `.env` file and update the values

```bash
cp .env.example .env
```

## Development

To start the development server, run the following command:

    ```bash
    npm start
    # or
    yarn start
    ```

Open your browser and navigate to `http://localhost:8000` to see your application in action.

## Build

To build the application for production, run:

    ```bash
    npm run build
    yarn build
    ```

This will create an optimized and minified version of your application in the `dist` directory.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## Project Structure

### Application Directory Structure

In Each directory there is a readme Specifying Guidelines for creating files and Directories and how the directory works

<pre>
├── public.json
├── index.html
├── .env.example
├── package.json
├── Dockerfile
├── docker-compose.yaml
├── package-lock.json
├── README.md
└── src
    └── assets          # Static assets  (e.g. logos, images)
        ├── icons
        ├── images
    ├── components      # Reusable React components (e.g., buttons, cards, forms)
    ├── config          # Configuration files and settings (e.g., environment variables)
    ├── data            # Data files or mocks (e.g., JSON data for testing)
    ├── features        # Modular feature components (e.g., Auth, etc)
    ├── HOC             # Higher Order Components (HOCs) (e.g., withAuth, withTheme)
    ├── hooks           # Custom React hooks (e.g., useLocalStorage, useWindowSize)
    ├── interfaces      # TypeScript interfaces and types (e.g., API response types)
    ├── layouts         # Layout components for structuring pages (e.g., header, footer)
    ├── pages
    ├── redux           # Redux-related (State Management) files () (e.g., slices, store)
    ├── router          # React Router configuration (e.g., route definitions)
    ├── services        # API services and utilities (e.g., API communication)
    ├── styles          # Global styles and CSS modules (e.g., common styles)
    ├── utils           # Utility functions (e.g., date formatting, string manipulation)
    ├── App.tsx         # Application Entry Point
    └── main.tsx
</pre>

### Sub-directory Readme's

For detailed explanations of each directory and how the system works within each, refer to the respective sub-directory READMEs:

- [components/README.md](./src/components/README.md)
- [config/README.md](./src/config/README.md)
- [features/README.md](./src/features/README.md)
- [hooks/README.md](./src/hooks/README.md)
- [interfaces/README.md](./src/interfaces/README.md)
- [layouts/README.md](./src/layouts/README.md)
- [pages/README.md](./src/pages/README.md)
- [redux/README.md](./src/redux/README.md)
- [router/README.md](./src/router/README.md)
- [services/README.md](./src/services/README.md)
- [styles/README.md](./src/styles/README.md)
- [utils/README.md](./src/utils/README.md)

## License

This project is licensed under the MIT License.
