# @talentir/datev-typescript

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

A TypeScript library for working with DATEV data formats and calculations. This library provides type-safe utilities and functions for handling DATEV-specific operations.

## Features

- 🎯 **Type-Safe**: Built with TypeScript for better development experience
- 📊 **Big.js Integration**: Precise decimal calculations using big.js
- 📅 **Date Handling**: Powered by dayjs for robust date operations
- ✅ **Runtime Validation**: Schema validation using Zod
- 📦 **Dual Package**: Supports both CommonJS and ESM

## Installation

```bash
npm install @talentir/datev-typescript
# or
yarn add @talentir/datev-typescript
# or
bun add @talentir/datev-typescript
```

## Usage

```typescript
import { /* your exports */ } from '@talentir/datev-typescript';

// Your usage examples here
```

## Development

### Prerequisites

- [Bun](https://bun.sh/docs/installation) (recommended)
- Node.js (alternative)

### Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/datev-typescript.git
cd datev-typescript
```

2. Install dependencies
```bash
bun install
```

3. Start development
```bash
bun dev
```

### Available Scripts

- `bun dev` - Run in development mode with watch
- `bun start` - Run the project
- `bun build` - Build the project
- `bun test` - Run tests

## Building

The project uses `tsup` for building, which creates both CommonJS and ESM outputs:

```bash
bun run build
```

This will generate:
- `dist/index.js` (CommonJS)
- `dist/index.mjs` (ESM)
- `dist/index.d.ts` (TypeScript declarations)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
