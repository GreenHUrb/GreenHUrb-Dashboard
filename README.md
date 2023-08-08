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
- [License](#license)

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 18.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://Drex72@bitbucket.org/greenhurb/greenhurb_dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd greenhurb_dashboard
   ```

3. Install the dependencies using npm or Yarn:

   ```bash
   npm install
    # or
   yarn
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
    npm run dev
    yarn dev
    ```

Open your browser and navigate to `http://localhost:5173` to see your application in action.

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

## License

This project is licensed under the MIT License.
